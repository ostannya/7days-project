import { useState, useEffect } from 'react';
import { Dropdown, MenuProps } from 'antd';

import { MenuItem, handleWordCount, countCharCountWithoutSpaces, calculateItems } from './helpers';
import { DropdownContainer } from './styles';

interface DropdownWithCountProps {
    inputValue: string;
}

export const DropdownWithCount = ({ inputValue }: DropdownWithCountProps) => {
    const [selectedItem, setSelectedItem] = useState('Count');
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    const wordCount = handleWordCount(inputValue);
    const charCount = inputValue.length;
    const charCountWithoutSpaces = countCharCountWithoutSpaces(inputValue);

    useEffect(() => {
        setMenuItems(calculateItems(wordCount, charCount, charCountWithoutSpaces));
    }, [wordCount, charCount, charCountWithoutSpaces]);

    const handleMenuClick = (item: { key: string }) => {
        const selectedItem = menuItems.find(menuItem => menuItem.key === item.key);

        if (selectedItem) {
            setSelectedItem(selectedItem.label);
        }
    };

    const menuProps: MenuProps = {
        items: menuItems,
        onClick: handleMenuClick,
    };

    return (
        <DropdownContainer>
            <Dropdown.Button menu={menuProps}>{selectedItem}</Dropdown.Button>
        </DropdownContainer>
    );
};
