import React from 'react';
import { Wrapper, PhotoWrapper, StyledUl, StyledLi, Container, StyledH5 } from './styles';
import Photo from '../assets/IMG_1614.png';

function Sidebar() {
    return (
        <Wrapper>
            <Container>
                <PhotoWrapper src={Photo} alt="Nadiia M."></PhotoWrapper>
                <StyledH5>
                    Nadiia M.
                    <br /> <br />
                    Front-end Developer,
                    <br />
                    based in Berlin
                </StyledH5>
            </Container>
            <section>
                <StyledUl>
                    <StyledLi>
                        <a href="https://github.com/ostannya">GitHub</a>
                    </StyledLi>

                    <StyledLi>
                        <a href="https://de.linkedin.com/in/nmoiseienko">LinkedIn</a>
                    </StyledLi>
                </StyledUl>
            </section>
        </Wrapper>
    );
}

export default Sidebar;
