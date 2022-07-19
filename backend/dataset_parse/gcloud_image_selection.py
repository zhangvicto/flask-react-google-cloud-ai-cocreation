import json 
import ijson
import os

# def outputLink(outfits): 

#     fname = 'dataset_parse/dataset_json/train_no_dup.json'
#     this_file = os.path.abspath(__file__)
#     this_dir = os.path.dirname(this_file)
#     wanted_file = os.path.join(this_dir, fname)

#     imageLinks = {}

#     counter = 0

#     with open(wanted_file, 'rb') as f:
#         for obj in ijson.items(f, 'item'): 
#             i = 0
#             for item in obj: 
#                 outfits['outfit'+(i+1)]['top']['set_id']
#                 if obj['set_ID'] == item: 
#                     imageLinks[i] = "https://storage.googleapis.com/ai-co-creation-images/" + obj.set_ID + 
                
#             counter = counter + 1 


#     # print('There are ' + str(counter) + ' items')

#     return("https://storage.googleapis.com/ai-co-creation-images/" + set_ID + "/0.jpg")

# #input setid here aka our bucket link
# outputLink()

#generate a set ID's for our user, this is in 
#start with default sets and if user condition is different then change to other by AI or something else
def generate_link(fname):
    this_file = os.path.abspath(__file__)
    this_dir = os.path.dirname(this_file)
    wanted_file = os.path.join(this_dir, fname)

    setID = {}

    with open(wanted_file,'rb') as file: 
        counter = 1
        top = ijson.items(file, 'item')

        link_base = "https://storage.googleapis.com/ai-co-creation-images/"

        for item in top:
            key_name = "outfit" + str(counter)

            setID[key_name] = {
                'top': {
                    'set_id': item['top']['set_id'], 
                    'index': item['top']['index'],
                    'link': link_base + str(item['top']['set_id']) + "/" + str(item['top']['index']) + ".jpg"
                },
                'bottom': {
                    'set_id': item['bottom']['set_id'], 
                    'index': item['bottom']['index'],
                    'link': link_base + str(item['bottom']['set_id']) + "/" + str(item['bottom']['index']) + ".jpg"
                }, 
                'shoes': {
                    'set_id': item['shoes']['set_id'], 
                    'index': item['shoes']['index'],
                    'link': link_base + str(item['shoes']['set_id']) + "/" + str(item['shoes']['index']) + ".jpg"
                }
            }

            counter = counter + 1

    json_data = json.dumps(setID)

    return json_data


#generate_link()