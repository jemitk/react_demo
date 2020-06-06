import React, { useState } from 'react';
import Questionnaire from './components/Questionnaire';
import Welcome from './components/Welcome';
import './App.css';

const App = () => {
    // 0 for Welcome, 1 for Questionnaire
    const [page, setPage] = useState(0);

    return (
        <>
            {page === 0 ? <Welcome onClickStart={() => setPage(1)}/> : null}
            {page === 1 ? <Questionnaire /> : null}
        </>
    );
}

export default App;
