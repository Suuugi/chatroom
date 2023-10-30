## v2.0 Instructions for Flask chatroom deploy to Docker ##
1. git clone https://github.com/Suuugi/chatroom.git
2. cd chatroom
3. docker build -t chatroomapp .
4. docker compose up -d
5. Open up web browser:   http://127.0.0.1:5000

## v1.0 Instructions for Proof of Concept on local machine ##
1. git clone https://github.com/Suuugi/chatroom.git
2. cd chatroom
3. py -m venv .venv
4. ./.venv/Scripts/Activate.ps1
5. pip install -r requirements.txt
6. flask --app main run