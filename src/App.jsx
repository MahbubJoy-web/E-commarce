import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ErrorPage from './component/ErrorPage'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'

function App() {
  const [count, setCount] = useState(0)
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='/Shop' element={<Shop/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Checkout' element={<Checkout/>} />
        <Route path='//Shop/details' element={<ProductDetails/>}/>
        <Route path='*' element={<ErrorPage/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  )
}

export default App 
// -=-----------------11/05/2025--------vd o part 15 > 8:10 min finished-----//