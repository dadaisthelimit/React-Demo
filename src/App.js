import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import  secureLocalStorage  from  "react-secure-storage";

const App = () => {
  const route = useParams();
  const [task, setTask] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [cookies, setCookie] = useCookies(['task']);
  // const getTask = async () => {
  //   const randomNumber = Math.floor(Math.random() * 100);
  //   await axios
  //     .get(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`)
  //     .then((res) => {
  //       setTask(res.data);
  //       return res.data;
  //     });
  // }

  useEffect(() => {
    // getTask();
  }, '')

  const setTaskAndCookie = (value) => {
    setTask(value);
    setCookie('task',value);
    // secureLocalStorage.setItem('tasksample', value)
    localStorage.setItem('task',JSON.stringify({value}))
    if (JSON.parse(localStorage.getItem('task')).value === 'ADMIN') {
      setIsAdmin(true);
    } else if (JSON.parse(localStorage.getItem('task')).value === 'USER') {
      setIsUser(true);
    }
  }


  return (
    <div className="App container p-4">
      <div>
        {
          isAdmin ? <h1>This should be seen by the Admin</h1> : null
        }
        {
          isUser ? <h1>This should be seen by the User</h1> : null
        }
        <h1>weird div</h1>
        <h1>{cookies.task}</h1>
        <h1>{route.name}</h1>
        <img src="https://picsum.photos/200/300" alt="random"></img>
        <h1>{task}</h1>
        <input type="text" placeholder="type here" onChange={(event) => setTaskAndCookie(event.target.value) }></input>
      </div>
    </div>
  );
};

export default App;
