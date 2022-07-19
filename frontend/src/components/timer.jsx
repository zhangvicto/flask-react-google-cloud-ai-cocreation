import React from 'react';
import Countdown from 'react-countdown';
import Box from "@mui/material/Box";
import AlarmIcon from '@mui/icons-material/Alarm';
import Button from '@mui/material/Button';

const boxStyle = {
    p:1,
    position: 'fixed',
    right:80, 
    top:80, 
}

const innerBox = {
    display:'flex',
    alignItems: 'center',
}


export default function Timer() {
    return (
        <Button sx={boxStyle}>
            <Countdown
                date={Date.now() + 1800000}
                precision={3}
                renderer={props => <Box sx={innerBox}><AlarmIcon sx={{mr: 1}} /> {props.minutes}:{props.seconds}</Box>} />
        </Button>

    )
}

//add onStop function (from react-countdown) to display modal for them to return to URL 

//start timer here to record time and upload to the first table
function timerBegin() {

}