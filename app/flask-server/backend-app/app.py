"""
AUTHOR : PRATIK DHAGE
RESTful API using flask, PyMongo, MongoDB for the collection cities
"""
from flask import Flask, request, jsonify, render_template
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_path='/static')

cors = CORS(app, resources={r"/foo": {"origins": "http://localhost:port"}})

app.config['MONGO_DBNAME'] = 'angularjs-python-mongo'
app.config['MONGO_URI'] = 'mongodb://pratikdhage009:thedarkknightrises009@ds147942.mlab.com:47942/angularjs-python-mongo'

mongo = PyMongo(app)

@app.route('/todo/api/v1.0/')
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def index():
    return render_template("cities.html")


# HTTP GET request for displaying all cities
@app.route('/todo/api/v1.0/cities/', methods=['GET'])
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def get_all_city_records():
    cities = mongo.db.cities
    output = []
    for q in cities.find():
        output.append({'cname': q['cname'], 'state': q['state']})
    return jsonify({'output': output})


# HTTP POST request for adding new city
@app.route('/todo/api/v1.0/cities/', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def add_city_state():
    cities = mongo.db.cities
    cityname = request.json['cname']
    state = request.json['state']
    city_id = cities.insert({'cname': cityname, 'state': state})
    new_city = cities.find_one({'_id': city_id})
    output = {'cname': new_city['cname'], 'state': new_city['state']}
    return jsonify({'output': output})


# HTTP GET request for getting a particular city
@app.route('/todo/api/v1.0/cities/<string:cname>', methods=['GET'])
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def get_city_record(cname):
    cities = mongo.db.cities
    q = cities.find_one({'cname': cname})
    if q:
        output = {'cname': q['cname'], 'state': q['state']}
    else:
        output = 'Sorry !....record not exists.'
    return jsonify({'output': output})


# HTTP PUT request for modifying existing city
@app.route('/todo/api/v1.0/cities/<string:cname>', methods=['PUT'])
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def update_state(cname):
    cities = mongo.db.cities
    data = request.get_json()
    mongo.db.cities.update({'cname': cname}, {'$set': data})
    return jsonify({'output': "success"})


# HTTP DELETE request for deleting/removing a particular city
@app.route('/todo/api/v1.0/cities/<string:cname>', methods=['DELETE'])
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def delete_city_record(cname):
    cities = mongo.db.cities
    q = cities.find_one({'cname': cname})
    if q:
        output = q['cname']
        mongo.db.cities.delete_one({'cname': cname})
    else:
        output = 'Sorry !....no results found.'
    return jsonify({'output': output})


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8001, debug=True)
