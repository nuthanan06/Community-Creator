import React from 'react'
import Button from './Button'
import {useState} from 'react'

const Question = ({question, path, val}) => {
  const [level, setLevel] = useState('Level 1');

  const addLevel = async (newLevel) => {
    const res = await fetch('/api/mcq',  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newLevel),
    });
    return;
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(level)
    const newLevel = {
        val,
        level
    };
    addLevel(newLevel)
    console.log(newLevel)
    return;


  }
  return (
    <>
        <div className="flex items-center h-[100vh] w-[100vw] gap-4">
            <div className="flex flex-col items-center ml-[20vw] w-[40vw]">
                <div className="text-center text-[30px] text-white font-poppins">{question.question}</div>
                <select name="levels" className="mt-6 w-[300px] text-center h-[50px] font-poppins text-black z-50" value={level} onChange={(e) => setLevel(e.target.value)}>
                    <option value="level1"> Level 1 </option>
                    <option value="level2"> Level 2 </option>
                    <option value="level3"> Level 3 </option>
                    <option value="level4"> Level 4 </option>
                    <option value="level5"> Level 5 </option>
                </select>
                <Button path={path} message="Next" onClick={submitForm}/>
            </div>
            <div className="w-[35vw] font-poppins text-white border-l-2 pl-4 ml-4 border-white">
                <p className='mb-[25px]'> <span className="font-bold"> Level 1: </span> {question.level1} </p>
                <p className='mb-[25px]'> <span className="font-bold"> Level 2: </span> {question.level2} </p>
                <p className='mb-[25px]'> <span className="font-bold"> Level 3: </span> {question.level3} </p>
                <p className='mb-[25px]'> <span className="font-bold"> Level 4: </span> {question.level4} </p>
                <p className='mb-[25px]'> <span className="font-bold"> Level 5: </span> {question.level5} </p>

            </div>
        </div>
    </>
  )
}

export default Question