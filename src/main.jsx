import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Components/Root/Root';

// Dummy pages 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <h1>Home Page</h1> },
      { path: "/timeline", element: <h1>Timeline Page</h1> },
      { path: "/stats", element: <h1>Stats Page</h1> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)