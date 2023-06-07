import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import About from './views/About/About';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about/:name', element: <About /> },
  { path: '/contact', element: <h1>Contact</h1> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
