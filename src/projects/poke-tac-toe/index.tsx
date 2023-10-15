import { JSXElementConstructor, ReactElement, useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Space, Dropdown } from 'antd';

import { StyledLink, CharContainer, WinnerMessage } from './styles';
import * as ImagePath from './images-import';
import { calculateWinner, renderCharImage } from './helpers';
import { Board } from './Board';
import { itemsPlayerOne as items, itemsPlayerTwo } from './menu-items';

export function PokeTacToe() {
    const [playerOneIsNext, setPlayerOneIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    // const pikachu = renderCharImage(Pikachu);
    // const bulbasaur = renderCharImage(Bulbasaur);

    const eevee = renderCharImage(ImagePath.Eevee);
    const squirtle = renderCharImage(ImagePath.Squirtle);

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

                    <Dropdown menu={{ items }} placement="bottomLeft">
                        <Button>Player One</Button>
                    </Dropdown>
                    <Dropdown menu={{ items }} placement="bottomLeft">
                        <Button>Player Two</Button>
                    </Dropdown>
                    <br />
                    <CharContainer>
                        {playerOne} or {playerTwo}
                    </CharContainer>

                    <Board squares={squares} handleClick={handleClick} />
                    <WinnerMessage winner={winner}>{winner}is a winner!</WinnerMessage>
                    <Button onClick={handleRestart}>Restart Game</Button>
                </section>
            </Space>
        </>
    );
}
