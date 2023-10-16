import { JSXElementConstructor, ReactElement, useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';

import { StyledLink, WinnerMessage } from './styles';
import { calculateWinner, renderCharImage } from './helpers';
import { Board } from './Board';
import { CharacterDropdown, itemsPlayerOne, itemsPlayerTwo } from './Dropdown';

export function PokeTacToe() {
    const [playerOneIsNext, setPlayerOneIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    // const pikachu = renderCharImage(Pikachu);
    // const bulbasaur = renderCharImage(Bulbasaur);

    const eevee = renderCharImage(25);
    const squirtle = renderCharImage(1);

    const playerOne = eevee;
    const playerTwo = squirtle;

    const winner:
        | ({ props: { src: string } } & ReactElement<unknown, string | JSXElementConstructor<any>>)
        | null = calculateWinner(squares);

    function handleClick(i: number) {
        if (squares[i] || winner) {
            return;
        }
        const nextSquares = squares.slice();
        if (playerOneIsNext) {
            nextSquares[i] = playerOne;
        } else {
            nextSquares[i] = playerTwo;
        }
        setSquares(nextSquares);
        setPlayerOneIsNext(!playerOneIsNext);
    }

    const handleRestart = () => {
        setSquares(Array(9).fill(null));
        setPlayerOneIsNext(true);
    };

    return (
        <>
            <Space wrap>
                <StyledLink to="/">
                    <ArrowLeftOutlined />
                </StyledLink>
                <section>
                    <h4>Poké Tac Toe</h4>
                    <div style={{ fontSize: '0.8em' }}>Choose your Pokemon!</div>

                    <CharacterDropdown player={'One'} list={itemsPlayerOne} />
                    <CharacterDropdown player={'Two'} list={itemsPlayerTwo} />
                    <br />

                    <Board squares={squares} handleClick={handleClick} />
                    <WinnerMessage winner={winner}>{winner}is a winner!</WinnerMessage>
                    <Button onClick={handleRestart}>Restart Game</Button>
                </section>
            </Space>
        </>
    );
}
