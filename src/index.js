import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SelfIntroduction from './components/SelfIntroduction/SelfIntroduction';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contacts from './components/Contacts/Contacts';
import goldenGame from './components/goldenGame/goldenGame';

const router = createBrowserRouter([
  {
    //root route
    path: "/",
    element: <Root />,
    children: [
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "resume",
        element: <Resume />
      },
      {
        path: "contacts",
        element: <Contacts />
      }

    ]
  } 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

