import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    margin: 50px auto;
`;

export const StyledCell = styled.div`
    width: 80px; /* 100px */
    height: 80px; /* 100px */
    box-shadow: 0 0 0 1px #333333;
    border: 0.5px solid #333333;
    cursor: pointer;
    line-height: 80px; /* 100px */
    font-size: 40px;
`;
