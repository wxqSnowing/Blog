import React, { Component } from 'react'

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUSer: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleUserClick = this.handleUserClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            newUSer: e.target.value
        })
    }

    handleClick() {
        if (this.state.newUSer && this.state.newUSer.length > 0) {
            this.props.onAddUser(this.state.newUSer);
        }
    }

    handleUserClick(userId) {
        this.props.onSetCurrentUser(userId);
    }

    render() {
        return (<div>
            <ul>
                {this.props.users.map((user, index) => {
                    return (<li key={index} onClick={this.handleUserClick.bind(this, user.id)}>{user.name}</li>);
                })}
            </ul>
            <input onChange={this.handleChange} value={this.state.newUSer}></input>
            <button onClick={this.handleClick}>新增</button>
        </div>)
    }
}

export default UserList;