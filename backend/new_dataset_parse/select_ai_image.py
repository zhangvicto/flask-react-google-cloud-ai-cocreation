import json
import os
import shutil
from pathlib import Path
from unicodedata import category
from sort_image import copyImageFiles

def AIImageSort(): 
    aiSet = {}
    inventory = {}

    counter = 1
    itemCounter = 1
    categoryCounter = 1

    for root, dirs, files in os.walk("./filtered_outfits_combined", topdown=False): 
        for name in files: 
            
            #separate item name
            outfitData = name.split("_")
            #print(outfitData)

            #create new array with item ids
            outfitItems = [outfitData[1], outfitData[2], outfitData[3].removesuffix('.jpg')]

            #store into dict
            aiSet[counter] = {
                "fit_distance": outfitData[0],
                "tops": outfitItems[0], 
                "bottoms": outfitItems[1],
                "shoes": outfitItems[2],
            }

            for i in outfitItems: 
                #category Type
                itemType = ""
                if categoryCounter == 1: 
                    itemType = "tops"
                elif categoryCounter == 2: 
                    itemType = "bottoms" 
                elif categoryCounter == 3: 
                    itemType = "shoes"
                print("Inventory" + str(itemCounter))
                print("Total" + str(categoryCounter))

                if any(x for x in inventory if inventory[x]['item_id'] == i) == False: #check if it exists in our inventory already
                    #print(any(x for x in inventory if inventory[x]['item_id'] == i))
                    #add new item
                    inventory[itemCounter] = {
                        "item_id": i,
                        "item_type": itemType
                    }

                    #increment number of inventory items
                    itemCounter = itemCounter + 1

                    #categoryCounter = categoryCounter + 1

                    #copy item image
                    #copyImageFiles(i)

                categoryCounter = categoryCounter + 1
                if categoryCounter == 4: 
                    categoryCounter = 1

            #increment number of outfits
            counter = counter + 1

    #sort ai generated set 
    #sortedAISet = sorted(aiSet.items(), key=lambda x:x[0], reverse=True)

    with open('ai_generated_set.json','w') as f: 
        json.dump(aiSet, f, indent=4)

    with open('inventory-new.json', 'w') as file: 
        json.dump(inventory, file, indent=4)

AIImageSort()