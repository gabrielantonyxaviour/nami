from googleapiclient.discovery import build
from openai import OpenAI
import os
from cdp import Cdp
from cdp.smart_contract import SmartContract
from cdp.errors import ApiError
import requests
import json
from cdp import *
import uvicorn
from web3 import Web3
import tweepy
import time
from requests_oauthlib import OAuth1
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
app = FastAPI()

class DisasterRequest(BaseModel):
    query: str
class DisasterResponse(BaseModel):
    attestation_id: str
    funds_needed: int
    full_response: str

# Twitter API credentials
api_key = 'pG4v7OjUJWisZmeRTL8LzfDzn'
api_secret = 'ZZEaqj25wX4wbR8WtGuvZQ2Rp7LC2SMQLvLY19bCM9DyvpWKbJ'
access_token = '1617538045682810883-KGHmH1jwoBpNeysi3KL8kJMynAk4m1'
access_token_secret = 'GaDUDagQCb7pES7cpBAXlcibHt5YudLz4fwqvvPK8gRAJ'

# Initialize OpenAI client with Hyperbolic configuration
HYPERBOLIC_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYXJzaGFsLjI1ZWNAbGljZXQuYWMuaW4iLCJpYXQiOjE3MzE3NDk2NjZ9.uve4IcaQl914Dy3PeGZ8J33Nn6PcZTuDse3R-SQ-wrg"
client = OpenAI(
    api_key=HYPERBOLIC_API_KEY,
    base_url="https://api.hyperbolic.xyz/v1"
)

# CDP Configuration
CDP_API_KEY_NAME = "organizations/19c60523-489a-4d08-bd67-09802f8c4e0e/apiKeys/9f181c6b-0957-4bfe-a6e1-94aada728557"
CDP_PRIVATE_KEY = """-----BEGIN EC PRIVATE KEY-----
MHcCAQEEINqKEOJ0pLfzf1/olxyRs5+4NgBcUmhIy7hQektwfyeboAoGCCqGSM49
AwEHoUQDQgAEz82hPpxZ6f0uDwJATmoirCzXIg+QSoGSxHX9GQhsQGYWSMVACbHY
2ZneIWr8AVvXOzp/SvuyWZFSXUeRjmEzbg== 
-----END EC PRIVATE KEY-----"""

Cdp.configure(CDP_API_KEY_NAME, CDP_PRIVATE_KEY)

# Smart contract configurations remain the same
contract_abi = [
    {
        "inputs": [],
        "name": "getVaultAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "_contractAddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "address", "name": "_vaultImplementation", "type": "address"}
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {"internalType": "bytes32", "name": "attestationId", "type": "bytes32"},
            {"internalType": "uint256", "name": "amount", "type": "uint256"}
        ],
        "name": "createDisaster",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
]

