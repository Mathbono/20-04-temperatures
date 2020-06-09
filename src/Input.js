import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
	handleChangeTemp = e => {
		this.props.translate([this.props.type, e.target.value]);
	}
	render() {
		return (
			<input
				placeholder={this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1)}
				type="number"
				value={this.props.value}
				onChange={this.handleChangeTemp}
			/>
		);
	}
}

Input.propTypes = {
	type: PropTypes.oneOf([
		'celsius',
		'farenheit'
	]).isRequired,
	value: PropTypes.number.isRequired,
	translate: PropTypes.func.isRequired
 }

export default Input;
