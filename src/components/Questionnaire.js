import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
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
    const { onClickSubmit } = props;

    // Using 0 as non-selected
    const [answers, setAnswers] = useState(questionList.map(() => 0));
    const [submittable, setSubmittable] = useState(false);
    const [isMessageShown, setIsMessageShown] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleAnswerChange = (questionIdx, answerValue) => {
        // When there is an answer change, close the alert
        setIsMessageShown(false);

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
        setIsMessageShown(true);
        if (submittable) {
            setIsButtonDisabled(true);
            // Setting a 3 second delay; this will be replaced by a server call later.
            setTimeout(onClickSubmit, 3000);
        }
    }

    return (
        <>
            <Alert show={isMessageShown} variant={submittable ? "success" : "danger"} onClose={() => setIsMessageShown(false)} dismissible>
                <Alert.Heading>{submittable ? "Thank you for your response! Wait a sec until we find the best match..." : "Oops, please answer to all the questions!"}</Alert.Heading>
            </Alert>
            <h1>Questionnaire</h1>
            {questionList.map((question, idx) => <Question question={question} options={options} handleAnswerChange={(value) => handleAnswerChange(idx, value)}/>)}
            <Button variant="primary" disabled={isButtonDisabled} onClick={handleSubmit}>Submit</Button>
        </>
    );
}

export default Questionnaire;