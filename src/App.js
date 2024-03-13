import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Sidebar from './components/Sidebar'
import Customers from './pages/Customers'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import './App.css'
import { useStateContext } from './contexts/ContextProvider';
import Products from './pages/Products'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Addproduct from './pages/Addproduct'
import CategoryList from './pages/CategoryList'
import Category from './pages/Category'



const App = () => {
  const {activeMenu} = useStateContext();
  return (
    <div>
    <BrowserRouter>
    <div className='flex relative dark:bg-main-dark-bg'>
      {activeMenu ? (
        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
          <Sidebar/>
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
        <Sidebar />
      </div>
      )}
      <div className= {activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '}>
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
            <Routes>
             <Route path='/customers' element={<Customers/>}/>
             <Route path='/dashboard' element={<Dashboard/>}/>
             <Route path='/products' element={<Products/>}/>
             <Route path='/orders' element={<Orders/>}/>
             <Route path='/' element={<Login/>}/>
             <Route path='/addproduct' element={<Addproduct/>}/>
             <Route path='/categorylist' element={<CategoryList/>}/>
             <Route path='/category' element={<Category/>}/>
           </Routes>
            </div>
      </div>
    </div>
    </BrowserRouter>
    </div>
  )
}

export default App