import { GameContainer, StyledCell } from './styles';
import { CellProps, BoardProps } from './types';

const Cell = ({ value, handleClick }: CellProps) => {
    return (
        <StyledCell className="square" onClick={handleClick}>
            {value}
        </StyledCell>
    );
};

export const Board = ({ squares, handleClick }: BoardProps) => {
    const renderCell = (i: number) => {
        return <Cell value={squares[i]} handleClick={() => handleClick(i)} />;
    };

    return (
        <GameContainer>
            <div>
                {renderCell(0)}
                {renderCell(1)}
                {renderCell(2)}
            </div>
            <div>
                {renderCell(3)}
                {renderCell(4)}
                {renderCell(5)}
            </div>
            <div>
                {renderCell(6)}
                {renderCell(7)}
                {renderCell(8)}
            </div>
        </GameContainer>
    );
};
