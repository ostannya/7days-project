import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export const StyledLink = styled(Link)`
    top: 95px;
    position: absolute;
    left: 100px;
    color: black;
`;

export const GameContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    width: 246px; /* 306px */
    margin: 50px auto 25px auto;
`;

export const StyledCell = styled.div`
    width: 80px;
    height: 80px;
    box-shadow: 0 0 0 1px #333333;
    border: 1px solid #333333;
    cursor: pointer;
    line-height: 80px;
    font-size: 40px;
`;

export const StyledImage = styled.img`
    vertical-align: middle;
    margin: 0 10px;
    width: 40px;
    height: 40px;
`;

interface WinnerMessageProps {
    winner?: null | { props: { src: string } };
}

export const WinnerMessage = styled.div<WinnerMessageProps>`
    visibility: ${props => (props.winner ? 'visible' : 'hidden')};
    font-size: 0.8em;
    margin-bottom: 10px;
    height: 50px;
`;

export const StyledDropdownButton = styled(Button)`
    margin: 20px;
`;
