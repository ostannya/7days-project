import { ArrowLeftOutlined } from '@ant-design/icons';
import { StyledLink } from './styles';

export const BackButton = () => {
    return (
        <StyledLink to="/">
            <ArrowLeftOutlined />
        </StyledLink>
    );
};
