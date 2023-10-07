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
    return <h4>First Project</h4>;
}

export function SecondProject() {
    return <h4>Second Project</h4>;
}

export function ThirdProject() {
    return <h4>Third Project</h4>;
}

export function NoMatch() {
    return (
        <div>
            <h4>Nothing to see here!</h4>
            <a style={{ fontSize: '0.75em' }} href="/">
                Go to the home page
            </a>
        </div>
    );
}
