
# angular-python-mongo
Dockerized Flask based RESTful full stack web Application for CITY INFORMATION, implemented using Python, AngularJS, HTML, JSON, MongoDB(PyMongo) and Docker.
Contains support for API Versioning, Cross Origin Request (CORS).

COMPONENTS: 

Docker : Build once, Run anywhere is the basic principle, hence Docker! 
		 Separate DockerFile(in each folder for  angularjs-client and Python flask-server back end application), 
		 note that in  docker-compose.yml, port is to which angular-client("1111:80"), flask-server("8001:8001" ) listen are different

Front End : AngularJS based code supporting CRUD operations for Cities (inside the folder angular-client/), 
			index.html, CSS alongwith it.Running front end app on nginx server.

BackEnd :  Python Flask based Python(flask-server/ folder) code supporting RESTful APIs for CRUD functionality, connected to MongoDB database remote server, 
		   used PyMongo library for further support

Database : MongoDB as a database to store basic City Information, used a reomte database, embedded the URI link inside the flask Python code    


# how to run

1. goto folder angularjs-python-mongo under your directory
2. Next task is to run angular-js-client and flask-service using docker
2. type in terminal :  docker-compose build
3. type in terminal:  docker-compose up 
4. Now both Client(nginx for UI) and backend servers (Flask sever )
5. Open browser type "http://localhost:1111/" to run nginx server for client application (user interface for CITIES App built with angular-js)
6. To check JSON data using flask-server (backend application in python) type "http://0.0.0.0:8001/todo/api/v1.0/cities" (one can test the back-end app using POSTMAN tool to check health of RESTful API )