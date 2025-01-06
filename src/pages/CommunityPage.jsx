import React, { useEffect, useState } from 'react';
import YellowLine from '../components/YellowLine';
import { useLoaderData } from 'react-router-dom';
import Question from '../components/Question';
import Bus from '../assets/Bus.png';
import Buildings from '../assets/Buildings.png';
import School from '../assets/School.png';
import WindTurbines from '../assets/WindTurbines.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const CommunityPage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const [leftPixels, setLeftPixels] = useState([]);
    const question = useLoaderData();

    useEffect(() => {
        const viewportWidth = window.innerWidth;
        const pixels = [];
        for (let i = 0; i < viewportWidth; i += 150) {
            pixels.push(`${i}px`);
        }
        setLeftPixels(pixels);
    }, []);

    return (
        <>
            <Question question={question} path="/additional" val="4"/>
            <div className='z-0 bg-gray-400 w-[100vw] h-[5%] absolute top-[95%]'></div>
            {leftPixels.map((x, index) => (
                <YellowLine key={index} left={x} />
            ))}
            <img className="absolute top-[70vh] left-[50vw] z-10" src={Bus}></img>         
            <img className="absolute w-[300px] h-[400px] top-[53vh] left-[0vw]" src={Buildings}></img>
            <img className="absolute w-[500px] h-[400px] top-[50vh] left-[250px] z-10" src={School}></img>
            <img data-aos="fade-in" data-aos-duration="2000" className="absolute w-[500px] h-[400px] top-[50vh] left-[500px] z-0" src={WindTurbines}></img>
        </>
)
}

export default CommunityPage