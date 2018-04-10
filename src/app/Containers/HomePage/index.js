import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchData  } from './actions'

import { Error } from './../../Components/Error'
import { UserCard } from './../../Components/UserCard'
import { Stateless } from './../../Components/Stateless/Stateless'

import ShowsPage from './../ShowsPage'

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchUser()
    }
   
    displayUser = () => {
        if(this.props.home) {
            return <UserCard user={this.props.home}/>
        } else {
            return <Error />
        }
    }
   
    render () {
        return (
            <div className="container">
                {this.displayUser()}  
                <button onClick={this.props.fetchUser} className="btn btn-primary">Click Me</button>
                <Stateless name={'Vuk'}/>
                <ShowsPage />              
            </div>
        )
    }
}

const mapStateToProps = state => {
	return {
		home: state.home.user
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchUser: () => dispatch(fetchData()),		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)