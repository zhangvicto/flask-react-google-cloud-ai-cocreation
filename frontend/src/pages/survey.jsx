//Take in user information and upload data onto database
import '../styles/myapp.css';
import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Slider from '@mui/material/Slider';
import { ReactSession } from 'react-client-session';

export default function Form() {
    //session stuff

    //fetch number of users using backend


    //if this session is a new user
    //let newUser = "user" + numberOfUsers.toString;

    //ReactSession.setStoreType("cookie");
    //ReactSession.set("username", newUser);


    //form stuff
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (event, value) => setSelectedOptions(value);

    let navigate = useNavigate();

    const handleSubmit = (event) => {

        event.preventDefault();

        const data = new FormData(event.currentTarget);
        
        // console.log({
        //     age: data.get('age'),
        //     gender: selectedOptions,
        //     tech_level: data.get('tech_level'),
        //     email: data.get('email')
        // });
        // console.log('hi')
        //submit data here using data.get('id) - need to fix autocomplete
        navigate('../study');
    };


    //button enable
    const [complete, setComplete] = useState([])


    //gender options
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
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    Information Form
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="age"
                                    label="Age"
                                    name="age"
                                    autoComplete="age"
                                    type="text"
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-99]*' }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Autocomplete
                                    onChange={handleChange}
                                    disablePortal
                                    name="gender"
                                    id="gender"
                                    options={genderOptions}
                                    isOptionEqualToValue={(option, value) => option.id === value.id}
                                    renderInput={(params) => <TextField {...params} required label="Gender" />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                Proficiency with Technology
                                <Slider
                                    aria-label="Temperature"
                                    id="tech_level"
                                    name="tech_level"
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
                                    control={<Checkbox required value="agree" color="primary" />}
                                    label="I understand that my information will not be shared with anyone (CHANGE)"
                                />
                            </Grid>
                        </Grid>
                        {/* <Link to="/study" style={{ textDecoration: "none" }}> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant={"contained"}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                        {/* </Link> */}

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