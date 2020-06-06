import React from 'react';
import { Button } from 'react-bootstrap';

const message = "Hello! \
Welcome to find-your-hidden-bestie tool! \
With a handful of questions, we'll match you with a friend that is very similar to you. \
Hope you have fun, and thank you! \
Please click the below start button to continue.";

const Welcome = (props) => {
    return (
        <>
            <h1>Welcome!</h1>
            <p>{message}</p>
            <Button>Start</Button>
        </>
    );
};

export default Welcome;