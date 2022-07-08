import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box'
import Paper from "@mui/material/Paper";
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { ReactSession } from 'react-client-session';
import clothesIcon from '../images/clothes.png'

export default function OutfitSelection() {

    const slotStyle = {
        outlineStyle:'solid',
        outlineColor:'lightgray',
        height:'64px', 
        boxShadow:"none"
    }

    const iconStyle = {
        width:'auto', 
        height:50, 
        marginTop:15, 
        opacity:'0.2'
    }

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            '& > :not(style)': {
                m: 1,
                width: 100,
                height: 100,
            },
        }}>
            <Paper sx={slotStyle}>
                <Box sx={{fontSize:'14px'}}>Top</Box>
                <Divider />
                <img style={iconStyle} src={clothesIcon}></img>
            </Paper>
            <Paper sx={slotStyle}>
                <Box sx={{fontSize:'14px'}}>Bottom/Dress</Box>
                <Divider />
                <img style={iconStyle} src={clothesIcon}></img>
            </Paper>
            <Paper sx={slotStyle}>
                <Box sx={{fontSize:'14px'}}>Shoes</Box>
                <Divider />
                <img style={iconStyle} src={clothesIcon}></img>
            </Paper>
        </Box>
    )
}


//fetch selection from Cookies
function topSelection() {
    let link = "https://www.svgrepo.com/show/108090/clothes-hanger.svg";
    
}