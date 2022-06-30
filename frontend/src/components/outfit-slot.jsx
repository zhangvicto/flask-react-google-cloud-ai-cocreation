import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box'
import Paper from "@mui/material/Paper";

export default function outfitSelection() {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: 128,
                height: 128,
            },
        }}>
            <Paper sx={{outlineStyle:'solid',outlineColor:'lightgray',height:'64px',}}>
                <Box sx={{fontSize:'12px'}}>Top</Box>
                <Divider />
                <img style={{width:'auto', height:'75%'}} src="https://storage.googleapis.com/ai-co-creation-images/373947/1.jpg"></img>
            </Paper>

            <Paper sx={{outlineStyle:'solid',outlineColor:'lightgray',height:'64px',}}>
                <Box sx={{fontSize:'12px'}}>Bottom/Dress</Box>
                <Divider />
                <img style={{width:'auto', height:'75%'}} src="https://storage.googleapis.com/ai-co-creation-images/373947/1.jpg"></img>
            </Paper>

            <Paper sx={{outlineStyle:'solid',outlineColor:'lightgray',height:'64px',}}>
                <Box sx={{fontSize:'12px'}}>Shoes</Box>
                <Divider />
                <img style={{width:'auto', height:'75%'}} src="https://storage.googleapis.com/ai-co-creation-images/373947/1.jpg"></img>
            </Paper>
        </Box>
    )
}