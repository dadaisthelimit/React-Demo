import './Dice.css';
const Dice = (props) => {

	const handleClick = () => {
		const childData = 'This is from the Dice Component';
		props.onDiceEvent(childData)
	}

	return (
		<div className="dice">
			<div className="dice-border">
				<h1>{props.value}</h1>
				<button className="dice-button" onClick={() => {props.change(Math.ceil(Math.random() * 6))}}>Roll from Dice</button>
				<button onClick={() => handleClick()}>Send Data to Parent</button>
			</div>
		</div>
	);
}

export default Dice;