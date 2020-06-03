import React from 'react';
import Select from 'react-select';

// Component for individual questions
const Question = (props) => {
    const {question, options, handleAnswerChange} = props;

    const handleOnChange = (newlySelected) => {
        handleAnswerChange(newlySelected.value);
    }

    return (
        <>
            <p>{question}</p>
            <Select options={options} onChange={handleOnChange}/>
        </>
    );
}

export default Question;