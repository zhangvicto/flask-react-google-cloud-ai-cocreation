import React from 'react';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';


export default function Inventory() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <div>
            <IconButton color='primary' onClick={handleOpen}><AddCircleIcon /></IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 64,
                        height: 64,
                        boxShadow:'none',
                    },
                }}>
                        Top
                        <Paper sx={{ padding: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow:'none' }} variant="outlined" onClick={handleClose}><img style={{ height: 50}} src="https://storage.googleapis.com/ai-co-creation-images/373947/1.jpg"></img></Paper>
                        <Paper elevation={1}></Paper>
                        <Paper elevation={1}></Paper>
                        <Paper elevation={1}></Paper>
                        <Paper elevation={1}></Paper>
                        Bottom
                        <Paper elevation={1}></Paper>
                        <Paper elevation={1}></Paper>
                        <Paper elevation={1}></Paper>
                        <Paper elevation={1}></Paper>
                        Shoes
                        <Paper elevation={1}></Paper>
                        <Paper elevation={1}></Paper>
                        <Paper elevation={1}></Paper>
                        <Paper elevation={1}></Paper>

                </Box>
            </Modal>
        </div>
    );

}

function selectItem() {
    alert('item selected')
}