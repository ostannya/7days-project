import { BackButton } from '../../components/back-button';
import { Title, Text } from '../../components/export';

export const Success = () => (
    <>
        <BackButton href="/projects/log-in/index.html" />
        <Title level={3}>Success!</Title>
        <Text style={{ fontSize: '0.8em' }}>You're successfully registered/logged in</Text>
    </>
);
