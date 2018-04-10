import React from 'react'

import { Loading } from './../Loading'
import './style.scss'

export const ShowCard = (props) => {

    const { show } = props
    if(!props) {
        return <Loading />
    } else {
        return (
                <div className="col-sm-3 card-col">
                    <div className=" card">
                        <img className="card-img-top" src={show.image} alt="show image" />
                        <div className="card-body">
                            <p className="card-text"><span>{show.name}</span></p>
                        </div>
                    </div>
                </div>
        )
    }

}