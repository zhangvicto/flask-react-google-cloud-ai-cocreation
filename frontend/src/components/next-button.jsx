//saves session and go to next page

import * as React from 'react';
import IconButton from '@mui/material/IconButton'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function SubmitButton() {
    return (
        <IconButton sx={{position:'absolute', right:'0', top:'50%', transform:'translateY(-50%)'}}>
            <ArrowForwardIcon/>
        </IconButton>
    )
}