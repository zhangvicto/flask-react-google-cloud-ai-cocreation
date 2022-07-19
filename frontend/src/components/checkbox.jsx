import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState } from 'react'

export default function CheckMark() {

    const [check, useCheck] = useState();

    function selectItem() {
        //save items selected
        if (check == false) {
            //add to slot
            alert('added')
        } else if (check == true) {
            //remove from slot
            alert('removed')
        }
    }

    return (
        <Checkbox sx={{
            width: 4,
            height: 4,
        }} size="small" checked={check}  onChange={() => {selectItem()}} icon={<CheckCircleOutlineIcon />} checkedIcon={<CheckCircleIcon />} />
    )
}