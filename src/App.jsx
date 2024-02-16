import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Rootwrapper from './pages/Rootwrapper';
import Home from './pages/Home/Home';
import SearchedPage from './pages/SearchedPage/SearchedPage';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import {loader as loaderProduct} from './pages/ProductInfo/ProductInfo'
import {loader as loaderSearched} from './pages/SearchedPage/SearchedPage'
import Auth from './pages/Auth/Auth';
import ProductList from './pages/ProductList/ProductList';
function App() {
 

  const router = createBrowserRouter([
      {
        path : '/',
        element : <Rootwrapper/>,
        children : [
          {
            index : true,
            element : <Home/>
          },
          {
            path : "/searched-keyword/:word",
            element : <SearchedPage/>,
            loader : loaderSearched
          },
          {
            path : "/product/category/:cat/:ind",
            element : <ProductInfo/>,
            loader : loaderProduct
          },
          {
            path : '/auth',
            element : <Auth/>,
          },
          {
            path : '/category/:word',
            element : <ProductList/>,
          }
        ]
      }
  ])

  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
