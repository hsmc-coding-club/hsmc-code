import { useState } from 'react';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Beginner from './learn/beginner/Beginner';
import Header from './components/Header/Header';
import Home from './home/Home';
import Intermediate from './learn/intermediate/Intermediate';
import Sandbox from './learn/sandbox/Sandbox';

function App() {
    const [runFn, setRunFn] = useState<null|(() => void)>(null)

    return (
        <div className="app">
            <Router>
                <Header runFn={runFn} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/learn">
                        <Route index element={<Navigate to="/" />} />
                        <Route path="beginner" element={<Beginner setRunFn={setRunFn} />} />
                        <Route path="intermediate">
                            <Route index element={<Navigate to="./0" />} />
                            <Route path=":lessonId" element={<Intermediate />} />
                        </Route>
                    </Route>
                    <Route path="sandbox" element={<Sandbox />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
