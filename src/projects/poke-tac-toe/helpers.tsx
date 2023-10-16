import React from 'react';
import { StyledImage } from './styles';

type SquaresArray = (null | { props: { src: string } })[];

export function calculateWinner(squares: SquaresArray) {
    const lines = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [6, 4, 2],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        const squareA = squares[a];
        const squareB = squares[b];
        const squareC = squares[c];
        if (
            React.isValidElement(squareA) &&
            React.isValidElement(squareB) &&
            React.isValidElement(squareC) &&
            squareA.props.src === squareB.props.src &&
            squareA.props.src === squareC.props.src
        ) {
            return squareA;
        }
    }
    return null;
}

export const renderCharImage = (pokemonId: number) => {
    return (
        <StyledImage
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
            alt=""
        />
    );
};

export function renderCharLabel(charNumber: number, charName: string) {
    return (
        <>
            {renderCharImage(charNumber)}
            {charName}
        </>
    );
}
