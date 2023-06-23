import React, { Component } from 'react';
import { Form, Avatar, Button, Input, Row, Col, message, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'
import {redirect, useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Loading from "../../../../components/shared-components/Loading";
import {APP_PREFIX_PATH} from "../../../../configs/AppConfig";

export const EditProfileFetch = () => {
    const { data } = useSelector((state) => state.customers);
    const location = useLocation()
    const navigate = useNavigate()
    const id = location.pathname.split('/').at(-1)
    const newData = data.filter(el => String(el.id) === id)
    return <EditProfile navigate={navigate} newData={newData} />
}

export class EditProfile extends Component {

    avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'

    state= {
        avatarUrl: '/img/avatars/thumb-6.jpg',
        name: this.props.newData[0].name,
        email: this.props.newData[0].email,
        userName: this.props.newData[0].username,
        phoneNumber: this.props.newData[0].phone,
        website: this.props.newData[0].website,
        status: false
    }

    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.status === true) {
            this.props.navigate(`${APP_PREFIX_PATH}/customers/list`)
        }
    }

    render() {
        const onFinish = values => {
            const key = 'updatable';
            message.loading({ content: 'Updating...', key });
            setTimeout(() => {
                this.setState({
                    name: values.name,
                    email: values.email,
                    userName: values.userName,
                    phoneNumber: values.phoneNumber,
                    website: values.website,
                    status: true
                })
                message.success({ content: 'Done!', key, duration: 2 });
            }, 1500);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        const onUploadAavater = info => {
            const key = 'updatable';
            if (info.file.status === 'uploading') {
                message.loading({ content: 'Uploading...', key, duration: 1000 });
                return;
            }
            if (info.file.status === 'done') {
                this.getBase64(info.file.originFileObj, imageUrl =>
                    this.setState({
                        avatarUrl: imageUrl,
                    }),
                );
                message.success({ content: 'Uploaded!', key,  duration: 1.5 });
            }
        };

        const onRemoveAvater = () => {
            this.setState({
                avatarUrl: ''
            })
        }

        const { name, email, userName, phoneNumber, website, avatarUrl } = this.state;

        return (
            <>
                <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
                    <Avatar size={90} src={avatarUrl} icon={<UserOutlined />}/>
                    <div className="ml-3 mt-md-0 mt-3">
                        <Upload onChange={onUploadAavater} showUploadList={false} action={this.avatarEndpoint}>
                            <Button type="primary">Change Avatar</Button>
                        </Upload>
                        <Button className="ml-2" onClick={onRemoveAvater}>Remove</Button>
                    </div>
                </Flex>
                <div className="mt-4">
                    <Form
                        name="basicInformation"
                        layout="vertical"
                        initialValues={
                            {
                                'name': name,
                                'email': email,
                                'username': userName,
                                'phoneNumber': phoneNumber,
                                'website': website,
                            }
                        }
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={16}>
                                <Row gutter={ROW_GUTTER}>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Name"
                                            name="name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your name!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Username"
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your username!'
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            rules={[{
                                                required: true,
                                                type: 'email',
                                                message: 'Please enter a valid email!'
                                            }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Phone Number"
                                            name="phoneNumber"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Website"
                                            name="website"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Button type="primary" htmlType="submit">
                                    Save Change
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </>
        )
    }
}

export default EditProfileFetch
