import { ButtonProps, Dropdown, Menu } from 'antd';
import { renderCharLabel } from './helpers';
import { StyledDropdownButton } from './styles';
import { useState } from 'react';

interface Item {
    key: string;
    label: JSX.Element;
}

interface CustomButtonProps extends ButtonProps {
    player?: any;
}

export const itemsPlayerOne: Item[] = [
    { key: '1', label: renderCharLabel(25, 'Pikachu') },
    { key: '2', label: renderCharLabel(1, 'Bulbasaur') },
    { key: '3', label: renderCharLabel(4, 'Charmander') },
];

export const itemsPlayerTwo: Item[] = [
    { key: '4', label: renderCharLabel(133, 'Eevee') },
    { key: '5', label: renderCharLabel(7, 'Squirtle') },
    { key: '6', label: renderCharLabel(52, 'Meowth') },
];

const DropdownButton = ({ player, ...props }: CustomButtonProps) => {
    return <StyledDropdownButton {...props}>{props.children}</StyledDropdownButton>;
};

export const CharacterDropdown = ({ player, list }: { player: string; list: Item[] }) => {
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    const handleItemClick = (item: Item) => {
        setSelectedItem(item);
    };

    function menu(list: Item[]) {
        return (
            <Menu>
                {list.map(item => (
                    <Menu.Item key={item.key} onClick={() => handleItemClick(item)}>
                        {item.label}
                    </Menu.Item>
                ))}
            </Menu>
        );
    }

    return (
        <Dropdown overlay={menu(list)} placement="bottomLeft">
            <DropdownButton size={'large'} player={player}>
                {selectedItem ? selectedItem.label : `Player ${player}`}
            </DropdownButton>
        </Dropdown>
    );
};
