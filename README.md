
# angular-python-mongo

Dockerized Flask based RESTful full stack web Application for CITY INFORMATION, implemented using Python, AngularJS, HTML, JSON, MongoDB(PyMongo) and Docker.
Contains support for API Versioning, Cross-Origin Resource Sharing (CORS).

# COMPONENTS: 

# Docker : Build once, Run anywhere is the basic principle, hence Docker! 
		
		 NOTE :  In the file docker-compose.yml, port is to which angular-client("1111:80") on nginx server, 
		 		 flask-server("8001:8001" ) on Flask server listen are different
		 		
		 	Separate DockerFile in each directory for :

		 	1. AngularJS Client its app/angular-client/static/Dockerfile  
		 	2. Python flask-server backend its app/flask-server/Dockerfile

 
# Front End : AngularJS based (CityApp) code supporting CRUD operations for Cities (inside the directory angular-client/), 
			
			1. HTML file located in app/angular-client/static/index.html, has CSS code embedded in it .
			   Running front end app on nginx server.

			2. app/angular-client/static/js/controllersCityAppController.js  :
               AngularJs Controller code calling factory service CityFactoryAPI (residing inside CityService.js) 	                     

			3. app/angular-client/static/js/CityService.js : 
			   contains factory service CityFactoryAPI for creating AngularJs services. It also has REST API HTTP URLs, it then talks to flask-server   


			UI TESTING :

			Karma Test runner file in the directory app/angular-client/static/tests/karma.conf.js 

			UI TEST CASES : 

			inside  app/angular-client/static/tests/units : 

			Two Test cases written namely :

				 1. testingCityAppControllerUnitSpec.js for the Controller CityAppController.js 
				 2. testingCityServiceUnitSpec.js  for the Service CityService.js 

				 How to Run :

				 goto directory app/angular-client/static/tests

				 1. type "karma start karma.conf.js"  to run the karma test runner  


				 Sample Code Coverage report after running karma test runner :

				 .
					PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 1 of 1 SUCCESS (0.111 secs / 0.032 secs)


					-----------------------|----------|----------|----------|----------|----------------|
					File                   |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
					-----------------------|----------|----------|----------|----------|----------------|
					 controllers/          |    33.33 |        0 |    17.65 |    33.33 |                |
					  CityAppController.js |    33.33 |        0 |    17.65 |    33.33 |... 103,104,107 |
					 services/             |       80 |      100 |       50 |       80 |                |
					  CityService.js       |       80 |      100 |       50 |       80 |       28,34,40 |
					-----------------------|----------|----------|----------|----------|----------------|
					All files              |     46.3 |        0 |    26.09 |     46.3 |                |
					-----------------------|----------|----------|----------|----------|----------------|




# Flask:    For running flask application one needs requirements.txt file, it is residing in the directory app/flask-server 	


# BackEnd :  Python Flask based Python file residing in directory :  app/flask-server/backend-app/app.py 

			 1. Has support for RESTful APIs for CRUD functionality, connected to a remote MongoDB Olap database server, 
			 2. every REST API method has support of CORS enabled methods(Cross-Origin Resource Sharing (CORS)  is a mechanism 
			 	which uses additional HTTP headers to let a user agent gain permission to access selected resources from  a  server 
			 	on a different origin (domain) than the site currently in use)
			 3. used PyMongo library for communicating with  the MongoDB database.

Database : 
           MongoDB as a database to store basic City Information, used a reomte database, 
		   embedded the URI link inside the flask Python code    


# how to run

1. goto directory angularjs-python-mongo under your directory
2. Next task is to run angular-js-client and flask-service using docker
2. type in terminal :  docker-compose build
3. type in terminal:  docker-compose up 
4. Now both Client(nginx for UI) and backend servers (Flask sever )
5. Open browser type "http://localhost:1111/" to run nginx server for client application (user interface for CITIES App built with angular-js)
6. To check JSON data using flask-server (backend application in python) type "http://0.0.0.0:8001/todo/api/v1.0/cities" (one can test the back-end app using POSTMAN tool to check health of RESTful API )
