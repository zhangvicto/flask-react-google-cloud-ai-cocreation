import { Typography } from '@mui/material';
import Box from '@mui/material/Box'
import Paper from "@mui/material/Paper";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import Button from '@mui/material/Button'
import { ReactSession } from 'react-client-session';

export function OutfitSelection(props) {

    function handleOpen(itemType) {
        if (itemType == "tops") {
            props.setTopsOpen(true);
            props.setBottomsOpen(false);
            props.setShoesOpen(false);
        } else if (itemType == "bottoms") {
            props.setBottomsOpen(true);
            props.setTopsOpen(false);
            props.setShoesOpen(false);
        } else if (itemType == "shoes") {
            props.setShoesOpen(true);
            props.setTopsOpen(false);
            props.setBottomsOpen(false);
        }
    }

    function selectOutfit() {
        props.setToMonogram(true);
    }

    return (
        <Box sx={slotsContainer}>
            <Box sx={diyCircle}>DIY</Box>
            {/* SLOTS */}
            <a onClick={() => handleOpen("tops")}> <ItemSlot name="Top" itemType="top" item={props.outfit} /></a>
            <a onClick={() => handleOpen("bottoms")}><ItemSlot name="Bottom/Dress" itemType="bottom" item={props.outfit} /></a>
            <a onClick={() => handleOpen("shoes")}><ItemSlot name="Shoes" itemType="shoes" item={props.outfit} /></a>
            {/* CHOOSE THIS LOOK */}
            <Box sx={chooseButton} onClick={() => selectOutfit()}>
                <LocalOfferIcon sx={{ mr: 0.5 }} />
                <Typography variant="caption" sx={{ fontSize: '12px' }}>Choose this look</Typography>
            </Box>
        </Box>
    )
}

function ItemSlot(props) {

    const [data, setData] = React.useState();

    React.useEffect(() => {

        fetch('http://localhost:8080/api/inventory', {
            method: 'GET',
            mode: 'cors'
        }
        ).then(response => {
            if (response.status === 200) {
                (response.json()).then((jsonData) => {
                    setData(jsonData);
                })
            } else {
                (response.json()).then((jsonData) => {
                    return null;
                })
            }
        }).catch((error) => {
            console.log("Error", error);
        })
    }, []);

    //generate link from selection
    function itemLink(item) {

        let link = "";

        switch (props.name) {
            case "Top":
                link = item.top ? processData("tops", item.top.item_id).link : null
                return link;
            case "Bottom/Dress":
                link = item.bottom ? processData("bottoms", item.bottom.item_id).link : null
                return link;
            case "Shoes":
                link = item.shoes ? processData("shoes", item.shoes.item_id).link : null
                return link;
        }
    }

    return (
        <Box>
            <Typography sx={textStyle}>{props.name}</Typography>
            <Paper sx={slotStyle}>
                {(props.item && props.item[props.itemType]) ? data && <img src={itemLink(props.item)} style={slotImage} /> : <AddIcon style={iconStyle}></AddIcon>}
            </Paper>
        </Box>
    )
}

//Inventory Item
function Item(props) {

    const [data, setData] = React.useState();

    React.useEffect(() => {

        fetch('http://localhost:8080/api/inventory', {
            method: 'GET',
            mode: 'cors'
        }
        ).then(response => {
            if (response.status === 200) {
                (response.json()).then((jsonData) => {
                    setData(jsonData);
                })
            } else {
                (response.json()).then((jsonData) => {
                    return null;
                })
            }
        }).catch((error) => {
            console.log("Error", error);
        })
    }, []);

    //select item
    function selectItem(itemType, itemID) {
        //identifier for item outfitNumber + itemType
        // console.log(outfitNumber + itemType)

        //console.log(props.outfit);
        //set outfit item for each type
        switch (itemType) {
            case 'top':
                props.setOutfit({
                    ...props.outfit,
                    "top": {
                        "item_id": itemID
                    }
                });
                ReactSession.set("top", itemID);
                break;
            case 'bottom':
                props.setOutfit({
                    ...props.outfit,
                    "bottom": {
                        "item_id": itemID
                    }
                });
                ReactSession.set("bottom", itemID);
                break;
            case 'shoes':
                props.setOutfit({
                    ...props.outfit,
                    "shoes": {
                        "item_id": itemID
                    }
                });
                ReactSession.set("shoes", itemID);
                break;
        }
        //log to database 
        //let itemObject = processData(data, outfitNumber, itemType)
        //uploadSelection(itemObject.setID, itemObject.index);
    }

    function uploadSelection(setID, index) {
        
    }

    return (
        <div>
            <a onClick={() => selectItem(props.itemID, props.itemType)}>
                <img src={data && processData(data[props.itemNumber].item_type, data[props.itemNumber].item_id).link} style={{ height: 50 }} />
            </a>
        </div>
    )
}

