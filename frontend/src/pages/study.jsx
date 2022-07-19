import React from 'react'
//import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Footer from "../components/footer";
import OutfitDisplay from '../components/outfit-display';
import OutfitSlot from '../components/outfit-slot';
import Inventory from "../components/inventory-new";
import Timer from "../components/timer";
import { ReactSession } from 'react-client-session';
import { useLocation } from 'react-router-dom';
import { useState } from 'react'

const page = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    width: 600,
}

export default function Study() {

    //const [outfit, setOutfit] = useState();

    const location = useLocation();
    //const username = ReactSession.get("username");

    return (
        <React.Fragment>
            <CssBaseline />
            {console.log(location.state)}
            {/* {"Username is = " + username} */}
            <Timer />
            {/* <TimeOut /> */}
            <Container >
                <Box sx={page}>
                    <OutfitDisplay />
                    <OutfitSlot />
                    <Inventory />
                </Box>
            </Container>
            {/* <Footer /> */}
        </React.Fragment>
    )
}