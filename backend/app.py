from flask import Flask, request, jsonify
from importlib_metadata import method_cache
from backend.storage import insert_calculation, get_calculations
from backend.sql_request_test import test_data
from backend.new_dataset_parse.serve_json import serve_json

app = Flask(__name__)

@app.route('/')
def index():
    return '', 200

@app.route('/health')
def health():
    return '', 200

@app.route('/ready')
def ready():
    return '', 200

@app.route('/model_result', methods=['GET'])
def model_result(): 
    return "model not yet setup", 200

@app.route('/test', methods=['GET'])
def test(): 
    try: 
        testData = test_data()
        return testData, 200
    except: 
        return jsonify({'error':'error'})

@app.route('/gallery', methods=['GET'])
def gallery(): 
    try: 
        return serve_json("ai_generated_set.json")
    except: 
        return jsonify({'error':'error'})

@app.route('/inventory', methods=['GET'])
def inventory(): 
    try: 
        return serve_json('inventory-new.json')
    except: 
        return jsonify({'error':'error'})
        


# @app.route('/data', methods=['GET'])
# def data():
#     '''
#         Function used to get calculations history
#         from Postgres database and return to fetch call in frontend.
#     :return: Json format of either collected calculations or error message
#     '''

#     calculations_history = []

#     try:
#         calculations = get_calculations()
#         for key, value in calculations.items():
#             calculations_history.append(value)
    
#         return jsonify({'calculations': calculations_history}), 200
#     except:
#         return jsonify({'error': 'error fetching calculations history'}), 500

# @app.route('/insert_nums', methods=['POST'])
# def insert_nums():
#     '''
#         Function used to insert a calculation into our postgres
#         DB. Operands of operation received from frontend.
#     :return: Json format of either success or failure response.
#     '''

#     insert_nums = request.get_json()
#     firstNum, secondNum, answer = insert_nums['firstNum'], insert_nums['secondNum'], insert_nums['answer']

#     try:
#         insert_calculation(firstNum, secondNum, answer)
#         return jsonify({'Response': 'Successfully inserted into DB'}), 200
#     except:
#         return jsonify({'Response': 'Unable to insert into DB'}), 500