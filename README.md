
# angular-python-mongo
Dockerized Flask based RESTful full stack web Application for CITY INFORMATION, implemented using Python, AngularJS, HTML, JSON, MongoDB(PyMongo) and Docker.
Contains support for API Versioning, Cross-Origin Resource Sharing (CORS).

COMPONENTS: 

Docker : Build once, Run anywhere is the basic principle, hence Docker! 
		 Separate DockerFile(in each folder for  angularjs-client and Python flask-server back end application), 
		 note that in  docker-compose.yml, port is to which angular-client("1111:80"), flask-server("8001:8001" ) listen are different

Front End : AngularJS based code supporting CRUD operations for Cities (inside the folder angular-client/), 
			index.html, CSS alongwith it.Running front end app on nginx server.

			controller.js  --> AngularJs Controller code calling factory service CityOpFactory(residing inside CityService.js) 	                     

			CityService.js --> contains factory service CityOpFactory for creating AngularJs services.
							   also has REST API HTTP URLs, it then talks to flask-server   

BackEnd :  Python Flask based Python(flask-server/ folder) code supporting RESTful APIs for CRUD functionality, connected to 				   MongoDB database remote server, every REST API method has support of CORS enabled methods(Cross-Origin Resource Sharing  		  (CORS)  is a mechanism which uses additional HTTP headers to let a user agent gain permission to access selected 				       resources from  a  server on a different origin (domain) than the site currently in use)
		   used PyMongo library for communicating with MongoDB database.

Database : MongoDB as a database to store basic City Information, used a reomte database, embedded the URI link inside the flask Python code    


# how to run

1. goto folder angularjs-python-mongo under your directory
2. Next task is to run angular-js-client and flask-service using docker
2. type in terminal :  docker-compose build
3. type in terminal:  docker-compose up 
4. Now both Client(nginx for UI) and backend servers (Flask sever )
5. Open browser type "http://localhost:1111/" to run nginx server for client application (user interface for CITIES App built with angular-js)
6. To check JSON data using flask-server (backend application in python) type "http://0.0.0.0:8001/todo/api/v1.0/cities" (one can test the back-end app using POSTMAN tool to check health of RESTful API )
