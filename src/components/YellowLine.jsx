import React from 'react';

const YellowLine = ({ left }) => {
    return (
        <div
            style={{ left }}
            className="absolute h-[10px] w-[100px] bg-yellow-300 top-[97.5%]"
        ></div>
    );
};

export default YellowLine;
