import { GameContainer, StyledCell } from './styles';

type CellProps = {
    value: React.ReactNode;
    handleClick: any;
};

function Cell({ value, handleClick }: CellProps) {
    return (
        <StyledCell className="square" onClick={handleClick}>
            {value}
        </StyledCell>
    );
}

export function Board({ squares, handleClick }: { squares: React.ReactNode[]; handleClick: any }) {
    const renderCell = (i: number) => {
        return <Cell value={squares[i]} handleClick={() => handleClick(i)} />;
    };
    return (
        <GameContainer>
            <div className="board-row">
                {renderCell(0)}
                {renderCell(1)}
                {renderCell(2)}
            </div>
            <div className="board-row">
                {renderCell(3)}
                {renderCell(4)}
                {renderCell(5)}
            </div>
            <div className="board-row">
                {renderCell(6)}
                {renderCell(7)}
                {renderCell(8)}
            </div>
        </GameContainer>
    );
}
