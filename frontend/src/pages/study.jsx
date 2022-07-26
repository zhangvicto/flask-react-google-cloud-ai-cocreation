import React from 'react'
//import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Footer from "../components/footer";
import OutfitDisplay from '../components/outfit-display';
import { OutfitSelection, Inventory } from '../components/outfit-slot';
import Timer from "../components/timer";
import { useLocation } from 'react-router-dom';
import { useState, useContext } from 'react'
import { ReactSession } from 'react-client-session';

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
    
    const OpenContext = React.createContext(false)


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
                    <OutfitSelection onOpenChanged={trigger(count)}/>
                    <Inventory receiverCreator={receiverCreator(count)}/>
                </Box>
            </Container>
            {/* <Footer /> */}
        </React.Fragment>
    )
}