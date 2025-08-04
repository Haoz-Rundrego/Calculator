import customtkinter as ctk
import tkinter as tk
# налаштування CTk theme
ctk.set_appearance_mode("dark")  # або "light", "system"
ctk.set_default_color_theme("dark-blue")  # також доступні: "green", "dark-blue"

#Root
root = ctk.CTk()
root.geometry("370x560")
root.title("Calculator on the python")

#Class for DRY
class Button(ctk.CTkButton):
    def __init__(self,Master,Text,Width=80,Height=80,T_c="#000000",Fg_color="#959595",bor_col="#000000",bor_wid=5,bor_rad=6):
        super().__init__(master=Master,
                         text=Text,
                         font=("Arial",24,"bold"),
                         width=Width,height=Height,
                         text_color=T_c,
                         fg_color=Fg_color,
                         border_color=bor_col,
                         border_width=bor_wid,
                         corner_radius=bor_rad,
                         hover_color="#E6D0D0",
                         command=lambda:on_click(self))

    def place(self,X,Y):
        super().place(x=X,y=Y)

    def size(self,lon,hei):
        self.configure(width=lon,height=hei)

class Label(ctk.CTkLabel):
    def __init__(self,Master,Text,Width=350,Height=80,T_c="#000000",Fg_color="#ffffff",bor_rad=6):
        super().__init__(master=Master,text=Text,width=Width,height=Height,text_color=T_c,fg_color=Fg_color,corner_radius=bor_rad,font=("Arial",28,"bold"))
    def place(self,X,Y):
        super().place(x=X,y=Y)

#Entry Lable
question = ""
label = Label(root,question)
label.place(10,10)

#Buttons
buttons ={}
names = ["AC","(", ")", "/",
         "1", "2", "3", "*",
         "4", "5", "6", "-",
         "7", "8", "9", "+", 
         ".", "0", "ec","="]
for name in names:
    buttons[name] = Button(root,name)
#Place Button
for i in range(len(names)//5):
    for but in range(5):
        buttons[names[0 +4*but]].place(10,100+90*but)
    for but in range(5):
        buttons[names[1 +4*but]].place(100,100+90*but)
    for but in range(5):
        buttons[names[2 +4*but]].place(190,100+90*but)
    for but in range(5):
        buttons[names[3 +4*but]].place(280,100+90*but)

#Logic write text
def anew_lable():
    label.configure(text=question)

def on_click(self):
    global question
    # clear all lable
    if self == buttons["AC"]:
        question = ""
        anew_lable()
    # clear lost symbol
    if self == buttons["ec"]:
        question = question[:-1]
        anew_lable()
    # unknow result
    if self == buttons["="] and question == "":
        question = "0"
        anew_lable()
    # result
    elif self == buttons["="]:
        question = str(eval(question))
        anew_lable()
    # number
    for i in range(10):
        if self == buttons[f"{i}"]:
            question += str(i)
            anew_lable()
    # operators
    if self == buttons["+"]:
        question += "+"
        anew_lable()
    elif self == buttons["-"]:
        question += "-"
        anew_lable()
    elif self == buttons["/"]:
        question += "/"
        anew_lable()
    elif self == buttons["*"]:
        question += "*"
        anew_lable()
    elif self == buttons["("]:
        question += "("
        anew_lable()
    elif self == buttons[")"]:
        question += ")"
        anew_lable()
    elif self == buttons["."]:
        question += "."
        anew_lable()
root.mainloop()