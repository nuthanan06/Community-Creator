import React from 'react'
import {Outlet} from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <div className="z-0 bg-[#0487E2] w-[100vw] h-[100vh]">
            <div className='z-0 bg-[#138510] w-[100vw] h-[5%] absolute top-[95%]'></div>
            <div className="z-0 bg-[#FDEA3E] w-[20vw] h-[20vw] absolute top-[-5vw] left-[-5vw] rounded-[200px]">
                <div className="z-0 bg-[#FDEA3E] w-[7vw] h-[2.5vw] relative left-[22vw] top-[7vw] rounded-[40px]"></div>
                <div className="z-0 bg-[#FDEA3E] w-[7vw] h-[2.5vw] relative left-[22vw] top-[12vw] rounded-[40px] rotate-[15deg]"></div>
                <div className="z-0 bg-[#FDEA3E] w-[7vw] h-[2.5vw] relative left-[17vw] top-[17vw] rounded-[40px] rotate-[45deg]"></div>
                <div className="z-0 bg-[#FDEA3E] w-[7vw] h-[2.5vw] relative left-[10vw] top-[17vw] rounded-[40px] rotate-[75deg]"></div>
                <div className="z-0 bg-[#FDEA3E] w-[7vw] h-[2.5vw] relative left-[5vw] top-[15vw] rounded-[40px] rotate-[90deg]"></div>
            </div>
            <Outlet className="z-10"/>
        </div>
    </>
  )
}

export default MainLayout