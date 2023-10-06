import { Outlet } from 'react-router-dom';
import { StyledLink, Wrapper, NavigationWrapper } from './styles';

export function Layout() {
    return (
        <Wrapper>
            <NavigationWrapper>
                <nav>
                    <StyledLink to="/first-project">First project</StyledLink>

                    <StyledLink to="/second-project">Second project</StyledLink>

                    <StyledLink to="/third-project">Third project</StyledLink>

                    <StyledLink to="/nothing-here">Nothing Here</StyledLink>
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

export function FirstProject() {
    return <h3>First Project</h3>;
}

export function SecondProject() {
    return <h3>Second Project</h3>;
}

export function ThirdProject() {
    return <h3>Third Project</h3>;
}

export function NoMatch() {
    return (
        <div>
            <h3>Nothing to see here!</h3>

            <a style={{ fontSize: '0.75em' }} href="/">
                Go to the home page
            </a>
        </div>
    );
}
