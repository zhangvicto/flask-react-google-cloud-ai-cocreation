import React from 'react'
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import { Typography } from '@mui/material';
import '../styles/myapp.css';
import Footer from "../components/footer";
import TutorialNoAI from "../components/tutorial-no-ai"; //change here to ai or no ai
import TutorialAI from "../components/tutorial-ai"; //change here to ai or no ai
import Inventory from "../components/inventory";
import OutfitSlot from '../components/outfit-slot'

export default function Study() {

    const [AIState, setAIState] = useState([])

    return (
        <React.Fragment>
        <CssBaseline />
        <Container  >
            <Box className="app-page">
                <TutorialNoAI />
                <TutorialAI />
                <OutfitSlot />
                <Inventory />
            </Box>
        </Container>
        <Footer />
    </React.Fragment>
    )
}