import React, { Component } from 'react'
import UseList from './UseList'
import UserDefault from './UserDefault'

class UserListConteiner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            currentUserId: null
        };
        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleSetCurrentUser = this.handleSetCurrentUser.bind(this);
    }

    componentDidMount() {
        this.setState({
            users: [{ id: 1,name: 'wxq', age: 3, phone: '6666', address: 'bj' },
            {id:2, name: 'fjf', age: 6, phone: '777', address: 'bj' },
            ]
        })
    }

    handleAddUser() {
        let newUser = { id:3, name: '666', age: 1, phone: '6666', address: 'bj' };
        this.setState((preState) => ({ users: preState.users.concat([newUser]) }))
    }

    handleSetCurrentUser(userId) {
        this.setState({ currentUserId: userId });
    }

    render() {
        const filterUsers = this.state.users.filter((user) =>  user.id === this.state.currentUserId );
        const currentUser = filterUsers.length > 0 ? filterUsers[0] : null;
        return (<div>
            <UseList users={this.state.users}
                currentUserId={this.state.currentUserId}
                onAddUser={this.handleAddUser}
                onSetCurrentUser={this.handleSetCurrentUser}
            ></UseList>
            <UserDefault currentUser={currentUser}></UserDefault>
        </div>)
    }
}

export default UserListConteiner;