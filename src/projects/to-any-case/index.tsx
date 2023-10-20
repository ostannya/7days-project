import { useState } from 'react';
import { Input, Typography, Dropdown } from 'antd';

import { BackButton } from '../../components/back-button';
import {
    InputContainer,
    StyledButton as Button,
    ButtonContainer,
    DropdownContainer,
} from './styles';
import {
    handleCopy,
    handleWordCount,
    ChangeEventHandler,
    MouseEventHandler,
    calculateItems,
} from './helpers';

const { TextArea } = Input;
const { Title, Text } = Typography;

export const ToAnyCase = () => {
    const [inputValue, setInputValue] = useState('');

    const wordCount = handleWordCount(inputValue);
    const charCount = inputValue.length;
    const charCountWithoutSpaces = inputValue.replace(/\s+/g, '').length;

    const items = calculateItems(wordCount, charCount, charCountWithoutSpaces);

    const menuProps = {
        items,
    };

    const handleInputChange: ChangeEventHandler = event => {
        setInputValue(event.target.value);
    };

    const handleToLowerCase: MouseEventHandler = () => {
        setInputValue(inputValue.toLowerCase());
    };

    const handleToUpperCase: MouseEventHandler = () => {
        setInputValue(inputValue.toUpperCase());
    };

    const handleClear: MouseEventHandler = () => {
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
                <DropdownContainer>
                    <Dropdown.Button menu={menuProps}>Count</Dropdown.Button>
                </DropdownContainer>
            </ButtonContainer>
            <br />
            <br />
            <div>
                <Button onClick={handleToLowerCase}>lower case</Button>
                <Button onClick={handleToUpperCase}>UPPER CASE</Button>
                <Button>Sentence case</Button>
                <Button>Title case</Button>
                <Button>URL</Button>
                <br />
                <Button>s̶t̶r̶i̶k̶e̶ ̶t̶h̶r̶o̶u̶g̶h̶</Button>
                <Button>UTF8</Button>
                <Button>Binary code</Button>
                <Button>Values only</Button>
            </div>
        </>
    );
};
