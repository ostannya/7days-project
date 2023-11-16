import { ArrowLeftOutlined } from '@ant-design/icons';
import { StyledLink } from './styles';

export const BackButton = ({ href = '/' }: { href?: string }) => {
    return (
        <StyledLink to={href}>
            <ArrowLeftOutlined />
        </StyledLink>
    );
};
