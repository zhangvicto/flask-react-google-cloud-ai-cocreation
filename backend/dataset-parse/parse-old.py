# first look for set_id of the outfit (JSON object)
# then cd into folder with corresponding name (set id)
# go through all items
# rename items with the right category id - with a counter that increases whenever a new item is found
# copy items with the right category id into each corresponding folder

import json
import os
import shutil
from pathlib import Path

def copyImageFiles(category_id, setNumber): 

    Path('D:/ai-cocreation-data/{category_id}'.format(category_id=category_id)).mkdir(exist_ok=True) 

    with open("./dataset-json/train_no_dup.json") as f:
        # load json file
        data = json.load(f)

        # print("set_id:", data[0]['set_id'])

        #file name counter
        counter = 0

        for root, subdirs, files in os.walk('D:/ai-cocreation-data/images'):
            # loop through all directory
            for d in subdirs:
                # if folder name = set id
                if d == data[setNumber]['set_id']: 
                    # scan folder
                    for root, subdirs, files in os.walk('D:/ai-cocreation-data/images/{fileDir}'.format(fileDir=d)): 
                        # start from one since the 0.jpg is the combined image of the outfit, they are ignored
                        i = 1
                        # go through all images 
                        for name in files:
                            try: 
                                # print(data[setNumber]['items'][i]['categoryid'])
                                # if category id corresponds to the category we are going after
                                if data[setNumber]['items'][i]['categoryid'] == category_id: 
                                    #copy file to new folder and name it
                                    shutil.copyfile('{root}/{i}.jpg'.format(root=root, d=d,i=i), 'D:/ai-cocreation-data/{category_id}/{counter}.jpg'.format(category_id=category_id,counter=counter))
                                    counter+=1
                                i+=1
                            
                            except: 
                                break

# EXECUTE
def sortImages(): 
    with open("./dataset-json/train_no_dup.json") as f:
            # load json file
            data = json.load(f)

            # create array to store all category ids
            categories = []
            for line in open('category_select_new.txt', 'r').readlines(): 
                categories.extend([int(n) for n in line.split()])
            
            # debug
            # print(categories)
            
            # start from the first set of outfit
            setNumber = 0
            for items in data: 
                for category in categories:
                    copyImageFiles(category,setNumber)
                setNumber+=1

#sortImages()

# Removing category names from category select
# with open('category_select.txt') as file: 
#     lines = file.readlines()
#     newFile = open('category_select_new.txt', 'w')
#     for line in lines: 
#         newLine = line.split(" ", 1)
#         newFile.write(newLine[0])
#         newFile.write("\n")
