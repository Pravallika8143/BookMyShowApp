import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TheatreSignup from './assets/features/theatres/theatresignup.jsx';
import ProducerSignup from './assets/features/movies/producersignup.jsx';
import Signup from './assets/features/customer/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
        {
        path:"/userSignup",
        element:<Signup></Signup>
        }
    ]
  },
  {
    path: "/theatreSignup",
    element:<TheatreSignup></TheatreSignup>,
  },
  {
    path: "/producerSignup",
    element:<ProducerSignup></ProducerSignup>,
  },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
