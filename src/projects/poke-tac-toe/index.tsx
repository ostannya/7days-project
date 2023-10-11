import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { StyledCell, GameContainer, StyledLink } from './styles';
import { useState } from 'react';
import Pikachu from '../../assets/pika2.png';

function Cell() {
    const [value, setValue] = useState<React.ReactNode>(null);

    function handleClick() {
        setValue(<img src={Pikachu} alt="Pika" />);
    }
    return (
        <StyledCell className="square" onClick={handleClick}>
            {value}
        </StyledCell>
    );
}

export function PokeTacToe() {
    return (
        <>
            <StyledLink to="/">
                <ArrowLeftOutlined />
            </StyledLink>
            <section>
                <h4>Poké Tac Toe</h4>
                <GameContainer>
                    <div className="board-row">
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                    </div>
                    <div className="board-row">
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                    </div>
                    <div className="board-row">
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                    </div>
                </GameContainer>
                <Button>Restart Game</Button>
            </section>
        </>
    );
}
