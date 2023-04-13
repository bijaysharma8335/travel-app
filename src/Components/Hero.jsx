import React from "react";

const Hero = () => {
    return (
        <div className="w-full h-[90vh]">
            <img
                src="https://media.cntraveler.com/photos/633e253416847d13bf9bca30/master/w_3000,h_1686,c_limit/The%20Laguna_Areal-Shot-.jpg"
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
