import React, { useState } from 'react';
import { AutoComplete } from 'antd';

import { BackButton } from '../../components/back-button';
import { Title, Text } from '../../components/export';
import { InputContainer } from './styles';

const mockVal = (str: string, repeat = 1) => ({
    value: 'accismus',
    //   value: ['accismus', 'acumen', 'anachronistic', 'behoove', 'cacophony', 'caustic', 'celerity'],
});

export const Autocomplete: React.FC = () => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState<{ value: string }[]>([]);

    const getPanelValue = (searchText: string) =>
        !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

    const onSelect = (data: string) => {
        console.log('onSelect', data);
    };

    const onChange = (data: string) => {
        setValue(data);
    };

    return (
        <>
            <BackButton />
            <Title level={3}>Autocomplete This</Title>
            <Text style={{ fontSize: '0.8em' }}>Suggesting the words you never meant</Text>
            <InputContainer>
                <AutoComplete
                    value={value}
                    options={options}
                    style={{ width: 200 }}
                    onSelect={onSelect}
                    onSearch={text => setOptions(getPanelValue(text))}
                    placeholder="input here"
                    onChange={onChange}
                />
            </InputContainer>
        </>
    );
};
