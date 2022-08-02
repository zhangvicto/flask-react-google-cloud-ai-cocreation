import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
//import Footer from "../components/footer";
import OutfitDisplay from '../components/outfit-display';
import { OutfitSelection, Inventory } from '../components/outfit-slot';
import Timer from "../components/timer";
import { useLocation } from 'react-router-dom';
import { useState } from 'react'
import { ReactSession } from 'react-client-session';
import { Navigate } from "react-router-dom";
import AIButton from '../components/ai-button';

const page = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    width: 600,
}

export default function Study() {
    //VARIABLE FOR EACH USER
    //AI State
    const [AIOn, setAIOn] = useState(true);
    //Checkbox Nudge State
    const [checkboxNudge, setCheckboxNudge] = useState(true);
    //Monogram Nudge State
    const [monogramNudge, setMonogramNudge] = useState(true);

    //store outfit selection
    const [outfit, setOutfit] = useState();

    //pass user info from previous page
    const location = useLocation();

    //Access COOKIE for username
    const username = ReactSession.get("username");

    //Opens Tops Inventory
    const [topsOpen, setTopsOpen] = React.useState(false);

    //Opens Bottoms Inventory
    const [bottomsOpen, setBottomsOpen] = React.useState(false);

    //Opens Shoes Inventory
    const [shoesOpen, setShoesOpen] = React.useState(false);

    //open monogram page
    const [toMonogram, setToMonogram] = React.useState(false);

    //navigate to Monogram when we set the state using the button
    if (toMonogram == true) {
        return <Navigate to="/monogram" />;
    }

    return (
        <React.Fragment>
            <CssBaseline />
            {console.log(location.state) /* Username is passed from previous page */}
            {/* {"Username is = " + username} */}
            <Timer />
            {/* may not be needed <TimeOut /> */}
            <Container >
                <Box sx={page}>
                    <OutfitDisplay setOutfit={setOutfit} outfit={outfit} setToMonogram={setToMonogram} />
                    <AIButton />
                    <OutfitSelection tops={topsOpen} bottoms={bottomsOpen} shoes={shoesOpen} setTopsOpen={setTopsOpen} setBottomsOpen={setBottomsOpen} setShoesOpen={setShoesOpen} outfit={outfit} setToMonogram={setToMonogram} />
                    <Inventory tops={topsOpen} bottoms={bottomsOpen} shoes={shoesOpen} setTopsOpen={setTopsOpen} setBottomsOpen={setBottomsOpen} setShoesOpen={setShoesOpen} setOutfit={setOutfit} outfit={outfit} />
                </Box>
            </Container>
            {/* <Footer /> */}
        </React.Fragment>
    )
}