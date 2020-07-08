import React, { Component } from 'react'
function LiItem(props) {
    const onClickItem = (e) => {
        e.preventDefault();
        props.changeValue(props.name);
    }
    return (<li onClick={onClickItem.bind(this)}>{props.name}</li>)
}

class FatherChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [{ name: 'wxq' }, { name: 'abc' }, { name: 'qwe' }],
            value: 'test'
        }
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(value) {
        this.setState({ value })
    }
    render() {
        const { lists, value } = this.state;
        return (<div>
            <ul>
                {lists.map((item, index) => (<LiItem key={index} {...item} changeValue={this.changeValue}></LiItem>))}
            </ul>
            <label>{`${value}`}</label>
        </div>)
    }
}

export default FatherChild;