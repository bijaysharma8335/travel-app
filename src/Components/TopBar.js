import React from "react";
import { AiFillPhone, AiOutlineClockCircle, AOutlineCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";
const TopBar = () => {
    return (
        <div className="flex justify-between items-center px-4 py-2">
            <div className="flex items-center">
                <BsChatSquareDots size={30} className="text-[var(--primary-darK)] mr-2" />
                <h1 className="text-xl font-bold text-gray-700">WEEKAWAY</h1>
            </div>
            <div className="flex">
                <div className="hidden md:flex items-center px-6">
                    <AiOutlineClockCircle size={20} className="mr-2 text-[var(--primary-darK)]" />
                    <p className="text-small text-gray-700">9AM-5AM</p>
                </div>

                <div className="hidden md:flex  items-center px-6">
                    <AiFillPhone size={20} className="mr-2 text-[var(--primary-darK)]" />
                    <p className="text-small text-gray-700">1-888-817-1234</p>
                </div>

                <button>Get a Free Quote</button>
            </div>
        </div>
    );
};

export default TopBar;
