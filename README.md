# Community Creator

Developed an interactive platform that provides users with AI-powered feedback to improve their community's sustainable practices. Users answer multiple choice questions and receive actionable suggestions to help create a more sustainable environment. Recieved YRHacks 2022 Sustainable Communities award for the project. 

**Front-end**: React (Vite), Tailwind CSS  
**Back-end**: Flask (using Cohere API)  
**Data Storage**: JSON 


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)

## Installation
1. Clone the repository
   ```bash
   git clone https://github.com/username/project-name.git
   cd Community-Creator

2. Install Dependencies
Create React project using Vite
   ```bash
   npm create vite@latest
   npm install

3. Install Tailwind CSS
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init

4. Activate and Replace Cohere API Key
   - Visit [https://dashboard.cohere.com/](https://dashboard.cohere.com/) to get key.
   - Change [line 41 in server.py](https://github.com/nuthanan06/Community-Creator/blob/main/flask-server/server.py#41).
 
6. Install Flask and Cohere
    ```bash
    pip install flask cohere

7. Activate Python Virtual Environment
    ```bash
    cd flask-server
    python -m venv venv
    source venv/bin/activate  # macOS/Linux
    venv\Scripts\activate     # Windows  

## Usage
1. On three seperate terminals in the main directory, run the following commands.
   ```bash
   npm run dev
   npm run server
   python3 server.py

2. Launch [http://localhost:3000/](http://localhost:3000/). 


## License
This project is licensed under the MIT License.






