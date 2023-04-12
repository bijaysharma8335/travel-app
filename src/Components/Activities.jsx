import React from "react";

const Activities = () => {
    return (
        <div className="mx-w-[1140px] m-auto w-full md:flex mt-[-75px]">
            <div className="relative p-4 ">
                <h3 className="absolute z-10 top-[50%] left-[50%]   translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
                    Resorts
                </h3>
                <img
                    className="w-full h-full object-cover relative border-4 border-white shadow-lg"
                    src="https://wallpapercave.com/wp/wp3782996.jpg"
                    alt=""
                />
            </div>
            <div className="relative p-4 ">
                <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
                    Villa
                </h3>
                <img
                    className="w-full h-full object-cover relative border-4 border-white shadow-lg"
                    src="https://images.alphacoders.com/269/269623.jpg"
                    alt=""
                />
            </div>
            <div className="relative p-4 ">
                <h3 className="absolute z-10 top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
                    Cottage
                </h3>
                <img
                    className="w-full h-full object-cover relative border-4 border-white shadow-lg"
                    src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Activities;
