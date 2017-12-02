
# angular-python-mongo
Dockerized Flask based RESTful full stack web Application for CITY INFORMATION, implemented using Python, AngularJS, HTML, JSON, MongoDB(PyMongo) and Docker.
Contains support for API Versioning, Cross Origin Request (CORS).

COMPONENTS: 

Docker : Build once, Run anywhere is the basic principle, hence Docker! Separate DockerFile(in each folder for  angularjs-client and Python flask-server back end application), note that in each DockerFile, port is to which angular-client, flask-server listen are different

Front End : AngularJS based code supporting CRUD operations for Cities (inside the folder angular-client), HTML, CSS alongwith             it.

BackEnd :   Python Flask based Python(flask-server folder) code supporting RESTful API's for CRUD functionality, connected to             MongoDB database remote server, used PyMongo library for further support

Database : MongoDB as a database to store basic City Information, used a reomte database, embedded the URI link inside the                flask Python code    

