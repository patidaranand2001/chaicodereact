import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contacts/Contacts.jsx'
import Github from './Components/Github/Github.jsx'
import Home from './Components/Home/Home.jsx'
import './index.css'
import Layout from './Layout.jsx'
// const key=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contacts",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const key=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contacts' element={<Contact/>}/>
      <Route path='github' element={<Github/>}/>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={key}/>
  </React.StrictMode>,
)
