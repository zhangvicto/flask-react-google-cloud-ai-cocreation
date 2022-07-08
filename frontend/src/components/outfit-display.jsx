import * as React from 'react';
import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box'
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase"
import Button from "@mui/material/Button"
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { ReactSession } from 'react-client-session';

export default function OutfitDisplay() {
    //STYLES
    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        '& > :not(style)': {
            m: 1,
            width: 130,
            height: 130,
        }
    }

    const slotStyle = {
        m: 1,
        width: 120,
        height: 120,
        display: 'flex',
        flexWrap: 'wrap',
        padding: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: "none"
    }

    const textStyle ={
        position: 'absolute',
        display: 'none',
        padding: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        verticalAlign: 'center'
    }

    const boxOnHover = {
        ":hover .hiddenText": {
            display: "block"
        }
    }

    return (
        <Box sx={containerStyle}>
            <Button onClick={selectOutfit} sx={boxOnHover} >
                <Paper sx={slotStyle}>
                    <Box ><img src={randomTop()} style={{ height: 40 }} /></Box>
                    <Box><img src={randomBottom()} style={{ height: 40 }} /></Box>
                    <Box><img src={randomShoes()} style={{ height: 40 }} /></Box>
                    <Box className="hiddenText" sx={textStyle}><Typography variant="caption" color="white">Choose this look</Typography></Box>
                </Paper>
            </Button>
            <Button onClick={selectOutfit} sx={boxOnHover} >
                <Paper sx={slotStyle}>
                    <Box ><img src={randomTop()} style={{ height: 40 }} /></Box>
                    <Box><img src={randomBottom()} style={{ height: 40 }} /></Box>
                    <Box><img src={randomShoes()} style={{ height: 40 }} /></Box>
                    <Box className="hiddenText" sx={textStyle}><Typography variant="caption" color="white">Choose this look</Typography></Box>
                </Paper>
            </Button>
            <Button onClick={selectOutfit} sx={boxOnHover} >
                <Paper sx={slotStyle}>
                    <Box ><img src={randomTop()} style={{ height: 40 }} /></Box>
                    <Box><img src={randomBottom()} style={{ height: 40 }} /></Box>
                    <Box><img src={randomShoes()} style={{ height: 40 }} /></Box>
                    <Box className="hiddenText" sx={textStyle}><Typography variant="caption" color="white">Choose this look</Typography></Box>
                </Paper>
            </Button>
            <Button onClick={selectOutfit} sx={boxOnHover} >
                <Paper sx={slotStyle}>
                    <Box ><img src={randomTop()} style={{ height: 40 }} /></Box>
                    <Box><img src={randomBottom()} style={{ height: 40 }} /></Box>
                    <Box><img src={randomShoes()} style={{ height: 40 }} /></Box>
                    <Box className="hiddenText" sx={textStyle}><Typography variant="caption" color="white">Choose this look</Typography></Box>
                </Paper>
            </Button>
            <Button onClick={selectOutfit} sx={boxOnHover} >
                <Paper sx={slotStyle}>
                    <Box ><img src={randomTop()} style={{ height: 40 }} /></Box>
                    <Box><img src={randomBottom()} style={{ height: 40 }} /></Box>
                    <Box><img src={randomShoes()} style={{ height: 40 }} /></Box>
                    <Box className="hiddenText" sx={textStyle}><Typography variant="caption" color="white">Choose this look</Typography></Box>
                </Paper>
            </Button>
            <Button onClick={selectOutfit} sx={boxOnHover} >
                <Paper sx={slotStyle}>
                    <Box ><img src={randomTop()} style={{ height: 40 }} /></Box>
                    <Box><img src={randomBottom()} style={{ height: 40 }} /></Box>
                    <Box><img src={randomShoes()} style={{ height: 40 }} /></Box>
                    <Box className="hiddenText" sx={textStyle}><Typography variant="caption" color="white">Choose this look</Typography></Box>
                </Paper>
            </Button>
            <Button onClick={selectOutfit} sx={boxOnHover} >
                <Paper sx={slotStyle}>
                    <Box ><img src={randomTop()} style={{ height: 40 }} /></Box>
                    <Box><img src={randomBottom()} style={{ height: 40 }} /></Box>
                    <Box><img src={randomShoes()} style={{ height: 40 }} /></Box>
                    <Box className="hiddenText" sx={textStyle}><Typography variant="caption" color="white">Choose this look</Typography></Box>
                </Paper>
            </Button>
            <Button onClick={selectOutfit} sx={boxOnHover} >
                <Paper sx={slotStyle}>
                    <Box ><img src={randomTop()} style={{ height: 40 }} /></Box>
                    <Box><img src={randomBottom()} style={{ height: 40 }} /></Box>
                    <Box><img src={randomShoes()} style={{ height: 40 }} /></Box>
                    <Box className="hiddenText" sx={textStyle}><Typography variant="caption" color="white">Choose this look</Typography></Box>
                </Paper>
            </Button>
            <Button onClick={selectOutfit} sx={boxOnHover} >
                <Paper sx={slotStyle}>
                    <Box ><img src={randomTop()} style={{ height: 40 }} /></Box>
                    <Box><img src={randomBottom()} style={{ height: 40 }} /></Box>
                    <Box><img src={randomShoes()} style={{ height: 40 }} /></Box>
                    <Box className="hiddenText" sx={textStyle}><Typography variant="caption" color="white">Choose this look</Typography></Box>
                </Paper>
            </Button>


        </Box>
    )
}

function randomTop() {
    let outfitLink = "https://storage.googleapis.com/ai-co-creation-images/top/";
    let numberOfImages = 3;
    let randomNumber = Math.floor((Math.random() * numberOfImages) + 1);
    let imageName = randomNumber.toString().concat(".jpg")
    let link = outfitLink.concat(imageName);
    return link;
}

function randomBottom() {
    let outfitLink = "https://storage.googleapis.com/ai-co-creation-images/bottom/";
    let numberOfImages = 10;
    let randomNumber = Math.floor((Math.random() * numberOfImages) + 1);
    let imageName = randomNumber.toString().concat(".jpg")
    let link = outfitLink.concat(imageName);
    return link;
}

function randomShoes() {
    let outfitLink = "https://storage.googleapis.com/ai-co-creation-images/shoes/";
    let numberOfImages = 7;
    let randomNumber = Math.floor((Math.random() * numberOfImages) + 1);
    let imageName = randomNumber.toString().concat(".jpg")
    let link = outfitLink.concat(imageName);
    return link;
}

function selectOutfit() {
    alert('outfit selected')
    //store outfit selection in cookie

    let top;
    let bottom;
    let shoes;

    let outfitSelected = 0;
}

function submitOutfit(selected) {
    //upload data for outfit selected 
    let top;
    let bottom;
    let shoes;
}