import { useState } from 'react';
import { Input, Typography } from 'antd';

import { BackButton } from '../../components/back-button';
import { InputContainer, StyledButton as Button, ButtonContainer } from './styles';
import { handleCopy, ChangeEventHandler, MouseEventHandler, toSentenceCase } from './helpers';
import { DropdownWithCount } from './Dropdown';

const { TextArea } = Input;
const { Title, Text } = Typography;

export const ToAnyCase = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange: ChangeEventHandler = event => {
        setInputValue(event.target.value);
    };

    const handleToLowerCase: MouseEventHandler = () => {
        setInputValue(inputValue.toLowerCase());
    };

    const handleToUpperCase: MouseEventHandler = () => {
        setInputValue(inputValue.toUpperCase());
    };

    const handleToSentenceCase: MouseEventHandler = () => {
        setInputValue(toSentenceCase(inputValue));
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
                <DropdownWithCount {...{ inputValue }} />
            </ButtonContainer>
            <br />
            <br />
            <div>
                <Button onClick={handleToLowerCase}>lower case</Button>
                <Button onClick={handleToUpperCase}>UPPER CASE</Button>
                <Button onClick={handleToSentenceCase}>Sentence case</Button>
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
