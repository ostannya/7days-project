import { Outlet } from 'react-router-dom';
import { StyledLink, Wrapper, NavigationWrapper } from './styles';
import Subtitle from './components/subtitle';

export function Layout() {
    return (
        <Wrapper>
            <Subtitle />
            <NavigationWrapper>
                <nav>
                    <StyledLink to="/projects/poke-tac-toe/index.html">Poké Tac Toe</StyledLink>
                    <StyledLink to="/to-any-case">toAnyCase()</StyledLink>
                    <StyledLink to="/poke-cards">Poke Flashcards</StyledLink>
                    <StyledLink to="/nothing-here">Wrong way</StyledLink>
                </nav>
            </NavigationWrapper>

            <div>
                {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
                <Outlet />
            </div>
        </Wrapper>
    );
}

export function NoMatch() {
    return (
        <div>
            <h4>Page doesn't exist (yet)</h4>
            <a style={{ fontSize: '0.75em' }} href="/">
                Go to the home page
            </a>
        </div>
    );
}
