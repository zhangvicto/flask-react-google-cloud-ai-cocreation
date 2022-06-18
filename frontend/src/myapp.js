import React from 'react'

class Myapp extends React.Component {    
    constructor (props) {
        super(props);
        this.state = { selectedSection: 0 };
    }
    
    render() {
        return (
            <Buttons />
        )
    }
}

function Buttons(props) {
    return (
        <div>
            <button onClick={this.getCall()}>Test</button>
            <button onClick={console.log("hi")}>Log</button> 
        </div>
    )
    
}

function getCall() {
    const reqOptions = {
        method: 'GET',
        mode: 'cors',
    };
    fetch('http:localhost:8080/api/test', reqOptions)
        .then(response => {
            if (response.status === 200) {
                (response.json()).then((data) => {
                    console.log(data)
                })
            } else {
                (response.json()).then((data) => {
                    return null
                })
            }
        }).catch((error) => {
            console.log("Error in fetching calculations history.", error)
        })
}

export default Myapp;