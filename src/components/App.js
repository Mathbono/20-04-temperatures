import React, {Component} from 'react';

import Input from './Input';
import './App.css';

const INITIAL_STATE = {
	celsius: 0,
	farenheit: 32
};

class Temperatures extends Component {
	state = INITIAL_STATE;

	translateTemp = ([type, val]) => {
		val = parseFloat(val);
		if (type === 'celsius') {
			this.setState({
				celsius: val.toFixed(2),
				farenheit: ((val * 9) / 5 + 32).toFixed(2)
			});
		} else if (type === 'farenheit') {
			this.setState({
				celsius: (((val - 32) * 5) / 9).toFixed(2),
				farenheit: val.toFixed(2)
			});
		}
	};
	resetTemp = e => {
		e.preventDefault();
		this.setState(INITIAL_STATE);
	};
	render() {
		return (
			<div className="App">
				<h1>Temperatures Converter</h1>
				<form>
					<div>
						<label htmlFor="celsius">Celsius</label>
						<Input
							type="celsius"
							value={parseFloat(this.state.celsius)}
							translate={this.translateTemp}
						/>
					</div>
					<div>
						<label htmlFor="farenheit">Farenheit</label>
						<Input
							type="farenheit"
							value={parseFloat(this.state.farenheit)}
							translate={this.translateTemp}
						/>
					</div>
					<br />
					<button onClick={this.resetTemp}>Reset</button>
				</form>
			</div>
		);
	}
}

export default Temperatures;
