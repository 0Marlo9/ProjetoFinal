import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import App from './App';
import Menu from "./routes/Menu";
import Postar from "./routes/Postar";
import Postes from "./routes/Postes";
import Cadastro from "./routes/Cadastro";
import Login from "./routes/Login";


const router = createBrowserRouter([
  {
    
    element: <App/>,
    children: [


      {
        path: "/",
        element: <Login />
      },

      
      {
        path: "/btn0",
        element: <Cadastro /> 
      },
      {
        path: "/btn",
        element: <Menu /> 
      },
      {
        path: "/btn1",
        element: <Postes /> 
      },
      
      {
        path: "/btn3",
        element: <Postar />
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
