import requests

response = requests.get("https://api.kanye.rest")
data = response.json()
print(data['quote'])