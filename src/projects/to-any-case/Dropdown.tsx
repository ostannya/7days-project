import { useState, useEffect } from 'react';
import { Dropdown, MenuProps } from 'antd';

import { MenuItem, handleWordCount, countCharCountWithoutSpaces, calculateItems } from './helpers';
import { DropdownContainer } from './styles';

interface DropdownWithCountProps {
    inputValue: string;
}

export const DropdownWithCount = ({ inputValue }: DropdownWithCountProps) => {
    const [dropdownData, setDropdownData] = useState<{ label: string; items: MenuItem[] }>({
        label: 'Count',
        items: [],
    });

    useEffect(() => {
        const wordCount = handleWordCount(inputValue);
        const charCount = inputValue.length;
        const charCountWithoutSpaces = countCharCountWithoutSpaces(inputValue);

        const items = calculateItems(wordCount, charCount, charCountWithoutSpaces);

        setDropdownData(prevData => ({
            ...prevData,
            items,
        }));
    }, [inputValue]);

    const handleMenuClick = (item: { key: string }) => {
        const selectedItem = dropdownData.items.find(menuItem => menuItem.key === item.key);
        if (selectedItem) {
            setDropdownData(prevData => ({
                ...prevData,
                label: selectedItem.label,
            }));
        }
    };

    const menuProps: MenuProps = {
        items: dropdownData.items,
        onClick: handleMenuClick,
    };

    return (
        <DropdownContainer>
            <Dropdown.Button menu={menuProps}>{dropdownData.label}</Dropdown.Button>
        </DropdownContainer>
    );
};
