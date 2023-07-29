import os

counter = 1

while counter < 114:
    counter += 1
    os.system(f"cp page1.html page{counter}.html")
