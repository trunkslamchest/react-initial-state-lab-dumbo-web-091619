import React from 'react';


export default class Bomb extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			secondsLeft: this.props.initialCount
		}
	}

	decrement_count = () => {
		const decrement_count = this.state.secondsLeft - 1
		this.state({
			secondsLeft: decrement_count
		})
	}

	render(){

		const countdown = this.state.secondsLeft !== 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'

		return(
				<div>
					{ countdown }
				</div>
		)
	}
}
