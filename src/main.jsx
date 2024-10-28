import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import data from './Components/JsonFile/Json.json'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Homepage from './Components/Homepage/Homepage.jsx';
import Foods from './Components/Foods/Foods.jsx';
import Breakfast from './Components/Breakfast/Breakfast.jsx';
import Ditaileditem from './Components/DisplayDetailedItem/Ditaileditem.jsx'


const jsondata=()=>{
 return data;
}

const router = createBrowserRouter ([
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
        loader:jsondata,
        element:<Breakfast></Breakfast>
      },
      {
        path:'/detail',
        element:<Ditaileditem></Ditaileditem>
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
