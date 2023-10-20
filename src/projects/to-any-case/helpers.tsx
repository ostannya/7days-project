export type ChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>;
export type MouseEventHandler = React.MouseEventHandler<HTMLButtonElement>;

export const handleWordCount = (inputValue: string) => {
    const words = inputValue.split(/\s+/);
    return words.filter(word => word !== '').length;
};

export const handleCopy = () => {
    const inputElement = document.getElementById('input') as HTMLInputElement;
    if (inputElement) {
        inputElement.select();
        try {
            document.execCommand('copy');
        } catch (err) {}
    }
};

interface MenuItem {
    label: string;
    key: string;
}

export const calculateItems = (
    wordCount: number,
    charCount: number,
    charCountWithoutSpaces: number,
): MenuItem[] => {
    const items: MenuItem[] = [
        {
            label: `Word count: ${wordCount}`,
            key: '1',
        },
        {
            label: `Char count w/o spaces: ${charCountWithoutSpaces}`,
            key: '2',
        },
        {
            label: `Char count w/ spaces: ${charCount}`,
            key: '3',
        },
    ];

    return items;
};
