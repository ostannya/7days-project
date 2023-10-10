import { ArrowLeftOutlined } from '@ant-design/icons';
import { StyledLink } from './styles';

export function PokeTacToe() {
    return (
        <>
            <StyledLink to="/">
                <ArrowLeftOutlined />
            </StyledLink>
            <div>
                <h4>PokéTacToe</h4>
                <p>Choose your Pokemon and win!</p>
            </div>
        </>
    );
}
