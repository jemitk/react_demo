import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Question from './Question';

const questionList = [
    "Do you like parties?",
    "Are you a picky eater?",
    "Do you like to travel?",
    "Are you a homebuddy?",
    "Do you like watching sports?"
];
const options = [
    { value: 1, label: "1 (Nope, not at all)" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5 (Of course, I'm all over it)" }
];

const Questionnaire = (props) => {
    // Default value is 1
    const [answers, setAnswers] = useState(questionList.map(() => 1));

    const handleAnswerChange = (questionIdx, answerValue) => {
        // Only update when necessary
        if (answers[questionIdx] !== answerValue) {
            const tempAnswers = [...answers];
            tempAnswers[questionIdx] = answerValue;
            setAnswers(tempAnswers);
        }
    };

    return (
        <>
            {questionList.map((question) => <Question question={question} options={options} />)}
            <Button variant="primary">Submit</Button>
        </>
    );
}

export default Questionnaire;