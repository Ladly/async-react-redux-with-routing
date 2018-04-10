import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Statefull.scss'

import { changeTitle, changeItBack } from './actions'
import { Stateless } from './../../Components/Stateless/Stateless'

class Statefull extends Component {

   pickTitle = () => {
    return !this.props.statefull.titleChange ? 
    <h2 onClick={this.props.changeTitle}>statefull component - click me</h2> : 
    <h3 onClick={this.props.changeItBack} >this works too- click me</h3>   
    }

    render() {
        return(
            <div>
                {this.pickTitle()}
                <Stateless name={this.props.statefull.nameToPass}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
	return {
		statefull: state.statefullReducer
	}
}

const mapDispatchToProps = dispatch => {
	return {
		changeTitle: () => dispatch(changeTitle()),	
		changeItBack: () => dispatch(changeItBack()),	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Statefull)