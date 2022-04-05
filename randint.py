from random import randint
from tkinter import *

mylist = []

root = Tk()
root.title("Randint by Doniyor Programmer!")
root.geometry("800x600")

myLabel = Label(root, text="Boshi:", font=64)
myLabel.pack()
e = Entry(root, border=2.5, font=32)
e.pack()

myLabel1 = Label(root, text="Oxiri:", font=64)
myLabel1.pack()
e1 = Entry(root, border=2.5, font=32)
e1.pack()

myLabel2 = Label(root, text="Miqdori:", font=64)
myLabel2.pack()
e2 = Entry(root, border=2.5, font=32)
e2.pack()

def myClick():
    for i in range(int(e2.get())):
        mylist.append(randint(int(e.get()), int(e1.get())))
    txt1 = ""
    for item in mylist:
        txt1 += f"{item}; "
    myLabel3 = Label(root, text=txt1, font=64, padx=15, pady=15)
    myLabel3.pack()

myButton = Button(root, text="Random", padx=15, pady=5, command=myClick, fg="#fff", bg="#333", font=32)
myButton.pack()

root.mainloop()

# 00:35:04