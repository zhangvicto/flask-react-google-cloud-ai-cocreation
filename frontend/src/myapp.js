import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Disclaimer from './components/disclaimer'
import Box from "@mui/material/Box"
import './styles/myapp.css'
import { Grid, Typography } from '@mui/material';
import Footer from "./components/footer"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

class MyApp extends React.Component {

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container  >
                    <Box className="app-page">
                        <Typography variant="h2" gutterBottom>AI Co-creation Study</Typography>
                        <Typography gutterBottom>
                            Press Start to begin
                            <Grid item xs={8}>
                                <ArrowDropDownIcon />
                            </Grid>
                        </Typography>
                        <Disclaimer />
                    </Box>
                </Container>
                <Footer />
            </React.Fragment>
        )
    }
}

// function TestButton() {
//     return (
//         <div>
//             <button onClick={getCall}>Test</button>
//         </div>
//     )

// }

// function getCall() {
//     fetch('http://localhost:8080/api/test', {
//         method: 'GET',
//         mode: 'cors',
//     })
//         .then(response => {
//             if (response.status === 200) {
//                 response.json()
//                     .then(data => console.log(data))
//             } else {
//                 return null
//             }
//         }).catch((error) => {
//             console.log("Fetch error:", error)
//         })
// }

export default MyApp;