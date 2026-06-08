import urllib.request
import json
import time

# Queries mapped to RichardEwing.io core topics
queries = [
    {"q": "AI ROI OR unit economics", "sr": "ProductManagement"},
    {"q": "agile transformation failed OR SAFE", "sr": "ProductManagement"},
    {"q": "AI replacing developers OR vibe coding", "sr": "ExperiencedDevs"},
    {"q": "AI tech debt OR maintainability", "sr": "ExperiencedDevs"},
    {"q": "AI product market fit", "sr": "SaaS"},
    {"q": "AI operational costs OR LLM cost", "sr": "SaaS"}
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

all_results = []

for item in queries:
    query = urllib.parse.quote(item['q'])
    sr = item['sr']
    url = f"https://www.reddit.com/r/{sr}/search.json?q={query}&restrict_sr=1&sort=top&t=year&limit=15"
    
    print(f"Fetching: {url}")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            children = data.get('data', {}).get('children', [])
            
            for child in children:
                post = child['data']
                all_results.append({
                    "subreddit": sr,
                    "query": item['q'],
                    "title": post.get('title', ''),
                    "score": post.get('score', 0),
                    "num_comments": post.get('num_comments', 0),
                    "selftext": post.get('selftext', '')[:1000] # First 1000 chars of body
                })
        time.sleep(2) # rate limiting
    except Exception as e:
        print(f"Error fetching {url}: {e}")

# Save to file
with open(".scratch/reddit_data.json", "w", encoding='utf-8') as f:
    json.dump(all_results, f, indent=2)

print(f"Successfully scraped {len(all_results)} posts.")
