import { Divider, tableBodyClasses, Typography } from '@mui/material';
import Box from '@mui/material/Box'
import Paper from "@mui/material/Paper";
import { ReactSession } from 'react-client-session';
import AddIcon from '@mui/icons-material/Add';

export default function OutfitSelection() {

    return (
        <Box sx={slotsContainer}>
            <Box sx={diyCircle}>DIY</Box>
            <ItemSlot name="Top" />
            <ItemSlot name="Bottom/Dress"/>
            <ItemSlot name="Shoes"/>
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


//fetch selection from Cookies
function topSelection() {
    let link = "https://www.svgrepo.com/show/108090/clothes-hanger.svg";

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