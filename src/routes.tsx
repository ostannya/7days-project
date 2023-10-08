import { Outlet } from 'react-router-dom';
import { StyledLink, Wrapper, NavigationWrapper } from './styles';

export function Layout() {
    return (
        <Wrapper>
            <NavigationWrapper>
                <nav>
                    <StyledLink to="/poke-tac-toe">PokéTacToe</StyledLink>
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
