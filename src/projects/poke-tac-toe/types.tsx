import { ButtonProps } from 'antd';

export type Item = {
    key: number;
    label: JSX.Element;
};

export interface CustomButtonProps extends ButtonProps {
    player: string;
}

export type DropdownButtonProps = {
    player: string;
    list: Item[];
    updatePlayer: (selectedItemKey: number) => void;
};

export type SquaresArray = (null | { props: { src: string } })[];

export type StyledImageProps = {
    isdropdown?: string;
};

export type WinnerMessageProps = {
    winner?: null | { props: { src: string } };
};

export type CellProps = {
    value: React.ReactNode;
    handleClick: () => void;
};

export type BoardProps = {
    squares: React.ReactNode[];
    handleClick: (i: number) => void;
};
