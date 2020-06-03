import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
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
    // Using 0 as non-selected
    const [answers, setAnswers] = useState(questionList.map(() => 0));
    const [submittable, setSubmittable] = useState(false);

    const handleAnswerChange = (questionIdx, answerValue) => {
        // Only update when necessary
        if (answers[questionIdx] !== answerValue) {
            const tempAnswers = [...answers];
            tempAnswers[questionIdx] = answerValue;
            setAnswers(tempAnswers);
            setSubmittable(checkIfSubmittable(tempAnswers));
        }
    };

    // Submittable only when the user selected answers for all the questions
    const checkIfSubmittable = (newAnswers) => newAnswers.filter(val => (val === 0)).length === 0;

    const handleSubmit = () => {
        if (submittable) {

        }
    }

    return (
        <>
            {questionList.map((question, idx) => <Question question={question} options={options} handleAnswerChange={(value) => handleAnswerChange(idx, value)}/>)}
            <Button variant="primary" disabled={!submittable} onClick={handleSubmit}>Submit</Button>
        </>
    );
}

export default Questionnaire;