contract_abi1 = [
    {
        "inputs": [
            {
                "components": [
                    {"internalType": "string", "name": "name", "type": "string"},
                    {"internalType": "string", "name": "description", "type": "string"},
                    {"internalType": "string", "name": "disasterType", "type": "string"},
                    {"internalType": "string", "name": "location", "type": "string"},
                    {"internalType": "uint256", "name": "fundsNeeded", "type": "uint256"},
                    {"internalType": "address", "name": "vaultAddress", "type": "address"},
                    {"internalType": "string", "name": "ensName", "type": "string"},
                    {"internalType": "string", "name": "baseName", "type": "string"}
                ],
                "internalType": "struct TestingAiClient.Disaster",
                "name": "_params",
                "type": "tuple"
            }
        ],
        "name": "createDisaster",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

contract_address = "0xeea40921519F31e1b5976d69695d952ea19A3b03"
contract_address1 = "0xd7a21be117996921a892a3A073DdA28233F70E6c"
network_id = "base-sepolia"

file_path = "wallet_seed.json"
chat_bot = None

@app.on_event("startup")
async def startup_event():
    global chat_bot
    chat_bot = GoogleChat()
    
    # Initialize wallet
    file_path = "wallet_seed.json"
    if os.path.exists(file_path):
        fetched_wallet = Wallet.fetch("03705819-7f52-4b81-a306-eb53434624c3")
        fetched_wallet.load_seed(file_path)
        chat_bot.agent_wallet = fetched_wallet
        print(f"Loaded existing wallet: {chat_bot.agent_wallet.default_address.address_id}")
    else:
        chat_bot.agent_wallet = Wallet.create()
        print(f"Public address of the created wallet: {chat_bot.agent_wallet._address}")
        wallet_data = chat_bot.agent_wallet.export_data()
        chat_bot.agent_wallet.save_seed(file_path, encrypt=True)
        print(f"Seed for wallet {chat_bot.agent_wallet.id} saved to {file_path}")

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

        messages.append({"role": "user", "content": f"Based on my previous messages, what is the most relevant web search query for the text below?\n\nText: {query}\n\nQuery:"})

        response = client.chat.completions.create(
            model="meta-llama/Meta-Llama-3-70B-Instruct",  # Changed from gpt-4-turbo
            messages=messages,
            temperature=0
        )
        
        return response.choices[0].message.content.strip("\"")

    def get_response(self, query):
        search_query = self._get_search_query(query)
        print("\nSearching for:", search_query)
        print("-" * 50)

        messages = [{"role": "system",
                     "content": ("1.) Your job is to search the ENTIRE internet for a recent disaster in November 2024 and give me the output in the following way "
                                 "2.) Your output should always follow ONLY this template and NEVER EVER deviate from it "
                                 "3.) name: [Random name associated with the disaster] "
                                 "description: [A description of what the disaster is all about] "
                                 "type: [The type of disaster (earthquake, flood, drought etc.) fill this area by categorizing what kind of disaster it is] "
                                 "location: [The location in which the disaster took place] "
                                 "date: [The date on which the disaster took place] "
                                 "funds needed: [The amount of money needed in USD by the people in that affected area to overcome the loss] MOST IMPORTANT RULE: This value should NEVER EVER contain special characters or words or commas. It should be a number. eg: 200000, 400000 etc. Calculate the amount of funds needed by the people in that area by taking into account the factors like: damage to properties, lives lost, people injured, infrastructure damages and be reasonable with your calculation."
                                 "ens subdomain: [a simple name associated with the disaster] "
                                 "base subdomain: [same as the ens subdomain name] "
                                 "vault address: [The address of the vault where the funds will be stored] "
                                 "tweet content: [Create a tweet with the details about the disaster asking for help. The tweet should contain information about the disaster, the location, people affected and especially the funds needed. Be as human as possible when creating this tweet content]"
                                 "latitude: [The exact latitude of where the place is present in the world]"
                                 "longitude: [The exact longitude of where the place is present in the world]")}]

        for message in self.history:
            messages.append({"role": "user", "content": message[0]})
            if message[1]:
                messages.append({"role": "assistant", "content": message[1]})

        prompt = f"Answer query using the information from the search results below: \n\n"
        results = self._search(search_query)
        for result in results:
            prompt += f"Link: {result['link']}\nTitle: {result['title']}\nContent: {result['snippet']}\n\n"
        
        prompt += f"Query: {query}"
        messages.append({"role": "user", "content": prompt})

        response = client.chat.completions.create(
            model="meta-llama/Meta-Llama-3-70B-Instruct",  # Changed from gpt-4-turbo
            messages=messages,
            temperature=0.7
        )

        response_text = response.choices[0].message.content
        print("\nComplete AI Response:")
        print("=" * 50)
        print(response_text)
        print("=" * 50)
        
        # Rest of the method remains the same...
        # Parse response_text, handle Twitter posting, create attestation, etc.
        tweet_content = ""
        
        for line in response_text.strip().split('\n'):
            if line.startswith("tweet content: "):
                tweet_content = line.split(': ', 1)[1]

        print(tweet_content)

        data = {}
        for line in response_text.strip().split('\n'):
            if ': ' in line:
                key, value = line.split(': ', 1)
                if key == 'funds needed':
                    data[key] = int(value)
                else:
                    data[key] = value

        data['vaultAddress'] = self.read_vault_address()
        tweet_content = data.get("tweet content", "")
        vault_address = data.get("vaultAddress", "")

        try:
            current_time = int(time.time())
            timestamp_value = str(current_time + 300)
            print(timestamp_value)
            funds_needed_value = str(int(data["funds needed"]))
            
            vault_address = str(data["vaultAddress"])
            if vault_address.startswith('0x'):
                vault_address = vault_address[2:]
            vault_address = f"0x{vault_address}"
            disaster_params = {
                '_params': (
                    str(data["name"]).strip(),
                    str(data["description"]).strip(),
                    str(data["type"]).strip(),
                    str(data["location"]).strip(),
                    funds_needed_value,
                    vault_address,
                    str(data["ens subdomain"]).strip(),
                    str(data["base subdomain"]).strip()
                )
            }
            
            print("Raw values being sent - timestamp:", timestamp_value)
            print("Raw values being sent - funds:", funds_needed_value)
            print("Raw values being sent - address:", vault_address)
            print("Complete disaster params being sent:", disaster_params)
            
            invocation = self.agent_wallet.invoke_contract(
                contract_address=contract_address1,
                abi=contract_abi1,
                method="createDisaster",
                args=disaster_params
            )
            invocation.wait()
            print(f"TestingAiClient contract call successful: {invocation.transaction_hash}")
        except Exception as e:
            print(f"Error calling TestingAiClient contract: {str(e)}")
            print("Disaster params that caused error:", disaster_params)

        # Twitter posting
        auth = OAuth1(api_key, api_secret, access_token, access_token_secret)
        tweet_text = f"{tweet_content} {vault_address}"
        url = "https://api.twitter.com/2/tweets"
        payload = {"text": tweet_text}
        response = requests.post(url, json=payload, auth=auth)

        if response.status_code == 201:
            print("Tweet posted successfully!")
        else:
            print(f"Error posting tweet: {response.json()}")

        # Create attestation
        response_from_endpoint = self.send_to_attestation_endpoint(data)

        self.history.append((query, response_text))
        
        print("\nAttestation Response:")
        print("-" * 50)
        print(response_from_endpoint)
        print("-" * 50)
        
        attestationId = response_from_endpoint['data']['attestationId']
        funds_needed = data["funds needed"]

        tx_hash = self.create_disaster(attestationId, funds_needed)
        print(f"Transaction hash: {tx_hash}")
        
        return attestationId, funds_needed, response_text

    # The rest of the methods remain unchanged
    def read_vault_address(self):
        try:
            vault_address = SmartContract.read(
                network_id=network_id,
                contract_address=contract_address,
                method="getVaultAddress",
                abi=contract_abi,
            )
            return vault_address
        except ApiError as api_err:
            return f"Error reading vault address: {api_err.http_code} - {api_err.api_code}: {api_err.api_message}"
        
        except Exception as e:
            return f"Unexpected error reading vault address: {str(e)}"

    def send_to_attestation_endpoint(self, data):
        url = "http://127.0.0.1:3000/create-attestation"
        payload = {
            "name": data["name"],
            "description": data["description"],
            "type": data["type"],
            "location": data["location"],
            "date": data["date"],
            "fundNeeded": data["funds needed"],
            "vaultAddress": data["vaultAddress"],
            "ensSubdomain": data["ens subdomain"],
            "baseSubdomain": data["base subdomain"]
        }
        headers = {
            'Content-Type': 'application/json'
        }

        response = requests.post(url, headers=headers, data=json.dumps(payload))
        
        if response.status_code == 200:
            print("Attestation created successfully!")
            response_json = response.json()
            attestationId = response_json['data']['attestationId'] # use this!!!
            funds_needed = data["funds needed"] #use this !!!
            print("Attestation ID:", attestationId)
            print("Funds Needed:", funds_needed)
            return response.json()  # Return the response from the endpoint
        else:
            print(f"Failed to create attestation. Error: {response.json()['error']}")
            return response.json()  # Return the error response

    def create_disaster(self, attestationId, funds_needed):
        """Call the unlock function of the contract with hardcoded parameters."""
        event_id = 123  # Hardcoded event ID (not used in this context)
        
        try:
            attestationId=int(attestationId, 16)
            bytes32_value = attestationId.to_bytes(32, byteorder='big').hex()
            args = {
                'attestationId': bytes32_value,  
                'amount': str(int(funds_needed)) 
            }

            invocation = self.agent_wallet.invoke_contract(
                contract_address=contract_address,
                abi=contract_abi,
                method="createDisaster",
                args=args  
            )

            invocation.wait()
            
            tx_hash = invocation.transaction_hash
            return f"Transaction hash: {tx_hash}"      
        except ApiError as api_err:
            return f"Error invoking unlock function: {api_err.http_code} - {api_err.api_code}: {api_err.api_message}"
        
        except Exception as e:
            return f"Unexpected error invoking unlock function: {str(e)}"       
        
@app.post("/report-disaster/", response_model=DisasterResponse)
async def report_disaster(request: DisasterRequest):
    try:
        if not chat_bot:
            raise HTTPException(status_code=500, detail="Service not properly initialized")

        # Process the disaster report
        attestation_id, funds_needed, response = chat_bot.get_response(request.query)
        
        return DisasterResponse(
            attestation_id=attestation_id,
            funds_needed=funds_needed,
            full_response=response
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == '__main__':
   uvicorn.run(app, host="0.0.0.0", port=8000)