import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Contact from './Contact.jsx'
import Header from './Components/Header.jsx'
import Error from "./Components/Error.jsx"
import CountryDetail from './Components/CountryDetail.jsx'


const router =  createBrowserRouter([
{

  path:"/",
  element: <App/> ,
  errorElement: <Error/>
  
  
},
{
  path:"/About",
  element: <Contact/>
},
{
  path:"/Country",
  element: <CountryDetail/>
}



])

createRoot(document.getElementById('root')).render(
  <>
 <Header/>
 <RouterProvider router={router}/>
</>
)
