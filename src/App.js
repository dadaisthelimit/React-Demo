import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
function showMessage(){
  alert('Hello World')
}


const App = () => {
    return (
      <div className="App">
        <Navbar />
        <Content />
        <Sidebar />
      </div>
    );
  }

export default App;
