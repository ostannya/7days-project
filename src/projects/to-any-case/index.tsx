import { useState } from 'react';

import { BackButton } from '../../components/back-button';
import { TextArea, Title, Text } from '../../components/export';
import { InputContainer, StyledButton as Button, ButtonContainer } from './styles';
import {
    handleCopy,
    ChangeEventHandler,
    MouseEventHandler,
    toSentenceCase,
    toTitleCase,
    encodeURL,
    toBinary,
} from './helpers';
import { DropdownWithCount } from './Dropdown';

export const ToAnyCase = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange: ChangeEventHandler = event => {
        setInputValue(event.target.value);
    };
    const transformInputText =
        (transformFn: (str: string) => string): MouseEventHandler =>
        () => {
            setInputValue(transformFn(inputValue));
        };

    const inputElement = document.getElementById('input');
    const applyStrikethrough = () => {
        if (inputElement) {
            inputElement.style.textDecoration = 'line-through';
        }
    };

    const handleClear: MouseEventHandler = () => {
        if (inputElement) {
            inputElement.style.textDecoration = 'none';
        }
        setInputValue('');
    };

    return (
        <>
            <BackButton />
            <Title level={3}>toAnyCase()</Title>
            <Text style={{ fontSize: '0.8em' }}>Enter your text below</Text>
            <br />
            <InputContainer>
                <TextArea
                    id={'input'}
                    value={inputValue}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="maxLength is 200"
                    maxLength={200}
                />
            </InputContainer>
            <ButtonContainer>
                <Button onClick={handleClear}>Clear</Button>
                <Button onClick={handleCopy}>Copy</Button>
                <DropdownWithCount {...{ inputValue }} />
            </ButtonContainer>
            <br />
            <br />
            <div>
                <Button onClick={transformInputText(str => str.toLowerCase())}>lower case</Button>
                <Button onClick={transformInputText(str => str.toUpperCase())}>UPPER CASE</Button>
                <Button onClick={transformInputText(toSentenceCase)}>Sentence case</Button>
                <Button onClick={transformInputText(toTitleCase)}>Title Case</Button>
                <Button onClick={transformInputText(encodeURL)}>URL Encode</Button>
                <br />
                <Button onClick={applyStrikethrough}>s̶t̶r̶i̶k̶e̶ ̶t̶h̶r̶o̶u̶g̶h̶</Button>
                <Button>UTF8</Button>
                <Button onClick={transformInputText(toBinary)}>Binary code</Button>
                <Button>Values only</Button>
            </div>
        </>
    );
};
