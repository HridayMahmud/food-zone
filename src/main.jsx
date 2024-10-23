import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import data from '../src/Components/JsonFile/Json.json'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Homepage from './Components/Homepage/Homepage.jsx';
import Foods from './Components/Foods/Foods.jsx';
import Breakfast from './Components/Breakfast/Breakfast.jsx';



const router = createBrowserRouter([
  {
    path:'/',
    element:<Homepage></Homepage>,
    children:[
      {
        path:'/foods',
        
        element:<Foods></Foods>
      },
      {
        path:'/breakfast',
        loader:()=>fetch(data),
        element:<Breakfast></Breakfast>
      }
    ]
    
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}>

   </RouterProvider>
  </StrictMode>,
)
