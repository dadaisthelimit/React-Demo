import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const App = () => {
  const route = useParams();
  const [task, setTask] = useState({});
  const getTask = async () => {
    const randomNumber = Math.floor(Math.random() * 100);
    await axios
      .get(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`)
      .then((res) => {
        setTask(res.data);
        return res.data;
      });
  }

  useEffect(() => {
    getTask();
  }, {})


  return (
    <div className="App container p-4">
      <div>
        <h1>weird div</h1>
        <h1>{route.name}</h1>
        <img src="https://picsum.photos/200/300" alt="random"></img>
        <h1>{task.title}</h1>
      </div>
    </div>
  );
};

export default App;
