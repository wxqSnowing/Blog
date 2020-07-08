import React from 'react'

function UserDefault(props){

    return (<div>展示详细信息:
        {props.currentUser ?
        <div><div>{props.currentUser.name}</div><div>{props.currentUser.age}</div><div>{props.currentUser.phone}</div><div>{props.currentUser.address}</div></div>
        :''}
    </div>)
}
export default UserDefault;