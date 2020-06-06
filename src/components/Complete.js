import React from 'react';
import { Button } from 'react-bootstrap';

const Complete = (props) => {
    const { onClickGoBack } = props;

    return (
        <>
            <p>We found your best match! Click Go back to go back to the main page.</p>
            <Button onClick={onClickGoBack}>Go Back</Button>
        </>
    )
}