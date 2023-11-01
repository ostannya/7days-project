import { message } from 'antd';

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
            message.info('Copied!');
        } catch (err) {}
    }
};

export interface MenuItem {
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

export const countCharCountWithoutSpaces = (inputValue: string) =>
    inputValue.replace(/\s+/g, '').length;

export const toSentenceCase = (inputValue: string) => {
    return inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
};

export const toTitleCase = (inputValue: string) => {
    return inputValue
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export const encodeURL = (inputValue: string) => {
    return encodeURIComponent(inputValue);
};

export const toBinary = (inputValue: string) => {
    let binaryString = '';
    for (let i = 0; i < inputValue.length; i++) {
        let charCode = inputValue.charCodeAt(i).toString(2);
        while (charCode.length < 8) {
            charCode = '0' + charCode;
        }
        binaryString += charCode + ' ';
    }
    return binaryString.trim();
};
