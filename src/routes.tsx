import { Outlet, Link } from 'react-router-dom';
import { Container, ListItem } from './styles';

export function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <nav>
                <Container>
                    <ListItem>
                        <Link to="/first-project">First project</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/second-project">Second project</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/third-project">Third project</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </ListItem>
                </Container>
            </nav>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />
        </div>
    );
}

export function FirstProject() {
    return (
        <div>
            <h2>First Project</h2>
        </div>
    );
}

export function SecondProject() {
    return (
        <div>
            <h2>Second Project</h2>
        </div>
    );
}

export function ThirdProject() {
    return (
        <div>
            <h2>Third Project</h2>
        </div>
    );
}

export function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
