from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from googleapiclient.discovery import build
from openai import OpenAI
import os
from typing import Union
from decimal import Decimal
from cdp.errors import ApiError
from cdp import *
import requests
from requests_oauthlib import OAuth1
import requests  # New import for making HTTP requests

api_key = 'pG4v7OjUJWisZmeRTL8LzfDzn'
api_secret = 'ZZEaqj25wX4wbR8WtGuvZQ2Rp7LC2SMQLvLY19bCM9DyvpWKbJ'
access_token = '1617538045682810883-KGHmH1jwoBpNeysi3KL8kJMynAk4m1'
access_token_secret = 'GaDUDagQCb7pES7cpBAXlcibHt5YudLz4fwqvvPK8gRAJ'

# Set up OAuth1 authentication
auth = OAuth1(api_key, api_secret, access_token, access_token_secret)

def post_tweet(organization_name, fund_donated, cause):
    """
    Posts a tweet with the donation details.
    
    Args:
        organization_name (str): Name of the organization that donated.
        fund_donated (Union[int, float, Decimal]): Amount of funds donated.
        cause (str): Cause that the funds were donated towards.
    """
    tweet_text = f"Donation Alert! {organization_name} was released ${fund_donated} from the vault for {cause}."

    # X API v2 endpoint for posting tweets
    url = "https://api.twitter.com/2/tweets"

    # Data payload (tweet content)
    payload = {
        "text": tweet_text
    }

    # Make the request to post a tweet
    response = requests.post(url, json=payload, auth=auth)

    if response.status_code == 201:
        print("Tweet posted successfully!")
    else:
        print(f"Error posting tweet: {response.json()}")
# Replace this with your actual OpenAI API key
OPENAI_API_KEY = "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"
client = OpenAI(api_key=OPENAI_API_KEY)

# Initialize FastAPI app
app = FastAPI()

# Pydantic model for input validation including wallet address
class DonationQuery(BaseModel):
    organization_name: str
    fund_donated: str
    cause: str
    wallet_address: str
    vault_balance: str# New field for wallet address

# Google Chat class (unchanged)
class GoogleChat:
    def __init__(self):
        self.service = build(
            "customsearch", 
            "v1", 
            developerKey="AIzaSyCXSIY4SuqD8oy3HNzVzoNsJtvqHn4-tmA"
        )
        self.history = []

    def _search(self, query):
        response = (
            self.service.cse()
            .list(
                q=query,
                cx="22519d08efb844a5d"
            )
            .execute()
        )
        return response['items']

    def _get_search_query(self, query):
        messages = [{"role": "system",
                     "content": "You are an assistant that helps to convert text into a web search engine query. "
                                "You output only 1 query for the latest message and nothing else."}]
        for message in self.history:
            messages.append({"role": "user", "content": message[0]})

        messages.append({"role": "user", "content": f"Based on my previous messages, "
                                                    f"what is the most relevant web search query for the text below?\n\n"
                                                    f"Text: {query}\n\n"
                                                    f"Query:"})

        response = client.chat.completions.create(
            model="gpt-4-turbo",
            messages=messages,
            temperature=0
        )
        
        return response.choices[0].message.content.strip("\"")

    def get_response(self, query):
        search_query = self._get_search_query(query)
        results = self._search(search_query)
        
        prompt = "Answer query using the information from the search results below:\n\n"
        for result in results:
            prompt += "Link: " + result['link'] + "\n"
            prompt += "Title: " + result['title'] + "\n"
            prompt += "Content: " + result['snippet'] + "\n\n"
        prompt += "Query: " + query
        
        messages = [{"role": "system",
                     "content": "Your job is to crosscheck the internet if an organization has donated a specific amount in USD or any other currency to a specific cause. "
                                "If the organization made the donation specified, respond with 'yes'. Otherwise, respond with 'no'. NOTHING MORE."}]
        
        for message in self.history:
            messages.append({"role": "user", "content": message[0]})
            if message[1]:
                messages.append({"role": "assistant", "content": message[1]})
        
        messages.append({"role": "user", "content": prompt})

        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages,
            temperature=0.4
        )
        
        response_text = response.choices[0].message.content.strip()
        self.history.append((query, response_text))
        return response_text

# Instantiate the GoogleChat bot
bot = GoogleChat()

