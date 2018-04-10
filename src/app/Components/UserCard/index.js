import React from 'react'
import { Loading } from './../Loading'

export const UserCard = (props) => {
    const { user } = props
    if(!user.gender) {
        return <Loading />
    } else {
        return (
            <div className="card col-3">
                <img className="card-img-top" src={user.picture} alt="userImage" />
                <div className="card-body">
                    <h5 className="card-text">{user.firstName}</h5>
                    <p className="card-text">{user.lastName}</p>
                    <p className="card-text">{user.email}</p>
                </div>
            </div> 
        )
    }
}