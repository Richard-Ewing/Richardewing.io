
import os

directory = r'd:\Antigravity_RichardEwing.io\canonical'
old_style_marker = 'text-zinc-400'
new_style_marker = 'bg-danger/10'
link_text = 'Back to Advisory'

print(f"{'Filename':<40} | {'Status':<10}")
print("-" * 60)

for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if link_text in content:
            if new_style_marker in content:
                status = "RED (FIXED)"
            elif old_style_marker in content:
                status = "OLD (NEEDS FIX)"
            else:
                status = "UNKNOWN STYLE"
        else:
            status = "MISSING BUTTON"
            
        print(f"{filename:<40} | {status:<10}")
