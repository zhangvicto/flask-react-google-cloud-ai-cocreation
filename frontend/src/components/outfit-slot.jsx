import { Typography } from '@mui/material';
import Box from '@mui/material/Box'
import Paper from "@mui/material/Paper";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import Button from '@mui/material/Button'
import { ReactSession } from 'react-client-session';

export function OutfitSelection() {

    //Opens Tops Inventory
    const [topsOpen, setTopsOpen] = React.useState(false);

    //Opens Bottoms Inventory
    const [bottomsOpen, setBottomsOpen] = React.useState(false);

    //Opens Shoes Inventory
    const [shoesOpen, setShoesOpen] = React.useState(false);

    const handleOpen = (itemType) => {
        if (itemType == "tops") {
            setTopsOpen(true);
        }
        if (itemType == "bottoms") {
            setTopsOpen(true);
        }
        if (itemType == "shoes") {
            setTopsOpen(true);
        }
    }

    return (
        <Box sx={slotsContainer}>
            <Box sx={diyCircle}>DIY</Box>
            <a onClick={()=>handleOpen("tops")}> <ItemSlot  name="Top" /></a>
            <a onClick={()=>handleOpen("bottoms")}><ItemSlot name="Bottom/Dress" /></a>
            <a onClick={()=>handleOpen("shoes")}><ItemSlot name="Shoes" /></a>
            <Box sx={chooseButton}>
                <LocalOfferIcon sx={{ mr: 0.5 }} />
                <Typography variant="caption" sx={{fontSize:'12px'}}>Choose this look</Typography>
            </Box>
        </Box>
    )
}

function ItemSlot(props) {
    return (
        <Box>
            <Typography sx={textStyle}>{props.name}</Typography>
            <Paper sx={slotStyle}>
                <AddIcon style={iconStyle}></AddIcon>
            </Paper>
        </Box>
    )
}

//Inventory Item
function Item(props) {

    const [data, setData] = React.useState();

    //const [outfit, useOutfit] = React.useState(props.outfitNumber);

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

    //selectitem function
    function selectItem(itemNumber) {

    }

    return (
        <div>
            <Box>
                <img src={data && processData(data, props.outfitNumber, props.itemType)} style={{ height: 35 }} />
            </Box>
        </div>
    )
}

export function Inventory(props) {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => {
    //     setOpen(true);
    // };

    //Renders the list of inventory items
    let tops = [];
    let bottoms = [];
    let shoes = [];
    for (let i = 1; i < 10; i++) {
        tops.push(<Item outfitNumber={i} itemType="top" key={i} />);
        bottoms.push(<Item outfitNumber={i} itemType="bottom" key={i} />);
        shoes.push(<Item outfitNumber={i} itemType="shoes" key={i} />);
    }

    function TopsInventory(props) {
        const [open, setOpen] = React.useState(false);
        const handleClose = () => {
            setOpen(false)
        };
        return(
            <Box>
                <Button onClick={() => handleClose}>x</Button>
                <Typography> Tops </Typography>
                {tops}
            </Box>
        )
    }

    function BottomsInventory(props) {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false)
        };
        return(
            <Box>
                <Button onClick={() => handleClose}>x</Button>
                <Typography> Bottoms </Typography>
                {bottoms}
            </Box>
        )
    }

    function ShoesInventory(props) {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false)
        };
        return(
            <Box>
                <Button onClick={() => handleClose}>x</Button>
                <Typography> Shoes </Typography>
                {shoes}
            </Box>
        )
    }

    return (
        <Box>
            <TopsInventory sx={inventoryStyle} />
            <BottomsInventory sx={inventoryStyle} />
            <ShoesInventory sx={inventoryStyle} />  
        </Box>
    )
}

function processData(jsonData, outfitID, type) {
    let outfit = "outfit" + outfitID.toString()
    let link = jsonData[outfit][type]['link'];

    return link;
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
        transitionDuration: '200ms',
        transform: 'scale(1.05)'
    },
}