
import os
import re

directory = r'd:\Antigravity_RichardEwing.io\canonical'
# Regex to match the old button, handling whitespace and newlines
# It looks for href="/advisory.html", then the specific class (checking for zinc-400 and hover:text-danger to be specific enough),
# then the content "&larr; Back to Advisory", and closing tag.
pattern = re.compile(r'<a href="/advisory\.html"\s+class="w-full block text-center bg-transparent border border-zinc-700 text-zinc-400 font-bold px-6 py-4 uppercase tracking-widest text-xs hover:border-danger hover:text-danger transition">\s*&larr; Back to Advisory\s*</a>', re.DOTALL)

replacement_string = '<a href="/advisory.html" class="w-full block text-center bg-danger/10 border border-danger text-danger font-bold px-6 py-4 uppercase tracking-widest text-xs hover:bg-danger hover:text-white transition shadow-[0_0_15px_rgba(255,51,51,0.2)]">&larr; Back to Advisory</a>'

count = 0
for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if match exists
        if pattern.search(content):
            new_content = pattern.sub(replacement_string, content)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed: {filename}")
            count += 1
        else:
            # Check for the duplicate style specifically just in case (though previous script handled it)
            # if we didn't run the previous script on these files.
            pass

print(f"Total files updated: {count}")
