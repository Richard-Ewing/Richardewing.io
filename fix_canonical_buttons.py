
import os

directory = r'd:\Antigravity_RichardEwing.io\canonical'
target_string = '<a href="/advisory.html" class="w-full block text-center bg-transparent border border-zinc-700 text-zinc-400 font-bold px-6 py-4 uppercase tracking-widest text-xs hover:border-danger hover:text-danger transition">&larr; Back to Advisory</a><a href="/advisory.html" class="w-full block text-center bg-transparent border border-zinc-700 text-zinc-400 font-bold px-6 py-4 uppercase tracking-widest text-xs hover:border-danger hover:text-danger transition">&larr; Back to Advisory</a>'
replacement_string = '<a href="/advisory.html" class="w-full block text-center bg-danger/10 border border-danger text-danger font-bold px-6 py-4 uppercase tracking-widest text-xs hover:bg-danger hover:text-white transition shadow-[0_0_15px_rgba(255,51,51,0.2)]">&larr; Back to Advisory</a>'

count = 0
for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if target_string in content:
            new_content = content.replace(target_string, replacement_string)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed: {filename}")
            count += 1
        else:
            # Try matching just the single occurrence if double isn't found, to update style?
            # User said "make sure theres only 1 advisory page... make the button red"
            # So if there is 1 old button, I should also update it to red.
            single_target = '<a href="/advisory.html" class="w-full block text-center bg-transparent border border-zinc-700 text-zinc-400 font-bold px-6 py-4 uppercase tracking-widest text-xs hover:border-danger hover:text-danger transition">&larr; Back to Advisory</a>'
            if single_target in content:
                 new_content = content.replace(single_target, replacement_string)
                 with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                 print(f"Updated style: {filename}")
                 count += 1

print(f"Total files updated: {count}")
