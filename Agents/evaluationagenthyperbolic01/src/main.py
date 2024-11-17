from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from googleapiclient.discovery import build
from hyperbolic import Hyperbolic
from typing import List, Tuple, Optional
import os

app = FastAPI(
    title="Disaster Tweet Generator API",
    description="An API that generates humanized tweets about recent disasters based on date inputs",
    version="1.0.0"
)

# Replace this with your actual Hyperbolic API key
HYPERBOLIC_API_KEY = ""
client = Hyperbolic(api_key=HYPERBOLIC_API_KEY)

class ChatRequest(BaseModel):
    query: str

class ChatResponse(BaseModel):
    response: str
    search_query: str

class GoogleChat:
    def __init__(self):
        self.service = build(
            "customsearch", 
            "v1", 
            developerKey="AIzaSyCXSIY4SuqD8oy3HNzVzoNsJtvqHn4-tmA"
        )
        self.history: List[Tuple[str, Optional[str]]] = []

    def _search(self, query: str) -> list:
        try:
            response = (
                self.service.cse()
                .list(
                    q=query,
                    cx="22519d08efb844a5d"
                )
                .execute()
            )
            return response['items']
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Google Search API error: {str(e)}")

    def _get_search_query(self, query: str) -> str:
        try:
            messages = [{"role": "system",
                        "content": "You are an assistant that helps to convert text into a web search engine query. "
                                 "You output only 1 query for the latest message and nothing else."}]

            for message in self.history:
                messages.append({"role": "user", "content": message[0]})

            messages.append({"role": "user", "content": "Based on my previous messages, "
                                                      "what is the most relevant web search query for the text below?\n\n"
                                                      "Text: " + query + "\n\n"
                                                      "Query:"})

            # Using Hyperbolic's chat completion API
            response = client.chat.create(
                messages=messages,
                model="gpt-4-turbo",  # Assuming Hyperbolic supports similar model names
                temperature=0
            )
            
            return response.content.strip("\"")
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Hyperbolic API error in search query generation: {str(e)}")

    def get_response(self, query: str) -> dict:
        try:
            search_query = self._get_search_query(query)

            messages = [{"role": "system",
                        "content": "You are a search assistant that searches for recent disasters across the web and make a tweet which is humanlike with emojis "
                        "MOST IMPORTANT: You will only receive a date. You should search the web for disasters which took place on that date, or a disaster which happened recent to that date and use it. "
                        "the tweet should contain a short summary of the disaster, the damages caused and the requirements needed by the people in those affected areas and the cost to meet those demands in USD "
                        "the tweet should talk about a disaster which happened only in the month of November 2024 and you should talk about only ONE disaster, don't club more disasters together as a single tweet "
                        "Your response should be in this specific format ONLY!!! "
                        "Tweet: [the tweet content for the recent disaster as per the instructions provided with a short summary of the disaster, damages caused, commodities needed by the people in the affected area, the amount of funds needed, hashtags. And please make the tweet sound as much as human as possible!!!] "
                        "Disaster: [what disaster took place eg: tsunami, drought, earthquake, fire etc.] "
                        "Location: [the area where the disaster took place] "
                        "timeAndDate: [the date and approx time at which the disaster took place] "
                        "fundsNeeded: [the amount of funds needed by the people in that affected area as a UINT256 value]"}]

            for message in self.history:
                messages.append({"role": "user", "content": message[0]})
                if message[1]:
                    messages.append({"role": "assistant", "content": message[1]})

            prompt = "Answer query using the information from the search results below: \n\n"
            results = self._search(search_query)
            for result in results:
                prompt += "Link: " + result['link'] + "\n"
                prompt += "Title: " + result['title'] + "\n"
                prompt += "Content: " + result['snippet'] + "\n\n"
            prompt += "Query: " + query
            messages.append({"role": "user", "content": prompt})

            # Using Hyperbolic's chat completion API
            response = client.chat.create(
                messages=messages,
                model="gpt-3.5-turbo",  # Assuming Hyperbolic supports similar model names
                temperature=0.4
            )

            response_text = response.content
            self.history.append((query, response_text))
            
            return {
                "response": response_text,
                "search_query": search_query
            }
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Error processing request: {str(e)}")

# Initialize the bot
bot = GoogleChat()

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Generate a disaster-related tweet based on the input date.
    
    Parameters:
    - query: The date to search for disasters
    
    Returns:
    - response: Generated tweet and disaster information
    - search_query: The search query used to find the disaster information
    """
    try:
        result = bot.get_response(request.query)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def root():
    """
    Root endpoint that returns API information
    """
    return {
        "message": "Welcome to the Disaster Tweet Generator API",
        "version": "1.0.0",
        "endpoints": {
            "/chat": "POST - Generate disaster-related tweets",
            "/": "GET - This information"
        }
    }

# Error handling
@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return {
        "status_code": exc.status_code,
        "detail": str(exc.detail)
    }