import { JSXElementConstructor, ReactElement, ReactNode, useState } from 'react';
import { Button, Space } from 'antd';

import { BackButton } from '../../components/back-button';
import { Title } from '../../components/export';
import { Board } from './Board';
import { CharacterDropdown } from './Dropdown';
import { WinnerMessage } from './styles';
import { calculateWinner, renderCharacterImage, itemsPlayerOne, itemsPlayerTwo } from './helpers';

export const PokeTacToe = () => {
    const [playerOneIsNext, setPlayerOneIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const [playerOne, setPlayerOne] = useState<ReactNode>(<></>);
    const [playerTwo, setPlayerTwo] = useState<ReactNode>(<></>);

    const updatePlayerOne = (itemKey: number) => {
        setPlayerOne(renderCharacterImage(itemKey, 'false'));
    };

    const updatePlayerTwo = (itemKey: number) => {
        setPlayerTwo(renderCharacterImage(itemKey, 'false'));
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
                <BackButton />
                <section>
                    <Title level={3}>Poké Tac Toe</Title>
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

                    <Board squares={squares} handleClick={handleClick} />
                    <WinnerMessage winner={winner}>{winner}is a winner!</WinnerMessage>
                    <Button onClick={handleRestart}>Restart Game</Button>
                </section>
            </Space>
        </>
    );
};
