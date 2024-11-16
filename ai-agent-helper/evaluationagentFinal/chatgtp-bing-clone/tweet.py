import requests
from requests_oauthlib import OAuth1

# Replace these with your actual API keys and tokens
api_key = 'pG4v7OjUJWisZmeRTL8LzfDzn'
api_secret = 'ZZEaqj25wX4wbR8WtGuvZQ2Rp7LC2SMQLvLY19bCM9DyvpWKbJ'
access_token = '1617538045682810883-KGHmH1jwoBpNeysi3KL8kJMynAk4m1'
access_token_secret = 'GaDUDagQCb7pES7cpBAXlcibHt5YudLz4fwqvvPK8gRAJ'

# Set up OAuth1 authentication
auth = OAuth1(api_key, api_secret, access_token, access_token_secret)

# Define the tweet text
tweet_text = "Hello, World! This is my first tweet from Python."

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