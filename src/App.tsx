import { Routes, Route } from 'react-router-dom';
import { SvgWithHover, SvgIcon } from './svgIcon';
import { Layout, NoMatch } from './routes';
import './App.css';
import { PokeTacToe } from './projects/poke-tac-toe';
import { ToAnyCase } from './projects/to-any-case';
import { PokeCards } from './projects/poke-cards';
import Sidebar from './components/sidebar';

const App = () => {
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
                        <Route path="poke-cards" element={<PokeCards />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                    <Route path="projects/poke-tac-toe/index.html" element={<PokeTacToe />} />
                    <Route path="projects/to-any-case/index.html" element={<ToAnyCase />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;
