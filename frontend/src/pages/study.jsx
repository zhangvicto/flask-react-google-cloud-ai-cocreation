import React from 'react'
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

    return (
        <React.Fragment>
            <CssBaseline />
            {console.log(location.state) /* Username is passed from previous page */}
            {/* {"Username is = " + username} */}
            <Timer />
            {/* <TimeOut /> */}
            <Container >
                <Box sx={page}>
                    <OutfitDisplay setOutfit={setOutfit} outfit={outfit} />
                    <OutfitSelection tops={topsOpen} bottoms={bottomsOpen} shoes={shoesOpen} setTopsOpen={setTopsOpen} setBottomsOpen={setBottomsOpen} setShoesOpen={setShoesOpen} outfit={outfit} />
                    <Inventory tops={topsOpen} bottoms={bottomsOpen} shoes={shoesOpen} setTopsOpen={setTopsOpen} setBottomsOpen={setBottomsOpen} setShoesOpen={setShoesOpen} setOutfit={setOutfit} outfit={outfit} />
                </Box>
            </Container>
            {/* <Footer /> */}
        </React.Fragment>
    )
}