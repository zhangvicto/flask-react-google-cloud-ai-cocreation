import * as React from 'react'
import Box from '@mui/material/Box'
import { ReactSession } from 'react-client-session';
import { Link } from 'react-router-dom'

export default function Monogram() {

    function handleFinish() {
        alert("Your session is finished, head back to the survey page.")
    }

    function addMonogram() {
        
    }

    return (
        <Box sx={monogramStyle}>
            {/* Back Button */}
            <Link to='/study'>back</Link >
            <ItemDisplay itemType='top' />
            <ItemDisplay itemType='bottom' />
            <ItemDisplay itemType='shoes' />
            <a onClick={() => addMonogram()}>Add your monogram</a>

            {/* Finish Button */}
            <a onClick={() => handleFinish()} style={finishButton}>Finish</a>
            {/* <MonogramNudge /> */}
        </Box>
    )
}

function ItemDisplay(props) {

    const [data, setData] = React.useState();

    React.useEffect(() => {

        fetch('http://localhost:8080/api/inventory', {
            method: 'GET',
            mode: 'cors'
        }
        ).then(response => {
            if (response.status === 200) {
                (response.json()).then((jsonData) => {
                    //store data in our state
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

    //generate link from selection
    function itemLink() {
        console.log(ReactSession.get(props.itemType));
        return ReactSession.get(props.itemType) ? processData(data, ReactSession.get(props.itemType), props.itemType) : null;
    }

    return (
        <Box>
            {/* Need to wait for the data to be loaded before we test itemLink */}
            {/* Then if we have already selected and outfit - we display, otherwise we display error message */}
            {data && itemLink() ? <img style={itemImage} src={itemLink()} /> : <div>Go <Link to='/study'>back</Link > and choose an item please.</div>}
        </Box>
    )
}

function MonogramNudge() {
    return (
        <div>
            hi
        </div>
    )
}

function processData(jsonData, outfitID, type) {
    let outfit = "outfit" + outfitID.toString()
    let link = jsonData[outfit][type]['link'];
    return link;
}

const finishButton = {
    borderRadius: 50,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 5,
    height: 60,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: "12px",
    color: 'rgba(0,0,0,0.4)',
    marginTop: 3,
    marginRight: 4,
    cursor: 'pointer'
}

const itemImage = {
    height: 100
}

const monogramStyle = {
    display: 'flex'
}