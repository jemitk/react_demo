import React, { useState } from 'react';
import Complete from './components/Complete';
import Questionnaire from './components/Questionnaire';
import Welcome from './components/Welcome';
import './App.css';

const App = () => {
    // 0 for Welcome, 1 for Questionnaire, 2 for Complete
    // TODO: Consider making an enum
    const [page, setPage] = useState(0);

    return (
        <>
            { page === 0 ? <Welcome onClickStart={() => setPage(1)}/> : null }
            { page === 1 ? <Questionnaire onClickSubmit={() => setPage(2)}/> : null }
            { page === 2 ? <Complete onClickGoBack={() => setPage(0)}/> : null }
        </>
    );
}

export default App;
