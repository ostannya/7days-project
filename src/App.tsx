import { Routes, Route } from 'react-router-dom';
import { Layout, FirstProject, SecondProject, ThirdProject, NoMatch } from './routes';
import logo from './logo.svg';
import './App.css';
import { Paragraph } from './styles';

function App() {
    return (
        <div className="App">
            <header></header>
            <main className="App-main">
                <img src={logo} className="App-logo" alt="logo" />
                <Paragraph>
                    Here comes some inspirational text about the projects I've created in one week
                    each. Maybe even a link to the source code. It goes for two or three lines
                </Paragraph>
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
            </main>
        </div>
    );
}

export default App;