# Configure CDP with the API key and private key (unchanged)
CDP_API_KEY_NAME = "organizations/19c60523-489a-4d08-bd67-09802f8c4e0e/apiKeys/9f181c6b-0957-4bfe-a6e1-94aada728557"
CDP_PRIVATE_KEY = """-----BEGIN EC PRIVATE KEY-----
MHcCAQEEINqKEOJ0pLfzf1/olxyRs5+4NgBcUmhIy7hQektwfyeboAoGCCqGSM49
AwEHoUQDQgAEz82hPpxZ6f0uDwJATmoirCzXIg+QSoGSxHX9GQhsQGYWSMVACbHY
2ZneIWr8AVvXOzp/SvuyWZFSXUeRjmEzbg== 
-----END EC PRIVATE KEY-----"""

Cdp.configure(CDP_API_KEY_NAME, CDP_PRIVATE_KEY)

file_path = "wallet_seed.json"

# Load or create a wallet (unchanged)
if os.path.exists(file_path):
    fetched_wallet = Wallet.fetch("03705819-7f52-4b81-a306-eb53434624c3")  # Replace with appropriate wallet ID
    fetched_wallet.load_seed(file_path)
    agent_wallet = fetched_wallet
    print(f"Loaded existing wallet: {agent_wallet._address}")
else:
    agent_wallet = Wallet.create()
    print(f"Public address of the created wallet: {agent_wallet._address}")
    wallet_data = agent_wallet.export_data()
    agent_wallet.save_seed(file_path, encrypt=True)
    print(f"Seed for wallet {agent_wallet.id} saved to {file_path}")

# Smart contract ABI and address for the vault contract (unchanged)
contract_abi = [
    {
        "inputs": [
            {"internalType": "uint256", "name": "eventId", "type": "uint256"},
            {"internalType": "address", "name": "organization", "type": "address"},
            {"internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "unlock",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

contract_address = "0xaCF35BCC306a71760900f14bA3947A35CA99E9D6"  # Replace with the actual contract address

# Function to invoke the unlock method on the contract (unchanged)
def unlock_funds(event_id: int, organization: str, amount: Union[int, float, Decimal]):
    """Call the unlock function of the contract with the provided parameters."""
    try:
        # Prepare args as a dictionary with proper types (string for uint256)
        args = {
            'eventId': str(event_id),
            'organization': organization,
            'amount': str(int(amount))
        }

        # Use the wallet to invoke the contract's unlock method
        invocation = agent_wallet.invoke_contract(
            contract_address=contract_address,
            abi=contract_abi,
            method="unlock",
            args=args  # Pass as a dictionary directly
        )

        # Wait for the transaction to complete and get transaction hash
        invocation.wait()
        
        # Ensure transaction hash is returned as a string
        tx_hash = invocation.transaction_hash
        
        return f"{tx_hash}"
    
    except ApiError as api_err:
        return f"Error invoking unlock function: {api_err.http_code} - {api_err.api_code}: {api_err.api_message}"
    
    except Exception as e:
        return f"Unexpected error invoking unlock function: {str(e)}"

# New function to send data to /create-attestation endpoint after contract call
def send_to_attestation(organization_name: str, fund_donated: Union[int, float, Decimal], cause: str, wallet_address: str):
    fund_donated_int = int(float(fund_donated))
    payload = {
        "organizationName": organization_name,
        "fundDonated": str(fund_donated_int),
        "cause": cause,
        "walletAddress": wallet_address
    }
    
    try:
        response = requests.post("http://127.0.0.1:3000/create-attestation", json=payload)
        post_tweet(organization_name, fund_donated, cause)
        return response.json()  # Return the response from the /create-attestation endpoint
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}

# FastAPI endpoint with additional logic for invoking contract on 'yes'
@app.post("/check_donation/")
async def check_donation(query: DonationQuery):
    # Format the query string
    query_string = f"{query.organization_name} {query.fund_donated} donation to {query.cause}"
    
    try:
        # Get the response from the bot
        response = bot.get_response(query_string)
        
        # Check if response is 'yes' and invoke unlock_funds if true
        if response.lower() == 'yes':
            event_id = 1234  # Generate or fetch a random event ID as needed
            amount_donated = float(query.fund_donated)  # Convert to float for contract compatibility
            wallet_address = query.wallet_address
            vault_balance = float(query.vault_balance)
            if amount_donated <= vault_balance:
                final_amount = amount_donated
            else:
                final_amount = vault_balance * 0.9 
            final_amount_int = int(final_amount)
            # Invoke the smart contract function
            tx_hash = unlock_funds(event_id, query.wallet_address, final_amount_int)
            
            # Send additional data to the attestation service
            attestation_response = send_to_attestation(query.organization_name, final_amount_int, query.cause, query.wallet_address)
            
            return {
                "contract_tx_hash": tx_hash,
                "attestation_response": attestation_response
            }
        
        # If response is not 'yes', return the bot's response
        return {"response": response}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing request: {str(e)}")