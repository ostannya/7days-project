import { Title } from './export';
import { Paragraph } from './styles';

const Header = () => {
    return (
        <>
            <Title level={3}>Some cool headline in size h4</Title>
            <Paragraph>
                Here comes some inspirational text about the projects I've created in one week each.
                Maybe even a link to the source code. It goes for two or three lines.
            </Paragraph>
        </>
    );
};

export default Header;
