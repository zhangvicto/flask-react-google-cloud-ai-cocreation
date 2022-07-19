# first look for set_id of the outfit (JSON object)
# then cd into folder with corresponding name (set id)
# go through all items
# rename items with the right category id - with a counter that increases whenever a new item is found
# copy items with the right category id into each corresponding folder

import json
import os
import shutil
from pathlib import Path

def copyImageFiles(category_id, setNumber, data, counter): 

    imagesDir = 'D:/ai-cocreation-data/' # parent folder of "images"

    # create folder with category id
    Path(f'D:/ai-cocreation-data/{category_id}').mkdir(exist_ok=True) 

    # debug
    # print("set_id:", data[0]['set_id'])

    for root, subdirs, files in os.walk(f'{imagesDir}/images'):
        # loop through all directory
        for d in subdirs:
            # if folder name = set id
            if d == data[setNumber]['set_id']: 
                # scan folder
                for root, subdirs, files in os.walk(f'{imagesDir}/images/{d}'):  #remember ROOT is redefined here
                    # index for json item
                    dataIndex = 0
                    #image naming
                    counter = 0
                    # go through all images 
                    for name in files[1:]: #skips the first file
                        try: 
                            # print(data[setNumber]['items'][i]['categoryid'])
                            # if category id corresponds to the category we are going after
                            if data[setNumber]['items'][dataIndex]['categoryid'] == category_id: 
                                
                                #next matching image in set
                                counter+=1

                                #copy file to new folder and name it
                                shutil.copyfile(f'{root}/{name}', f'{imagesDir}/{category_id}/{setNumber}_{counter}.jpg')
                            
                            # next JSON item
                            dataIndex += 1
                        
                        except: 
                            break

# Debug
# copyImageFiles(2,0,json.load(open("./dataset-json/train_no_dup.json")))

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

            # counter var
            counter = 1
            
            # start from the first set of outfit
            setNumber = 0
            for category in categories:
                for items in data: 
                    copyImageFiles(category, setNumber, data, counter)
                    setNumber+=1

sortImages()

# Removing category names from category select
# with open('category_select.txt') as file: 
#     lines = file.readlines()
#     newFile = open('category_select_new.txt', 'w')
#     for line in lines: 
#         newLine = line.split(" ", 1)
#         newFile.write(newLine[0])
#         newFile.write("\n")