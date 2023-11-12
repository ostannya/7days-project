import { useEffect, useState } from 'react';
import { useScrollDirection } from 'react-use-scroll-direction';
import './index.css';

import { BackButton } from '../../components/back-button';
import { Title, Text } from '../../components/export';
import { DotContainer, Dot } from './styles';

export const GrowingDot = () => {
    const { isScrollingDown } = useScrollDirection();
    const [scale, setScale] = useState(1);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const scaleIncrement = 0.05;
    const scrollThreshold = 5;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

            if (isScrollingDown && currentScrollTop > lastScrollTop + scrollThreshold) {
                setScale(prevScale => Math.min(prevScale + scaleIncrement, 1));
                setLastScrollTop(currentScrollTop);
            } else if (!isScrollingDown && currentScrollTop < lastScrollTop - scrollThreshold) {
                setScale(prevScale => Math.max(prevScale - scaleIncrement, 100));
                setLastScrollTop(currentScrollTop);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrollingDown, lastScrollTop]);

    return (
        <>
            <BackButton />
            <Title level={3}>Growing Dot</Title>
            <Text style={{ fontSize: '0.8em' }}>Try to scroll up and down</Text>
            <DotContainer>
                <Dot
                    id="black-dot"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16pt"
                    height="16.000099pt"
                    style={{ transform: `scale(${scale})`, transition: 'transform 1s ease' }}
                >
                    {/* <defs>
                        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="50%" style={{ stopColor: '#000', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#000', stopOpacity: 0.5 }} />
                        </radialGradient>
                    </defs> */}
                    <path
                        //  fill="url(#grad1)"
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
