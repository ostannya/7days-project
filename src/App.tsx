import { Routes, Route } from 'react-router-dom';
import { SvgWithHover, SvgIcon } from './svgIcon';
import { Layout, NoMatch } from './routes';
import './App.css';
import { PokeTacToe } from './projects/poke-tac-toe';
import { ToAnyCase } from './projects/to-any-case';
import { PokeCards } from './projects/poke-cards';
import Sidebar from './components/sidebar';

function App() {
    return (
        <div className="App">
            <header></header>
            <main className="App-main">
                <Sidebar />
                <SvgWithHover>
                    {hovered => <SvgIcon fill={hovered ? '#ecff41' : 'currentColor'} />}
                </SvgWithHover>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="to-any-case" element={<ToAnyCase />} />
                        <Route path="poke-cards" element={<PokeCards />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                    <Route path="projects/poke-tac-toe/index.html" element={<PokeTacToe />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
