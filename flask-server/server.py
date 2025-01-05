from flask import Flask, request, jsonify 
import cohere
import json


app = Flask(__name__)

@app.route("/")
def chatbot(): 
    responses = []
    val = [1, 2, 3, 4, 5]

    with open("../src/questions.json", "r") as file:
        data = json.load(file) 

    for i in data['mcq']:
        index = 0
        while (index < 5): 
            if (val[index] == int(i.get('val'))):
                val[index] = i.get('level')
            index += 1

    for x in range(4): 
        if val[x] == 'level1':
            val[x] = data['questions'][x].get('level1')
        elif val[x] == 'level2':
            val[x] = data['questions'][x].get('level2')
        elif val[x] == 'level3':
            val[x] = data['questions'][x].get('level3')
        elif val[x] == 'level4':
            val[x] = data['questions'][x].get('level4')
        elif val[x] == 'level5':
            val[x] = data['questions'][x].get('level5')
    
    data["mcq"] = []
    with open("../src/questions.json", 'w') as file:
        json.dump(data, file, indent=4)
        


    co = cohere.ClientV2("")
    response = co.chat(
        model="command-r-plus", 
        messages=[{"role": "user", "content": "The following user has asked for feedback on how they can make their community more sustainable.\
                    Here is some information about the community." + val[0] + val[1] + val[2] + val[3] +
                    "Some additional information: " + val[4] + "Please provide detailed feedback and try to use more of the additional information\
                    to make sure it is personalized, maximum 60 words."}]
    )
    return response.message.content[0].text

if __name__ == "__main__":
    app.run(debug=True)