import React, { useEffect, useState } from 'react';
import YellowLine from '../components/YellowLine';
import { useLoaderData } from 'react-router-dom';
import Question from '../components/Question';
import Bus from '../assets/Bus.png'

const HousingPage = () => {
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
            <Question question={question} path="/energy" val="2"/>
            <div className='z-0 bg-gray-400 w-[100vw] h-[5%] absolute top-[95%]'></div>
            {leftPixels.map((x, index) => (
                <YellowLine key={index} left={x} />
            ))}
            <img className="absolute top-[70vh] left-[50vw]" src={Bus}>
            </img>
        </>
    );
};

export default HousingPage;
