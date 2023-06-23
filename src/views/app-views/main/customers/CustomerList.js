import React, {Component} from 'react'
import {Card, Table, Tag, Tooltip, message, Button} from 'antd';
import {EyeOutlined, DeleteOutlined} from '@ant-design/icons';
import dayjs from 'dayjs';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import {Link, NavLink} from "react-router-dom";

// import userData from "assets/data/user-list.data.json";

export class CustomersList extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        users: this.props.data,
        userProfileVisible: false,
        selectedUser: null,
        isCustomersLoading: this.props.isCustomersLoading
    }

    deleteUser = userId => {
        this.setState({
            users: this.state.users.filter(item => item.id !== userId),
        })
        message.success({content: `Deleted user ${userId}`, duration: 2});
    }

    showUserProfile = userInfo => {
        this.setState({
            userProfileVisible: true,
            selectedUser: userInfo
        });
    };

    closeUserProfile = () => {
        this.setState({
            userProfileVisible: false,
            selectedUser: null
        });
    }


    render() {
        const {users, isCustomersLoading} = this.state;

        const tableColumns = [
            {
                title: 'User',
                dataIndex: 'name',
                render: (_, users) => (
                    <div className="d-flex">
                        <Link to={'' + users.id}>
                            <AvatarStatus src={users.img} name={users.name} subTitle={users.email}/>
                        </Link>
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.name.toLowerCase();
                        b = b.name.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: 'Username',
                dataIndex: 'Username',
                render: (_, users) => (
                    <div className="d-flex">
                        <p>{users.username}</p>
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.username.toLowerCase();
                        b = b.username.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: 'Phone',
                dataIndex: 'phone',
                render: (_, users) => (
                    <div className="d-flex">
                        <p>{users.phone}</p>
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.phone.toLowerCase();
                        b = b.phone.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: 'WebSite',
                dataIndex: 'website',
                render: (_, users) => (
                    <div className="d-flex">
                        <p>{users.website}</p>
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.website.toLowerCase();
                        b = b.website.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: '',
                dataIndex: 'actions',
                render: (_, elm) => (
                    <div className="text-right d-flex justify-content-end">
                        <Tooltip title="View">
                            <Button type="primary" className="mr-2" icon={<EyeOutlined/>} onClick={() => {
                                this.showUserProfile(elm)
                            }} size="small"/>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button danger icon={<DeleteOutlined/>} onClick={() => {
                                this.deleteUser(elm.id)
                            }} size="small"/>
                        </Tooltip>
                    </div>
                )
            }
        ];
        return (
            <Card bodyStyle={{'padding': '0px'}}>
                <div className="table-responsive">
                    {<Table columns={tableColumns} dataSource={users} rowKey='id'/>}
                </div>
                {/*<UserView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/>*/}
            </Card>
        )
    }
}

export default CustomersList

