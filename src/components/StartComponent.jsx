import Button from './Button'
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StartComponent = () => {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
        <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] text-center">
                <p className="text-center text-white mx-auto w-[90%] font-chakra text-[100px]" data-aos="fade-in" data-aos-duration="1000"> Community Creator </p>
                <p className="w-[60%] text-white font-poppins text-[30px]" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
                    Create your own community, or replicate what your community looks like! Then, we will give you a rating and ways you can improve your community!
                </p>
                <Button path="/transport" message="Start"/>
                <p className="w-[60%] text-white font-poppins text-[30px] " data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1000">
                    <u> Instructions:</u> Read the question and below the question, select a level by clicking the circle. There are criterias for each one.
                </p>
                <p className="w-[60%] text-white font-poppins text-[30px]" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1000">
                    <u>Note:</u> Images are not to represent the choices selected by user.
                </p>
        </div>
  )
}

export default StartComponent