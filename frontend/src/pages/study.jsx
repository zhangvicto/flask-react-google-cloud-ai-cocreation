import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import { Typography } from '@mui/material';
import '../styles/myapp.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Footer from "../components/footer";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Slider from '@mui/material/Slider';

export default function Study() {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container  >
            <Box className="app-page">
                <Typography variant="h2" gutterBottom>Study</Typography>
            </Box>
        </Container>
        <Footer />
    </React.Fragment>
    )
}