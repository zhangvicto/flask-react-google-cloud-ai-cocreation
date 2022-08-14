import json
import os
import shutil
from pathlib import Path

def copyImageFiles(imageId): 

    imagesDir = 'D:/ai-cocreation-data/' # parent folder of "images"
    fileName = str(imageId) + '.jpg'

    categoryType = ""
    # determine item category id
    with open("./polyvore_item_metadata.json") as f:
            # load json file
            data = json.load(f)
            outfitCategory = int(data[str(imageId)]['category_id'])
            print(outfitCategory)

            if outfitCategory in (11 , 15 , 17 , 18 , 19 , 21, 23 , 26 , 104 , 236,  250 , 252 , 256 , 257 , 272 , 273 , 275 , 286 , 289 , 309 , 315 , 341 , 342 , 343 , 4454 , 4495 , 4496 , 4517): 
                categoryType = "tops"
                print("this is a top")
            elif outfitCategory in (3, 4, 5, 7 , 8 , 9 , 10 , 27 , 28 , 29 , 31 , 237 , 238 , 239 , 240 , 241 , 249 , 253 , 254 , 255, 278 , 279 , 280 , 282 , 284 , 287 , 288 , 310 , 332 , 4452 , 4458 , 4459 , 4518): 
                categoryType = "bottoms"
                print("this is a bottom")
            elif outfitCategory in (41 , 42 , 43 , 46 , 47 , 48 , 49 , 50 , 261 , 262 , 263 , 264 , 265 , 266 , 267 , 268): 
                categoryType = "shoes"
                print("this is shoes")
            else: 
                categoryType = "null"

    if categoryType != "null": 
        # create folder for specific category
        Path(f'D:/ai-cocreation-data/{categoryType}').mkdir(exist_ok=True) 
        
        newFilePath = Path(f'D:/ai-cocreation-data/{categoryType}/{fileName}')
        print(os.path.exists(newFilePath))

        if os.path.exists(newFilePath) == False: 
            print(os.path.exists(newFilePath))
            shutil.copyfile(f'{imagesDir}/images/{fileName}', f'{imagesDir}/{categoryType}/{fileName}')