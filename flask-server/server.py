from flask import Flask, jsonify
import cohere
import json
import requests



app = Flask(__name__)

@app.route("/")
def chatbot(): 
    responses = []
    levels = []
    val = [1, 2, 3, 4, 5]

    with open("../src/questions.json", "r") as file:
        data = json.load(file) 

    for i in data['mcq']:
        index = 0
        while (index < 5): 
            if (val[index] == int(i.get('val'))):
                val[index] = i.get('level')
            index += 1

    for x in val: 
        levels.append(x)

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

    co = cohere.ClientV2("YOUR_API_KEY_HERE")
    response1 = co.chat(
        model="command-r-plus", 
        messages=[{"role": "user", "content": "The following user has asked for feedback on how they can make their community more sustainable.\
                    Here is some information about the community." + val[0] + val[1] + val[2] + val[3] +
                    "Some additional information: " + val[4] + "Based on the application that is being used, these are the levels which go up to 5 that we gave the community \
                    For multiple criteria: " + levels[0] + levels[1] + levels[2] + levels[3] + "Please rate this community out of 5, dont make ratings too high, \
                    be honest and difficult if its poor deduct points, you can give 1/5 and 2/5, ONLY GIVE THE RATING, in the format integer/5."}]
    )

    response2 = co.chat(
        model="command-r-plus", 
        messages=[{"role": "user", "content": "The following user has asked for feedback on how they can make their community more sustainable.\
                    Here is some information about the community." + val[0] + val[1] + val[2] + val[3] +
                    "Some additional information: " + val[4] + "Please provide detailed feedback and try to use more of the additional information\
                    to make sure it is personalized, MAKE SURE TO WRITE in the second person, maximum 60 words."}]
    )
    
    return jsonify([response1.message.content[0].text, response2.message.content[0].text])

if __name__ == "__main__":
    app.run(debug=True)
