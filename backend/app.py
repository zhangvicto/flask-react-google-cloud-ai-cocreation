#https://mickeyabhi1999.medium.com/build-and-deploy-a-web-app-with-react-flask-nginx-postgresql-docker-and-google-kubernetes-e586de159a4d

from flask import Flask, request, jsonify
from backend.storage import insert_calculation, get_calculations

app = Flask(__name__)

@app.route('/')
def index():
    return "AI Co-Creation", 200

@app.route('/data', methods=['GET'])
def data():
    '''
        Function used to get calculations history
        from Postgres database and return to fetch call in frontend.
    :return: Json format of either collected calculations or error message
    '''

    calculations_history = []

    try:
        calculations = get_calculations()
        for key, value in calculations.items():
            calculations_history.append(value)
    
        return jsonify({'calculations': calculations_history}), 200
    except:
        return jsonify({'error': 'error fetching calculations history'}), 500