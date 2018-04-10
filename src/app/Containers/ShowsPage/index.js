import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchData } from './actions'

import { ShowCard } from './../../Components/ShowCard'
import './style.scss'

class ShowsPage extends Component {

    componentDidMount() {
        this.props.getShows()
    }

    displayShows = () => {
        if(this.props.shows) {
            return this.props.shows.map(show => {
                return <ShowCard key={show.id} show={show}/>
            })
        }
    }


    render () {
        return (
            <div className="container">
                <h1 className="text-center show-title">ShowsPage</h1>
                <div className="row">
                    {this.displayShows()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
	return {
		shows: state.shows.shows
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getShows: () => dispatch(fetchData()),		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowsPage)