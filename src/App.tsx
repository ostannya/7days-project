import { Routes, Route } from 'react-router-dom';
import { SvgWithHover, SvgIcon } from './svgIcon';
import { Layout, NoMatch } from './routes';
import './App.css';
import { Paragraph } from './styles';
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
                <Paragraph>
                    Here comes some inspirational text about the projects I've created in one week
                    each. Maybe even a link to the source code. It goes for two or three lines
                </Paragraph>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index path="poke-tac-toe" element={<PokeTacToe />} />
                        <Route path="to-any-case" element={<ToAnyCase />} />
                        <Route path="poke-cards" element={<PokeCards />} />

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
