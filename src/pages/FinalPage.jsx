import React, { useEffect, useState } from 'react';
import YellowLine from '../components/YellowLine';
import Bus from '../assets/Bus.png';
import Buildings from '../assets/Buildings.png';
import School from '../assets/School.png';
import WindTurbines from '../assets/WindTurbines.png';
import People from "../assets/People.png";
import Booth from "../assets/Booth.png";
import GardeningPeople from "../assets/GardeningPeople.png";
import Button from '../components/Button';


const FinalPage = () => {
    const [leftPixels, setLeftPixels] = useState([]);
    const [text, setText] = useState("");

    const deleteJobs = async () => {
        try {
            const res = await fetch('http://localhost:8000/mcq');
            const mcqItems = await res.json();
    
            const deletePromises = mcqItems.map(async (item) => {
                const deleteRes = await fetch(`http://localhost:8000/mcq/${item.id}`, {
                    method: 'DELETE',
                });
    
                if (!deleteRes.ok) {
                    const errorText = await deleteRes.text();
                    throw new Error(`Failed to delete item with ID ${item.id}: ${errorText}`);
                }
            });
    
            await Promise.all(deletePromises);
        } catch (error) {
            console.error('Error deleting all jobs:', error);
        }
    }
                
    useEffect(() => {
        const fetchResponse = async () => {
            try {
                const res = await fetch("/cohere");
                const data = await res.json();
                deleteJobs();
                setText(data);
            }
            
            catch (error) {
                console.log("error, fetching data", error)
            }
            console.log(text)
        }
        fetchResponse();
    }, [])

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
            <div className="flex flex-col items-center justify-center ml-[30vw] h-[70vh] w-[70vw] gap-4">
                <h1 className="text-white font-chakra text-[35px] w-[50vw] text-center"> YOUR COMMUNITY IS A: </h1>
                <h1 className="bg-gradient-to-r from-[#FFBE0B] to-[#F42B03] bg-clip-text text-transparent font-poppins font-bold text-[50px]"> {text[0]} </h1> 
                <p className="text-white text-center text-[25px] w-[50vw] font-poppins bold"> Feedback:  </p>
                <p className="text-white text-center text-[20px] w-[50vw] font-poppins"> {text[1]} </p>
                <Button path="/" message="Play Again"/>
            </div>
            <div className='z-0 bg-gray-400 w-[100vw] h-[5%] absolute top-[95%]'></div>
            {leftPixels.map((x, index) => (
                <YellowLine key={index} left={x} />
            ))}
            <img className="absolute top-[70vh] left-[50vw] z-10" src={Bus}></img>         
            <img className="absolute w-[300px] h-[400px] top-[53vh] left-[0vw]" src={Buildings}></img>
            <img className="absolute w-[500px] h-[400px] top-[50vh] left-[250px] z-10" src={School}></img>
            <img className="absolute w-[500px] h-[400px] top-[50vh] left-[500px] z-0" src={WindTurbines}></img>
            <img className="absolute w-[200px] h-[200px] top-[calc(95vh-200px)] left-[200px] z-30" src={People}></img>
            <img className="absolute w-[250px] h-[200px] top-[calc(95vh-200px)] left-[700px] z-30" src={GardeningPeople}></img>
            <img className="absolute w-[250px] h-[200px] top-[calc(95vh-200px)] left-[400px] z-30" src={Booth}></img>
        </>
)
}

export default FinalPage