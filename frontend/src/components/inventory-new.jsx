import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box'
import { ReactSession } from 'react-client-session';

function Item(props) {

    const [data, setData] = React.useState();

    //const [outfit, useOutfit] = React.useState(props.outfitNumber);

    React.useEffect(() => {

        fetch('http://localhost:8080/api/inventory', {
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

    //selectitem function
    function selectItem(itemNumber) {

    }

    return (
        <div>
            <Box>
                <img src={data && processData(data, props.outfitNumber, "top")} style={{ height: 35 }} />
            </Box>
        </div>
    )
}

export default function inventory() {
    return (
        <Box> 
            <Item outfitNumber="1" />
            <Item outfitNumber="1" />
            <Item outfitNumber="1" />
            <Item outfitNumber="1" />
            <Item outfitNumber="1" />
        </Box>
    )
}

function processData(jsonData, outfitID, type) {
    let outfit = "outfit" + outfitID.toString()
    console.log(outfit)
    let link = jsonData[outfit][type]['link'];

    return link;
}