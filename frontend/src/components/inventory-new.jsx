import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
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
                <img src={data && processData(data, props.outfitNumber, props.itemType)} style={{ height: 35 }} />
            </Box>
        </div>
    )
}

export default function Inventory() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false)
    };

    let tops = [];
    let bottoms = [];
    let shoes = [];
    for (let i = 1; i < 10; i++) {
        tops.push(<Item outfitNumber={i} itemType="top" key={i} />);
        bottoms.push(<Item outfitNumber={i} itemType="bottom" key={i} />);
        shoes.push(<Item outfitNumber={i} itemType="shoes" key={i} />);
    }

    return (
        <Box sx={inventoryStyle}>
            <Button onClick={handleClose}>x</Button>
            <Box>
                <Typography> Tops </Typography>
                {tops}
            </Box>
            <Box>
                <Typography> Bottoms </Typography>
                {bottoms}
            </Box>
            <Box>
                <Typography> Shoes </Typography>
                {shoes}
            </Box>
        </Box>
    )
}

function processData(jsonData, outfitID, type) {
    let outfit = "outfit" + outfitID.toString()
    let link = jsonData[outfit][type]['link'];

    return link;
}

const inventoryStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 
}

const sectionStyle = {

}
