import * as React from 'react';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';


export default function Inventory() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div>
            <ButtonUnstyled onClick={handleOpen}><AddCircleIcon /></ButtonUnstyled>
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
                    },
                }}>
                    <Paper sx={{padding:'5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} variant="outlined" onClick={handleClose}><img style={{height:'100%', margin:'0 auto'}} src="https://storage.googleapis.com/ai-co-creation-images/373947/1.jpg"></img></Paper>
                    <Paper elevation={1}></Paper>
                    <Paper elevation={1}></Paper>
                    <Paper elevation={1}></Paper>
                    <Paper elevation={1}></Paper>
                    <Paper elevation={1}></Paper>
                    <Paper elevation={1}></Paper>
                    <Paper elevation={1}></Paper>
                    <Paper elevation={1}></Paper>
                </Box>
            </Modal>
        </div>
    );

}