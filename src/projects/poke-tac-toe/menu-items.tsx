import type { MenuProps } from 'antd';
import { renderCharImage } from './helpers';
import * as ImagePath from './images-import';

export const itemsPlayerOne: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <>
                {renderCharImage(ImagePath.Pikachu)}
                Pikachu
            </>
        ),
    },
    {
        key: '2',
        label: (
            <>
                {renderCharImage(ImagePath.Bulbasaur)}
                Bulbasaur
            </>
        ),
    },
    {
        key: '3',
        label: (
            <>
                {renderCharImage(ImagePath.Charmander)}
                Charmander
            </>
        ),
    },
];

export const itemsPlayerTwo: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <>
                {renderCharImage(ImagePath.Eevee)}
                Eevee
            </>
        ),
    },
    {
        key: '2',
        label: (
            <>
                {renderCharImage(ImagePath.Squirtle)}
                Squirtle
            </>
        ),
    },
    {
        key: '3',
        label: (
            <>
                {renderCharImage(ImagePath.Meowth)}
                Meowth
            </>
        ),
    },
];
