import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import App from './App';

describe('temperatures', () => {
	it('should render labels', () => {
		const {getByText} = render(<App />);
		const labelCelsius = getByText('Celsius');
		const labelFarenheit = getByText('Farenheit');
		expect(labelCelsius).toBeInTheDocument();
		expect(labelFarenheit).toBeInTheDocument();
	});
	it('should increment inputCelsius with good values', () => {
		const {getByLabelText} = render(<App />);
		const inputCelsius = getByLabelText('Celsius');
		const inputFarenheit = getByLabelText('Farenheit');
		fireEvent.change(inputCelsius, {
			target: {value: parseInt(inputCelsius.value) + 1}
		});
		expect(inputCelsius.value).toBe('1');
		expect(inputFarenheit.value).toBe('33.8');
	});
	it('should increment inputFarenheit with good values', () => {
		const {getByLabelText} = render(<App />);
		const inputCelsius = getByLabelText('Celsius');
		const inputFarenheit = getByLabelText('Farenheit');
		fireEvent.change(inputFarenheit, {
			target: {value: parseInt(inputFarenheit.value) + 1}
		});
		expect(inputCelsius.value).toBe('0.56');
		expect(inputFarenheit.value).toBe('33');
	});
	it('should decrement inputCelsius with good values', () => {
		const {getByLabelText} = render(<App />);
		const inputCelsius = getByLabelText('Celsius');
		const inputFarenheit = getByLabelText('Farenheit');
		fireEvent.change(inputCelsius, {
			target: {value: parseInt(inputCelsius.value) - 1}
		});
		expect(inputCelsius.value).toBe('-1');
		expect(inputFarenheit.value).toBe('30.2');
	});
	it('should decrement inputFarenheit with good values', () => {
		const {getByLabelText} = render(<App />);
		const inputCelsius = getByLabelText('Celsius');
		const inputFarenheit = getByLabelText('Farenheit');
		fireEvent.change(inputFarenheit, {
			target: {value: parseInt(inputFarenheit.value) - 1}
		});
		expect(inputCelsius.value).toBe('-0.56');
		expect(inputFarenheit.value).toBe('31');
	});
	it('should reset input values', () => {
		const {getByText, getByLabelText} = render(<App />);
		const buttonReset = getByText('Reset');
		const inputCelsius = getByLabelText('Celsius');
		const inputFarenheit = getByLabelText('Farenheit');
		fireEvent.change(inputCelsius, {
			target: {value: parseInt(inputCelsius.value) + 1}
		});
		fireEvent.click(buttonReset);
		expect(inputCelsius.value).toBe('0');
		expect(inputFarenheit.value).toBe('32');
	});
});
