import Dice from '../Dice/Dice';
import './CounterCard.css'
import { useState } from 'react';
const CounterCard = () => {

	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(Math.ceil(Math.random() * 6));
	}

	const decrement = () => {
		setCount(Math.ceil(Math.random() * 6));
	}

	const displayMessage = (message) => {
		console.log(message);
	}

	return (
		<div>
			<div className="counter-card">
				<button className="counter-card__button" onClick={() => {decrement()}}>Roll</button>
				<h4>{count}</h4>
				<button className="counter-card__button" onClick={() => {increment()}}>Roll</button>
			</div>
			<Dice value={count} change={setCount} onDiceEvent={(diceData) => {displayMessage(diceData)}} />
		</div>


	);
}

export default CounterCard;