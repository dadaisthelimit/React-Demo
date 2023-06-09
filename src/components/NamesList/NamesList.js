import { useState } from "react";
const NamesList = () => {
  const [names, setNames] = useState(["John", "Paul", "George", "Ringo"]);
  const [isWinner, setIsWinner] = useState(false);

  const parseNames = (event) => {
    const names = event.target.value.split("\n");
    setNames(names);
  };

  const randomlyPickWinner = () => {
    if (names.length !== Array.from(new Set(names)).length) {
      alert("There's a repeated Value!")
      return
    }
    
    const randomWinner = Math.floor(Math.random() * names.length);
    let theWinner = new Promise((resolve) => {
      setTimeout(() => {
        resolve(document.getElementById(names[randomWinner]));
      }, 1000 * names.length);
    });
    if (!isWinner) {
      for (let i = 0; i < names.length; i++) {
        setIsWinner(true);
        setTimeout(() => {
          if (i === randomWinner) {
            document.getElementById(names[randomWinner]).style.backgroundColor =
              "purple";
          } else {
            document.getElementById(names[i]).style.backgroundColor = "yellow";
          }
        }, i * 1000);
      }
      theWinner.then((res) => {
        setIsWinner(false);
        alert(`The Winner Is ${res.innerHTML}`);
        for (let i = 0; i < names.length; i++) {
          document.getElementById(names[i]).style.backgroundColor = "white";
        }
      });
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
      <button
        onClick={() => {
          randomlyPickWinner();
        }}
      >
        Pick A Winner
      </button>
    </div>
  );
};

export default NamesList;
