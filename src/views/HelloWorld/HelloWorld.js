
function HelloWorld(props) {
	let firstElement;
	let secondElement;
	if (props.children[0].type.name === 'Card') {
		firstElement = props.children[0];
		secondElement = props.children[1];
	}else {
		firstElement = props.children[1];
		secondElement = props.children[0];
	}
	return (
		<div>
			{firstElement}
			<h1>Hello World</h1>
			{secondElement}
		</div>
	)
}

export default HelloWorld;