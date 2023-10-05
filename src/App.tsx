import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, FirstProject, SecondProject, ThirdProject, NoMatch } from './routes';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Here is a <code>list of projects</code>.
                </p>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index path="first-project" element={<FirstProject />} />
                        <Route path="second-project" element={<SecondProject />} />
                        <Route path="third-project" element={<ThirdProject />} />

                        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                </Routes>
            </header>
        </div>
    );
}

export default App;
