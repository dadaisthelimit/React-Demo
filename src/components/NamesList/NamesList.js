import { useState } from "react";
const NamesList = () => {
  const [names, setNames] = useState(["John", "Paul", "George", "Ringo"]);

  const parseNames = (event) => {
    const names = event.target.value.split("\n");
    setNames(names);
  };

  const randomlyPickWinner = () => {
	const randomPick = Math.floor(Math.random() * 10);
	for (let i = 0; i < randomPick; i++) {
		const randomIndex = Math.floor(Math.random() * names.length);
		document.getElementById(names[randomIndex]).style.backgroundColor = "yellow";
		setInterval(() => {
			document.getElementById(names[randomIndex]).style.backgroundColor = "white";
		}, 2000);
	}
  };

  return (
    <div>
      .
      <textarea
        onChange={(event) => {
          parseNames(event);
        }}
        rows="10"
      ></textarea>
      <ul>
        {names.map((name) => (
          <li key={name} id={name}>
            {name}
          </li>
        ))}
      </ul>
      <button onClick={() => { randomlyPickWinner() }}>Pick A Winner</button>
    </div>
  );
};

export default NamesList;
