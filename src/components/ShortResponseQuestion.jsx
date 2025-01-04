import React from 'react'
import Button from './Button'
import {useState} from 'react'

const Question = ({}) => {
  const [level, setLevel] = useState('');
  const val = "5";

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
        <div className="flex items-center h-[80vh] w-[80vw] gap-4">
            <div className="flex flex-col items-center ml-[30vw] w-[70vw]">
                <div className="text-center text-[30px] text-white font-poppins"> Do you have any additional comments you would like to add about your community? </div>
                <form>
              <textarea
                id="description"
                name="description"
                className="border rounded w-[30vw] mt-[20px] py-2 px-3"
                rows="4"
                placeholder="Add your additional information here."
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              ></textarea>

                </form> 
                <Button path='/energy' message="Next" onClick={submitForm}/>
            </div>
        </div>
    </>
  )
}

export default Question