import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import Register from './component/Register';
import Header from './component/Header';
import LogIn from './component/logIn';
import AuthProviders from './component/AuthProviders';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/LogIn",
        element: <LogIn/>
      },
      {
        path: "/Register",
        element: <Register/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* //* _Step- 4 : import AuthProviders */}
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
