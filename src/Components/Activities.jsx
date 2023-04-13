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
                    src="https://www.travelandleisure.com/thmb/w-cX0OrE27oidyx7Dx0Zl9LNd7E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/jade-mountain-02-CARIBRESORTSWB22-11a9b7cfaaf54edbaa85089467f887c6.jpg"
                    alt=""
                />
            </div>
            <div className="relative p-4 ">
                <h3 className="absolute z-10 top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
                    Cottage
                </h3>
                <img
                    className="w-full h-full object-cover relative border-4 border-white shadow-lg"
                    src="https://images.news18.com/ibnlive/uploads/2021/09/1600x1600px_b-163298971816x9.jpg"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Activities;
