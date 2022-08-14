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
        transform: 'scale(1.05)'
    },
    transition: 'all 200ms ease',
}

const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
}

const checkMark = {
    borderRadius: 3,
}


const clothItem = {
    display: 'flex',
}

function DisplayItem(props) {

    const [data, setData] = React.useState();
    
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


    function selectOutfit() {
        //console.log(outfit);
        ReactSession.set('top', props.outfitNumber);
        //ReactSession.set('top', processData(data, props.outfitNumber, "top").setID)
        ReactSession.set('bottom', props.outfitNumber);
        ReactSession.set('shoes', props.outfitNumber);

        props.setToMonogram(true);
        
        //console.log(ReactSession.get("shoes",outfit));
        //useOutfit(outfitNumber);
        
        //find corresponding individual items and log them in the selectitem function
        //!!!!log the selection to the cloud!!!
    }

    return (
        <div>
            <Box sx={backgroundStyle}>
                <Box sx={slotStyle}>
                    <Box sx={clothItem}>
                        <img src={data && processData(data, props.outfitNumber, "top").link} style={{ height: 35 }} />
                        <CheckMark sx={checkMark} outfitNumber={props.outfitNumber} setOutfit={props.setOutfit} outfit={props.outfit} itemType="top" />
                    </Box>
                    <Box sx={clothItem}>
                        <img src={data && processData(data, props.outfitNumber, "bottom").link} style={{ height: 35 }} />
                        <CheckMark sx={checkMark} outfitNumber={props.outfitNumber} setOutfit={props.setOutfit} outfit={props.outfit} itemType="bottom" />
                    </Box>
                    <Box sx={clothItem}>
                        <img src={data && processData(data, props.outfitNumber, "shoes").link} style={{ height: 35 }} />
                        <CheckMark sx={checkMark} outfitNumber={props.outfitNumber} setOutfit={props.setOutfit} outfit={props.outfit} itemType="shoes" />
                    </Box>
                </Box>
            </Box>
            {/* CHOOSE THIS LOOK */}
            <Box sx={textStyle} onClick={ () => selectOutfit()}>
                <LocalOfferIcon sx={{ mr: 0.5 }} />
                <Typography variant="caption" sx={{ fontSize: '12px' }}>Choose this look</Typography>
            </Box>
        </div>
    )
}

function processData(jsonData, outfitID, type) {
    let outfit = "outfit" + outfitID.toString()
    let link = jsonData[outfit][type]['link'];
    let setID = jsonData[outfit][type]['set_id'];
    let index = jsonData[outfit][type]['index'];

    let output = {link: link, setID: setID, index: index}
    return output;
}

function OutfitDisplay(props) {

    const [checked, useChecked] = React.useState();

    return (
        <Box sx={containerStyle}>
            <DisplayItem outfitNumber="1" setOutfit={props.setOutfit} outfit={props.outfit} setToMonogram={props.setToMonogram}/>
            <DisplayItem outfitNumber="2" setOutfit={props.setOutfit} outfit={props.outfit} setToMonogram={props.setToMonogram}/>
            <DisplayItem outfitNumber="3" setOutfit={props.setOutfit} outfit={props.outfit} setToMonogram={props.setToMonogram}/>
            <DisplayItem outfitNumber="4" setOutfit={props.setOutfit} outfit={props.outfit} setToMonogram={props.setToMonogram}/>
            <DisplayItem outfitNumber="5" setOutfit={props.setOutfit} outfit={props.outfit} setToMonogram={props.setToMonogram}/>
            <DisplayItem outfitNumber="6" setOutfit={props.setOutfit} outfit={props.outfit} setToMonogram={props.setToMonogram}/>
            <DisplayItem outfitNumber="7" setOutfit={props.setOutfit} outfit={props.outfit} setToMonogram={props.setToMonogram}/>
            <DisplayItem outfitNumber="8" setOutfit={props.setOutfit} outfit={props.outfit} setToMonogram={props.setToMonogram}/>
            <DisplayItem outfitNumber="9" setOutfit={props.setOutfit} outfit={props.outfit} setToMonogram={props.setToMonogram}/>
        </Box>
    )
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