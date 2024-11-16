from pydantic import BaseModel
from openai import OpenAI
import os
from typing import Union
from decimal import Decimal
from cdp.errors import ApiError
from cdp import *
import requests
from requests_oauthlib import OAuth1
import requests 
CDP_API_KEY_NAME = "organizations/19c60523-489a-4d08-bd67-09802f8c4e0e/apiKeys/9f181c6b-0957-4bfe-a6e1-94aada728557"
CDP_PRIVATE_KEY = """-----BEGIN EC PRIVATE KEY-----
MHcCAQEEINqKEOJ0pLfzf1/olxyRs5+4NgBcUmhIy7hQektwfyeboAoGCCqGSM49
AwEHoUQDQgAEz82hPpxZ6f0uDwJATmoirCzXIg+QSoGSxHX9GQhsQGYWSMVACbHY
2ZneIWr8AVvXOzp/SvuyWZFSXUeRjmEzbg== 
-----END EC PRIVATE KEY-----"""
Cdp.configure(CDP_API_KEY_NAME, CDP_PRIVATE_KEY)
file_path = "wallet_seed.json"

# Load or create a wallet
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

# Smart contract ABI and address for the vault contract
contract_abi = [
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

contract_address = "0xeea40921519F31e1b5976d69695d952ea19A3b03"  # Replace with the actual contract address

def self.create_disaster():
    """Call the unlock function of the contract with hardcoded parameters."""
    event_id = 123  # Hardcoded event ID (not used in this context)
    attestation_id = bytes.fromhex('abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc1')
    funds_needed = 1000  # Hardcoded amount

    try:
        args = {
            'attestationId': attestation_id.hex(),  # Convert bytes to hex string
            'amount': str(int(funds_needed))
        }

        invocation = agent_wallet.invoke_contract(
            contract_address=contract_address,
            abi=contract_abi,
            method="createDisaster",
            args=args  
        )

        invocation.wait()
        
        tx_hash = invocation.transaction_hash
        
        return f"{tx_hash}"
    
    except ApiError as api_err:
        return f"Error invoking unlock function: {api_err.http_code} - {api_err.api_code}: {api_err.api_message}"
    
    except Exception as e:
        return f"Unexpected error invoking unlock function: {str(e)}"

if __name__ == "__main__":
    result = create_disaster()
    print(result)