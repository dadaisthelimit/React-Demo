import './CounterCard.css'
import { useState } from 'react';
const CounterCard = () => {

	const [count, setCount] = useState(0);

	const increment = () => {
		console.log('Clicked increment')
		setCount(count + 1);
	}

	const decrement = () => {
		console.log('Clicked decrement')
		setCount(count - 1);
	}

	return (
		<div className="counter-card">
			<button className="counter-card__button" onClick={() => {decrement()}}>-</button>
			<h1>{count}</h1>
			<button className="counter-card__button" onClick={() => {increment()}}>+</button>
		</div>
	);
}

export default CounterCard;