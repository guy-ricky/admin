import React from 'react'
import { BiSolidShoppingBags } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import { MdDashboardCustomize } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaProductHunt } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useStateContext } from '../contexts/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const Sidebar = () => {
    const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

    const handleCloseSideBar = () => {
      if (activeMenu !== undefined && screenSize <= 900) {
        setActiveMenu(false);
      }
    };
  
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-bold tracking-tight dark:text-white text-slate-900">
              <BiSolidShoppingBags className='w-[2rem] h-[2rem] text-blue-600'/> <span>Blessed Home <br/> Accessories</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <IoClose />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-3">
          <div className='bg-white flex flex-col h-[86vh] relative top-[2rem]'>
            <NavLink to='/dashboard' onClick={handleCloseSideBar} style ={({ isActive}) => ({backgroundColor: isActive ? currentColor : '', })}className={({ isActive}) => (isActive ? activeLink : normalLink)}> <MdDashboardCustomize /> <h3>Dashboard </h3></NavLink>
            <NavLink to='/customers' onClick={handleCloseSideBar} style ={({ isActive}) => ({backgroundColor: isActive ? currentColor : '', })}className={({ isActive}) => (isActive ? activeLink : normalLink)}> <IoPeople /> <h3>Customers</h3></NavLink>
            <NavLink to='/orders'  onClick={handleCloseSideBar} style ={({ isActive}) => ({backgroundColor: isActive ? currentColor : '', })}className={({ isActive}) => (isActive ? activeLink : normalLink)}> <CiMoneyCheck1 /> <h3>Orders</h3></NavLink>
            <NavLink to='/products'  onClick={handleCloseSideBar} style ={({ isActive}) => ({backgroundColor: isActive ? currentColor : '', })}className={({ isActive}) => (isActive ? activeLink : normalLink)}> <FaProductHunt /> <h3>Products</h3></NavLink>
            <NavLink to='/categorylist'  onClick={handleCloseSideBar} style ={({ isActive}) => ({backgroundColor: isActive ? currentColor : '', })}className={({ isActive}) => (isActive ? activeLink : normalLink)}> <GrTransaction /> <h3>Categories</h3></NavLink>
            <NavLink to='/analytics' onClick={handleCloseSideBar} style ={({ isActive}) => ({backgroundColor: isActive ? currentColor : '', })}className={({ isActive}) => (isActive ? activeLink : normalLink)}> <IoAnalyticsOutline /> <h3>Analytics</h3></NavLink>
            <NavLink to='/addproduct'  onClick={handleCloseSideBar} style ={({ isActive}) => ({backgroundColor: isActive ? currentColor : '', })}className={({ isActive}) => (isActive ? activeLink : normalLink)}> <FaPlus /> <h3>Add Product</h3></NavLink>
            <NavLink to='/logout'  onClick={handleCloseSideBar} style ={({ isActive}) => ({backgroundColor: isActive ? currentColor : '', })}className={({ isActive}) => (isActive ? activeLink : normalLink)}> <CiLogout /> <h3>Logout</h3></NavLink>
        </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar