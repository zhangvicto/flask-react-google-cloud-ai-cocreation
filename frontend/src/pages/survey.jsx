//Take in user information and upload data onto database
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

export default function Form() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const genderOptions = [
        { label: 'Woman' },
        { label: 'Man' },
        { label: 'Transgender' },
        { label: 'Non-binary/non-conforming' },
        { label: 'Prefer not to respond' }
    ];

    const sliderMarks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 10,
            label: '10',
        }
    ];

    return (
        <React.Fragment>
            <CssBaseline />
            <Container component="main" maxWidth="xs">
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    Information Form
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="age"
                                    label="Age"
                                    name="age"
                                    autoComplete="age"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Autocomplete
                                    disablePortal
                                    id="gender"
                                    options={genderOptions}
                                    renderInput={(params) => <TextField {...params} required label="Gender" />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                Proficiency with Technology
                                <Slider
                                    aria-label="Temperature"
                                    defaultValue={1}
                                    valueLabelDisplay="auto"
                                    step={1}
                                    marks={sliderMarks}
                                    min={0}
                                    max={10}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="email"
                                    label="Email Address (Optional)"
                                    type="email"
                                    id="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I understand that my information will not be shared with anyone (CHANGE)"
                                />
                            </Grid>
                        </Grid>
                        <Link to="/study">
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Continue to study
                            </Button>
                        </Link>
                        {/* <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid> */}
                    </Box>
                </Box>
            </Container>
            <Footer />
        </React.Fragment>
    )
}