import React from 'react';
import { StyledImage } from './styles';
import { Item, SquaresArray } from './types';

export const calculateWinner = (squares: SquaresArray) => {
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
};
const getCharacterImageSrc = (characterId: number) => {
    return `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${characterId}.svg`;
};

const renderCharacterImage = (characterId: number, isdropdown: string) => {
    const imageSrc = getCharacterImageSrc(characterId);

    return <StyledImage src={imageSrc} alt="" isdropdown={isdropdown} />;
};

const renderCharacterLabel = (characterId: number, characterName: string) => {
    const imageElement = renderCharacterImage(characterId, 'true');

    return (
        <>
            {imageElement}
            {characterName}
        </>
    );
};

export const updatePlayer = (
    setPlayer: React.Dispatch<React.SetStateAction<React.ReactNode>>,
    selectedItemKey: number,
) => {
    setPlayer(renderCharacterLabel(selectedItemKey, 'false'));
};

export const itemsPlayerOne: Item[] = [
    { key: 25, label: renderCharacterLabel(25, 'Pikachu') },
    { key: 1, label: renderCharacterLabel(1, 'Bulbasaur') },
    { key: 4, label: renderCharacterLabel(4, 'Charmander') },
];

export const itemsPlayerTwo: Item[] = [
    { key: 133, label: renderCharacterLabel(133, 'Eevee') },
    { key: 7, label: renderCharacterLabel(7, 'Squirtle') },
    { key: 94, label: renderCharacterLabel(94, 'Gengar') },
];
