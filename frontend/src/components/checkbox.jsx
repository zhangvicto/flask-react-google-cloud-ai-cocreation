import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState } from 'react'
import { ReactSession } from 'react-client-session';

function updateSelection(props, outfitNumber, itemType) {
    console.log(outfitNumber + itemType)
    switch (itemType) {
        case 'top':
            props.setOutfit({
                ...props.outfit,
                "top": {
                    "outfit_number": outfitNumber
                }
            });
            ReactSession.set('top', outfitNumber);
            console.log(props.outfit);
            break;
        case 'bottom':
            props.setOutfit({
                ...props.outfit,
                "bottom": {
                    "outfit_number": outfitNumber
                }
            });
            ReactSession.set('bottom', outfitNumber);
            break;
        case 'shoes':
            props.setOutfit({
                ...props.outfit,
                "shoes": {
                    "outfit_number": outfitNumber
                }
            });
            ReactSession.set('shoes', outfitNumber);
            //console.log(ReactSession.get('shoes'))
            break;

    }
    //log to database of selection
    //reverse find setID and index using outfitNumber of itemType
    //uploadSelection(setID, index) add these parameters to the function
}

function cancelSelection(props, outfitNumber, itemType) {
    switch (itemType) {
        case 'top':
            props.setOutfit({
                ...props.outfit,
                "top": null
            });
            console.log(props.outfit);
            break;
        case 'bottom':
            props.setOutfit({
                ...props.outfit,
                "bottom": null
            });
            break;
        case 'shoes':
            props.setOutfit({
                ...props.outfit,
                "shoes": null
            });
            break;
    }
    //log deselect item
}

export default function CheckMark(props) {

    const [check, setCheck] = useState(false);

    const handleClick = () => {
        if (!check) {
            console.log(check)
            updateSelection(props, props.outfitNumber, props.itemType)
            setCheck(true);

        } else if (check) {
            console.log(check);
            cancelSelection(props, props.outfitNumber, props.itemType)
            setCheck(false);
        }
    }

    return (
        <Checkbox sx={{
            width: 4,
            height: 4,
        }} size="small" checked={check} onChange={() => handleClick()} icon={<CheckCircleOutlineIcon />} checkedIcon={<CheckCircleIcon />} />
    )
}