export function Inventory(props) {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => {
    //     setOpen(true);
    // };

    const [data, setData] = React.useState();

    React.useEffect(() => {

        fetch('http://localhost:8080/api/inventory', {
            method: 'GET',
            mode: 'cors'
        }
        ).then(response => {
            if (response.status === 200) {
                (response.json()).then((jsonData) => {
                    setData(jsonData);
                })
            } else {
                (response.json()).then((jsonData) => {
                    return null;
                })
            }
        }).catch((error) => {
            console.log("Error", error);
        })
    }, []);

    //Renders the list of inventory items

    // for (let i = 1; i < data.length; i++) {
    //     tops.push(<Item itemType="tops" itemNumber ={counter} key={i} setOutfit={props.setOutfit} outfit={props.outfit} />);
    //     bottoms.push(<Item itemType="bottoms" itemNumber ={counter+1} key={i} setOutfit={props.setOutfit} outfit={props.outfit} />);
    //     shoes.push(<Item itemType="shoes" itemNumber ={counter+2} key={i} setOutfit={props.setOutfit} outfit={props.outfit} />);
    //     counter += 3;
    // }

    function generateIDs(type) {
        let IDArray = []
        for (let i = 1; i <= Object.keys(data).length; i++) {
            if (data[i].item_type === type) {
                IDArray.push(data[i].item_id);
            }
        }
        return IDArray;
    }

    function renderItems(IDArray, type) {
        let itemArray = [];
        let counter = 1
        for (let i = 1; i <= IDArray.length; i++) {
            itemArray.push(<Item itemType={type} itemNumber ={counter} key={i} setOutfit={props.setOutfit} outfit={props.outfit} />)
            counter += 3;
        }
        return itemArray;
    }

    function TopsInventory(props) {
        const handleClose = () => {
            props.setTopsOpen(false)
        };
        return (
            <Box>
                <Button onClick={() => handleClose()}>x</Button>
                <Typography> Tops </Typography>
                {data && renderItems(generateIDs("tops"), "tops")}
            </Box>
        )
    }

    function BottomsInventory(props) {
        const handleClose = () => {
            props.setBottomsOpen(false);
        };
        return (
            <Box>
                <Button onClick={() => handleClose()}>x</Button>
                <Typography> Bottoms </Typography>
                {data && renderItems(generateIDs("bottoms"), "bottoms")}
            </Box>
        )
    }

    function ShoesInventory(props) {
        const handleClose = () => {
            props.setShoesOpen(false);
        };
        return (
            <Box>
                <Button onClick={() => handleClose()}>x</Button>
                <Typography> Shoes </Typography>
                {data && renderItems(generateIDs("shoes"), "shoes")}
            </Box>
        )
    }

    return (
        <Box>
            {props.tops && <TopsInventory sx={inventoryStyle} setTopsOpen={props.setTopsOpen} />}
            {props.bottoms && <BottomsInventory sx={inventoryStyle} setBottomsOpen={props.setBottomsOpen} />}
            {props.shoes && <ShoesInventory sx={inventoryStyle} setShoesOpen={props.setShoesOpen} />}
        </Box>
    )
}

function processData(type, itemID) {
    let linkBase = "https://storage.googleapis.com/ai-co-creation-images/" + type + "/";
    let link = linkBase + itemID + ".jpg";
    
    let output = {link: link, item_id: itemID }
    return output;
}


// -------------- STYLES -------------- //

const inventoryStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const slotStyle = {
    outlineStyle: 'solid',
    outlineColor: 'lightgray',
    borderRadius: 5,
    height: '64px',
    boxShadow: 'none',
    width: 80,
    height: 80,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 0.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const slotImage = {
    width: 'auto',
    height: 40,
}

const iconStyle = {
    width: 'auto',
    height: 40,
    opacity: '0.3'
}

const slotsContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
}

const textStyle = {
    opacity: 0.4,
}

const diyCircle = {
    borderRadius: 50,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 5,
    height: 60,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: "12px",
    color: 'rgba(0,0,0,0.4)',
    marginTop: 3,
    marginRight: 4
}

const chooseButton = {
    display: 'flex',
    verticalAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.05)'
    },
    transition: 'all 200ms ease'
}