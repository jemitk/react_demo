import React, { useState } from 'react';
import Select from 'react-select';

// Component for individual questions
const Question = (props) => {
    const {question, options} = props;
    const [selected, setSelected] = useState(0);

    const onChangeSelected = (newlySelected) => {
        console.log(newlySelected);
        setSelected(newlySelected.value);
    }

    return (
        <>
            <p>{question}</p>
            <Select options={options} value={selected} onChange={onChangeSelected}/>
        </>
    );
}

export default Question;