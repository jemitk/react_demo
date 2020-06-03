import React, { useState } from 'react';
import Select from 'react-select';

// Component for individual questions
const Question = (props) => {
    const {question, options, handleAnswerChange} = props;
    const [selected, setSelected] = useState(0);

    const handleOnChange = (newlySelected) => {
        console.log(newlySelected);
        setSelected(newlySelected.value);
        handleAnswerChange(newlySelected.value);
    }

    return (
        <>
            <p>{question}</p>
            <Select options={options} value={selected} onChange={handleOnChange}/>
        </>
    );
}

export default Question;