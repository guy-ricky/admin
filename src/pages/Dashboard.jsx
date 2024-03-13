import React from 'react'
import { MdOutlineAnalytics } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className='relative mt-14 md:mt-0 px-4'>
        <h1>Dashboard</h1>
        <div className='inline-block bg-[rgba(132,139,200,0.18)] py-[0.5rem] px-[1.6rem] rounded-2xl'>
            <input type="date" name="date" className='bg-transparent text-[#363636]'/>
        </div>
        <div className='grid grid-cols-3 gap-[1.6rem] py-4'>
            <div className="bg-white p-3 rounded-md mt-2 shadow-xl hover:border-none">
            <MdOutlineAnalytics className='rounded-2xl p-1 text-[2rem] bg-[#7380ec] text-white'/>
            <div className="flex items-center justify-between">
                <div className="left">
                    <h3 className='my-[1rem]'>Total Sales</h3>
                    <h1>Kshs 25,020</h1>
                </div>
                <div className="relative w-[92px] h-[92px] rounded-2xl">
                    <svg className='w-[7rem] h-[7rem]'>
                        <circle cx='38' cy='38' r='36' className='fill-none stroke-[#7380ec] stroke-[10px]'></circle>
                    </svg>
                    <div className="number">
                        <p>71%</p>
                    </div>
                </div>
            </div>
            <small className="text-muted"> Last 24 Hours</small>
            </div>
            <div className="income">
            <FaChartLine />
            <div className="middle">
                <div className="left">
                    <h3>Total Income</h3>
                    <h1>Kshs 25,020</h1>
                </div>
                <div className="progress">
                    <svg>
                        <circle cx='38' cy='38' r='36'></circle>
                    </svg>
                    <div className="number">
                        <p>71%</p>
                    </div>
                </div>
            </div>
            <small className="text-muted"> Last 24 Hours</small>
            </div>
            <div className="sales">
            <MdOutlineAnalytics />
            <div className="middle">
                <div className="left">
                    <h3>Total Sales</h3>
                    <h1>Kshs 25,020</h1>
                </div>
                <div className="progress">
                    <svg>
                        <circle cx='38' cy='38' r='36'></circle>
                    </svg>
                    <div className="number">
                        <p>71%</p>
                    </div>
                </div>
            </div>
            <small className="text-muted"> Last 24 Hours</small>
            </div>


        </div>
    </div>
  )
}

export default Dashboard