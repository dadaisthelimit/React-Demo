import "./Card.css";
import HeaderAlerts from "../HeaderAlerts/HeaderAlerts";
import { useState } from "react";

function Card(props) {
  const [message, setMessage] = useState("This is my message");
  const [showMessage, setShowMessage] = useState(true);

  const changeMessage = () => {
    setMessage("This is my new message");
  };

  return (
    <div className="card">
      <h1>{props.title}</h1>
      {showMessage && <p>{message}</p>}
      <button
        onClick={() => {
          changeMessage();
        }}
      >
        Click me!
      </button>
      <button
        onClick={() => {
          setShowMessage(!showMessage);
        }}
      >
        Show/Hide Message
      </button>
    </div>
  );
}

export default Card;
