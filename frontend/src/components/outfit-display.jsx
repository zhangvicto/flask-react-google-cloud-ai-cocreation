import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { ReactSession } from 'react-client-session';
import CheckMark from './checkbox.jsx'

//STYLES
const slotStyle = {
    m: 0.5,
    width: 140,
    height: 140,
    display: 'flex',
    flexWrap: 'wrap',
    padding: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'none',
    borderRadius: 5,
}

const backgroundStyle = {
    display: 'flex',
    verticalAlign: 'center',
    justifyContent: 'center',
    // '&:hover': {
    //     backgroundColor: 'rgba(0,0,0,0.2)',
    // },
    borderRadius: 6,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 1,
}

const textStyle = {
    display: 'flex',
    verticalAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
        cursor: 'pointer',
        transitionDuration: '200ms',
        transform: 'scale(1.05)'
    },
}


const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
}

const checkMark = {
    borderRadius: 3,
}


const clothItem = {
    display: 'flex',
}

function DisplayItem(props) {

    const [data, setData] = React.useState();

    const [outfit, useOutfit] = React.useState(props.outfitNumber);

    React.useEffect(() => {

        fetch('http://localhost:8080/api/gallery', {
            method: 'GET',
            mode: 'cors'
        }
        ).then(response => {
            if (response.status === 200) {
                (response.json()).then((jsonData) => {
                    setData(jsonData);
                })
            } else {
                (response.json()).then((jsonData) => {
                    return null;
                })
            }
        }).catch((error) => {
            console.log("Error", error);
        })
    }, []);


    function selectOutfit(outfitNumber) {
        console.log(outfitNumber);
        //useOutfit(outfitNumber);
        console.log(outfit);
        //find corresponding individual items and log them in the selectitem function
        //log the selection to the cloud
    }

    return (
        <div>
            <Box sx={backgroundStyle}>
                <Box sx={slotStyle}>
                    <Box sx={clothItem}>
                        <img src={data && processData(data, props.outfitNumber, "top")} style={{ height: 35 }} />
                        <CheckMark sx={checkMark} />
                    </Box>
                    <Box sx={clothItem}>
                        <img src={data && processData(data, props.outfitNumber, "bottom")} style={{ height: 35 }} />
                        <CheckMark sx={checkMark} />
                    </Box>
                    <Box sx={clothItem}>
                        <img src={data && processData(data, props.outfitNumber, "shoes")} style={{ height: 35 }} />
                        <CheckMark sx={checkMark} />
                    </Box>
                </Box>
            </Box>
            <Box sx={textStyle} onClick={ () => selectOutfit(props.outfitNumber)}>
                <LocalOfferIcon sx={{ mr: 0.5 }} />
                <Typography variant="caption" sx={{ fontSize: '12px' }}>Choose this look</Typography>
            </Box>
        </div>
    )
}

function processData(jsonData, outfitID, type) {
    let outfit = "outfit" + outfitID.toString()
    let link = jsonData[outfit][type]['link'];

    return link;
}

function OutfitDisplay() {

    return (
        <Box sx={containerStyle}>
            <DisplayItem outfitNumber="1" />
            <DisplayItem outfitNumber="2" />
            <DisplayItem outfitNumber="3" />
            <DisplayItem outfitNumber="4" />
            <DisplayItem outfitNumber="5" />
            <DisplayItem outfitNumber="6" />
            <DisplayItem outfitNumber="7" />
            <DisplayItem outfitNumber="8" />
            <DisplayItem outfitNumber="9" />
        </Box>
    )
}

function submitOutfit(selected) {
    //upload data for outfit selected 
}


export default OutfitDisplay;

    // displayImage(outfitID, type) {

    //     let outfit = "outfit" + outfitID.toString()

    //     fetch('http://localhost:8080/api/gallery', {
    //         method: 'GET',
    //         mode: 'cors'
    //     }
    //     ).then(response => {
    //         if (response.status === 200) {
    //             (response.json()).then((data) => {
    //                 // console.log(data[outfit][type]['link'])
    //                 let link = data[outfit][type]['link'];
    //                 return link;
    //             })
    //         } else {
    //             (response.json()).then((data) => {
    //                 return null;
    //             })
    //         }
    //     }).catch((error) => {
    //         console.log("Error", error);
    //     })
    // }