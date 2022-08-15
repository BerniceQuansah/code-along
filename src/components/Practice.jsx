import React from 'react'
import boy from"../assets/image/boy.png";

function Practice() {
    return (
        <div className="flex justify-center items-center h-screen">
        <div className="w-96 shadow-md">
            <div className="h-60 overflow-hidden">
                <img src={boy} alt="" />
            </div>
            <div>
                <div className="p-5">
                    <div className="flex justify-between">
                <h3 className="font-bold capitalized">Yam with palava sauce</h3>
                <h6>GHC45</h6>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, rem.
                </p>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Practice;