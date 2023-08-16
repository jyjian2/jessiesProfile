import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contacts from './components/Contacts/Contacts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "contacts",
    element: <Contacts />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

