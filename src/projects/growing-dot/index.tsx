import { useScrollDirection } from 'react-use-scroll-direction';
import './index.css';

import { BackButton } from '../../components/back-button';
import { Title } from '../../components/export';
import { DotContainer, Dot } from './styles';

export const GrowingDot = () => {
    const { isScrollingDown } = useScrollDirection();
    console.log('isScrollingDown', isScrollingDown);
    return (
        <>
            <BackButton />
            <Title level={3}>Growing Dot</Title>
            <p>Try to scroll down</p>
            <DotContainer>
                <Dot
                    id="black-dot"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16pt"
                    height="16.000099pt"
                >
                    <path
                        stroke="#000"
                        strokeMiterlimit="40"
                        strokeWidth="1.25"
                        d="M15.625 10.000062c0 3.106602-2.518398 5.625-5.6249996 5.625-3.1066017 0-5.625-2.518398-5.625-5.625 0-3.1066013 2.5183983-5.6249996 5.625-5.6249996 3.1066016 0 5.6249996 2.5183983 5.6249996 5.6249996z"
                    />
                </Dot>
            </DotContainer>
        </>
    );
};
