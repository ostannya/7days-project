import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Here will be a <code>list of projects</code>.
                </p>
                <a
                    className="App-link"
                    href="https://somewebsite"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Go to the projects
                </a>
            </header>
        </div>
    );
}

export default App;
