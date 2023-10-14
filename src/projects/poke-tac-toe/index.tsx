import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { StyledLink, CharContainer, StyledImage, StyledWinnerMessage } from './styles';
import { useState } from 'react';
import Pikachu from '../../assets/pika2.png';
import Bulbasaur from '../../assets/bulbasaur.png';
import { calculateWinner } from './helpers';
import { Board } from './Board';

export function PokeTacToe() {
    const [pikaIsNext, setPikaIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const pikachu = <StyledImage src={Pikachu} alt="Pika" />;
    const bulbasaur = <StyledImage src={Bulbasaur} alt="Bulbasaur" />;
    const winner = calculateWinner(squares);

    function handleClick(i: number) {
        if (squares[i] || winner) {
            return;
        }
        const nextSquares = squares.slice();
        if (pikaIsNext) {
            nextSquares[i] = pikachu;
        } else {
            nextSquares[i] = bulbasaur;
        }
        setSquares(nextSquares);
        setPikaIsNext(!pikaIsNext);
    }

    const handleRestart = () => {
        setSquares(Array(9).fill(null));
        setPikaIsNext(true);
    };

    return (
        <>
            <StyledLink to="/">
                <ArrowLeftOutlined />
            </StyledLink>
            <section>
                <h4>Poké Tac Toe</h4>
                <div style={{ fontSize: '0.8em' }}>Choose your Pokemon!</div>
                <CharContainer>
                    {pikachu} or {bulbasaur}
                </CharContainer>
                <Board squares={squares} handleClick={handleClick} />
                {winner ? <StyledWinnerMessage>{winner}is a winner!</StyledWinnerMessage> : null}
                <Button onClick={handleRestart}>Restart Game</Button>
            </section>
        </>
    );
}
