import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Dummy pages 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/timeline",
        element: <h1>Timeline Page</h1>
      },
      {
        path: "/stats",
        element: <h1>Stats Page</h1>
      },
      {
        path: "/friend/:id",
        element: <FriendDetails />
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={2000} />
  </StrictMode>,
)