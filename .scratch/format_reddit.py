import json

with open('.scratch/reddit_data.json', encoding='utf-8') as f:
    data = json.load(f)

# Sort by score
data.sort(key=lambda x: x['score'], reverse=True)

with open('.scratch/top_reddit.md', 'w', encoding='utf-8') as out:
    for d in data[:30]:
        out.write(f"### [{d['subreddit']}] (Score: {d['score']})\n")
        out.write(f"**{d['title']}**\n\n")
        out.write(f"{d['selftext'][:400]}...\n")
        out.write("---\n")
