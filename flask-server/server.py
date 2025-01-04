from flask import Flask 
import cohere
import json
import os

responses = []
val = [1, 2, 3, 4, 5]
print("Current working directory:", os.getcwd())



with open("./src/questions.json", "r") as file:
    data = json.load(file) 

for i in data['mcq']:
    index = 0
    while (index < 5): 
        if (val[index] == int(i.get('val'))):
            val[index] = i.get('level')
        index += 1

print(val)
print(data['mcq'])


# app = Flask(__name__)

# @app.route("/cohere")
#def chatbot(): 
 #   return 