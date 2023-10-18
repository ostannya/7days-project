import { BackButton } from '../../components/back-button';
import { Input, Typography } from 'antd';
import { InputContainer, ButtonContainer, StyledButton as Button } from './styles';

const { TextArea } = Input;
const { Title, Text } = Typography;

export const ToAnyCase = () => {
    return (
        <>
            <BackButton />
            <Title level={3}>toAnyCase()</Title>
            <Text style={{ fontSize: '0.8em' }}>Enter your text below</Text>
            <br />
            <InputContainer>
                <TextArea rows={6} placeholder="maxLength is 200" maxLength={200} />
            </InputContainer>
            <br />
            <Text strong>Word count: 0</Text>
            <br />
            <ButtonContainer>
                <Button>lower case</Button>
                <Button>UPPER CASE</Button>
                <Button>Sentence case</Button>
                <Button>Title case</Button>
                <br />
                <Button>s̶t̶r̶i̶k̶e̶ ̶t̶h̶r̶o̶u̶g̶h̶</Button>
                <Button>UTF8</Button>
                <Button>URL</Button>
                <Button>Binary code</Button>
            </ButtonContainer>
        </>
    );
};
