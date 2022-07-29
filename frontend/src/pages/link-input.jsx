import React from 'react'
import { useState } from 'react';
import { Link, renderMatches, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import { ReactSession } from 'react-client-session';
import { Typography, Divider } from '@mui/material';

class LinkInput extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "",
        }
        this.newUser = this.newUser.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.clear = this.clear.bind(this);

        //React session storage type
        ReactSession.setStoreType("cookie");
    }

    newUser(event) {
        event.preventDefault();
        //Store username 
        ReactSession.set("username", this.state.username);

        this.props.navigate('/study', { state: this.state.username });
    }

    clear(event) {
        event.preventDefault();
        ReactSession.remove("username");
    }

    handleFormChange(event) {
        this.setState({ username: event.target.value });
    }

    render() {
        return (
            <Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    autoComplete="off"
                >
                    <TextField
                        required
                        id="standard-basic"
                        label="Paste study link here"
                        variant="standard"
                        type="text"
                        onChange={this.handleFormChange}
                        value={this.state.username}
                    />
                    
                    <Button type="submit"
                        onClick={this.newUser}
                    >
                        Begin activity
                    </Button>
                </Box>

                <Divider />
                <Typography>Your link should be in the format of ________</Typography>
                <Typography>Confirm that this is your link! A wrong link will result in you not earning a credit.</Typography>
            </Box>

        )
    }
}


function LinkWithNavigate(props) {
    let navigate = useNavigate();
    return <LinkInput {...props} navigate={navigate} />
}

export default LinkWithNavigate;