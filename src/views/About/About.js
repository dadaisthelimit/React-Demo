import { useParams } from "react-router-dom";

const About = () => {
	const route = useParams();
	return (
		<div>
			<h1>About</h1>
			<h1>{route.name}</h1>
			<button><a href="/">Go to Home</a></button>
		</div>
	)
}

export default About;