import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
            <h2 className="text-center text-gray-700">Send us a message</h2>
            <p className="text-center text-gray-700 py-2">We're standing by!</p>
            <div className="grid md:grid-cols-2">
                <img
                    className="w-full md:h-full object-cover p-2 max-h-200px]"
                    src="https://www.marriottsouthasiaresorts.com/resourcefiles/mainimages/sheraton-grand-chennai-resort-and-spa-top.jpg?version=9162022083956"
                    alt=""
                />
                <form>
                    <div className="grid grid-cols-2">
                        <input className="border m-2 p-2" type="text" placeholder="First" />
                        <input className="border m-2 p-2" type="text" placeholder="Last" />
                        <input className="border m-2 p-2" type="email" placeholder="Email" />
                        <input className="border m-2 p-2" type="tel" placeholder="Phone" />
                        <input
                            type="text"
                            className="border col-span-2 p-2 m-2"
                            placeholder="Address"
                        />
                        <textarea
                            cols="30"
                            rows="10"
                            className="border col-span-2 p-2 m-2"
                        ></textarea>
                        <button className="col-span-2 m-2 ">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
