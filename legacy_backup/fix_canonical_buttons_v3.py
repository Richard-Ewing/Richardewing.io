
import os
import re

directory = r'd:\Antigravity_RichardEwing.io\canonical'
# Broader regex: match <a ... href="/advisory.html" ... > ... Back to Advisory ... </a>
# We use non-greedy .*? to handle the content.
pattern = re.compile(r'<a\s+href="/advisory\.html"[^>]*>.*?Back to Advisory.*?</a>', re.DOTALL | re.IGNORECASE)

# Note: The replacement string
replacement_string = '<a href="/advisory.html" class="w-full block text-center bg-danger/10 border border-danger text-danger font-bold px-6 py-4 uppercase tracking-widest text-xs hover:bg-danger hover:text-white transition shadow-[0_0_15px_rgba(255,51,51,0.2)]">&larr; Back to Advisory</a>'

count = 0
for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # We only want to replace if it's NOT already the new style.
        # Check if it already has "bg-danger/10" (our unique marker for new style)
        if 'bg-danger/10' in content:
            continue

        if pattern.search(content):
            # If multiple exist (like the duplicate one), this might replace all of them separately if we use sub?
            # Or if they are adjacent, the regex might be tricky.
            # The previous duplicates were adjacent: </a><a ...>
            # The regex `<a ...>...</a>` matches one. `re.sub` will replace both if they match.
            # If we replace both with the new string, we'll have two red buttons.
            # We want only ONE red button.
            
            # Strategy: Find all matches. If more than 1, replace the whole block of matches with ONE button.
            # But they might not be adjacent.
            # However, looking at `senior-ceiling.html` (original), they were adjacent.
            # If they are adjacent, `re.sub` might work if I verify the result.
            
            # Let's just use re.sub for now. If we get two red buttons, I'll fix it in a post-pass or just assume the duplicates are rare?
            # Actually, `senior-ceiling.html` had duplicates. Others might too.
            # If `senior-ceiling.html` is already fixed (it is), I don't worry about it.
            # The other files likely have duplicates too if they were copied from same template.
            
            # To handle duplicates: Replace matched pattern with the replacement.
            # Then check if we have two replacements adjacent?
            # Better: Regex to match one OR MORE adjacent.
            # pattern = re.compile(r'(<a\s+href="/advisory\.html"[^>]*>.*?Back to Advisory.*?</a>\s*)+', re.DOTALL | re.IGNORECASE)
            # This would match 1 or more consecutive links.
            
            pattern_consecutive = re.compile(r'(<a\s+href="/advisory\.html"[^>]*>.*?Back to Advisory.*?</a>\s*)+', re.DOTALL | re.IGNORECASE)
            
            new_content = pattern_consecutive.sub(replacement_string, content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Fixed: {filename}")
                count += 1

print(f"Total files updated: {count}")
