import json
import os

def serve_json(file):
    this_file = os.path.abspath(__file__)
    this_dir = os.path.dirname(this_file)
    wanted_file = os.path.join(this_dir, file)

    data = []
    json_data = open(wanted_file,'rb')
    data = json.dumps(json.load(json_data))

    json_data.close()
    
    return data