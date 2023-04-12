import React from "react";

const Hero = () => {
    return (
        <div className="w-full h-[90vh]">
            <img
                src="https://t3.ftcdn.net/jpg/03/12/16/82/360_F_312168215_vpUdulZTJkyPqiRyIHX9cUocBngfkXqV.jpg"
                alt=""
                className="w-full h-full object-cover"
            />
            <div className="max-w-[1140px] m-auto">
                <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col  text-white p-4">
                    <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
                    <h2 className="text-4xl py-4 italic">With Weekaway</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestias
                        iste natus doloremque explicabo vitae ex neque. Cumque exercitationem quam
                        omnis a! Corporis maiores est repellat accusamus ipsam tempora quibusdam.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
