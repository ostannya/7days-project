import { useState, forwardRef } from 'react';
import { Dropdown, Menu } from 'antd';
import { StyledDropdownButton } from './styles';
import { Item, CustomButtonProps, DropdownButtonProps } from './types';

const DropdownButton = forwardRef(({ player, ...props }: CustomButtonProps, ref: any) => {
    return (
        <StyledDropdownButton {...props} ref={ref}>
            {props.children}
        </StyledDropdownButton>
    );
});

export const CharacterDropdown = ({ player, list, updatePlayer }: DropdownButtonProps) => {
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    const handleItemClick = (item: Item) => {
        setSelectedItem(item);
        updatePlayer(item.key as number);
    };

    const menu = (list: Item[]) => {
        return (
            <Menu>
                {list.map(item => (
                    <Menu.Item key={item.key} onClick={() => handleItemClick(item)}>
                        {item.label}
                    </Menu.Item>
                ))}
            </Menu>
        );
    };

    return (
        <Dropdown overlay={menu(list)} placement="bottomLeft">
            <DropdownButton player={player} size={'large'}>
                {selectedItem ? selectedItem.label : `Player ${player}`}
            </DropdownButton>
        </Dropdown>
    );
};
