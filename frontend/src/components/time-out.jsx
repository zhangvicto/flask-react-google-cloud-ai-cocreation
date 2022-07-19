import React from 'react'
import Box from '@mui/material/Box'

export default function TimeOut() {
    return(
        <Box>
            When timer goes to 0, Insert Model here
        </Box>
    )
}

function sessionExpired() {
    //if time has run out then display modal - use sessionExpired as state function for modal
    //mark their session as incomplete and maybe delete data? 
    //
}