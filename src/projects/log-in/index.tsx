import React from 'react';
import { Button, Form, Input } from 'antd';

import { BackButton } from '../../components/back-button';
import { Title, Text } from '../../components/export';
import { FormContainer } from './styles';
import { signInUser } from './firebase';

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

export type FieldType = {
    email: string;
    password: string;
};

export const LogIn: React.FC = () => {
    const onFinish = (values: FieldType) => {
        signInUser(values);
        console.log('Success:', values);
        //  window.location.href = '/projects/log-in/success.html';
    };

    return (
        <>
            <BackButton />
            <Title level={3}>Log into Nothing</Title>
            <Text style={{ fontSize: '0.8em' }}>Easy way to register and login to nothing</Text>
            <FormContainer>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please enter your email!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </FormContainer>
        </>
    );
};
