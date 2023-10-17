import { JSXElementConstructor, ReactElement, ReactNode, useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';

import { StyledLink, WinnerMessage } from './styles';
import { calculateWinner, updatePlayer, itemsPlayerOne, itemsPlayerTwo } from './helpers';
import { Board } from './Board';
import { CharacterDropdown } from './Dropdown';

export const PokeTacToe = () => {
    const [playerOneIsNext, setPlayerOneIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const [playerOne, setPlayerOne] = useState<ReactNode>(<></>);
    const [playerTwo, setPlayerTwo] = useState<ReactNode>(<></>);

    const updatePlayerOne = (itemKey: number) => {
        updatePlayer(setPlayerOne, itemKey);
    };

    const updatePlayerTwo = (itemKey: number) => {
        updatePlayer(setPlayerTwo, itemKey);
    };

    const winner:
        | ({ props: { src: string } } & ReactElement<unknown, string | JSXElementConstructor<any>>)
        | null = calculateWinner(squares);

    const handleClick = (i: number) => {
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
    };

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

                    <CharacterDropdown
                        player={'One'}
                        list={itemsPlayerOne}
                        updatePlayer={updatePlayerOne}
                    />
                    <CharacterDropdown
                        player={'Two'}
                        list={itemsPlayerTwo}
                        updatePlayer={updatePlayerTwo}
                    />

                    <br />
                    <Board squares={squares} handleClick={handleClick} />
                    <WinnerMessage winner={winner}>{winner}is a winner!</WinnerMessage>
                    <Button onClick={handleRestart}>Restart Game</Button>
                </section>
            </Space>
        </>
    );
};
