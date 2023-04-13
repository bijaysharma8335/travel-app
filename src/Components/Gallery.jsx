import React from "react";

const Gallery = () => {
    return (
        <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
            <h2 className="text-center text-gray-700 p-4">Gallery</h2>
            <div className="grid sm:grid-cols-5 gap-4">
                <div className="sm:col-span-3 col-span-2 row-span-2 className='w-full h-full object-cover'">
                    <img  className='w-full h-full object-cover'src="https://media-cdn.tripadvisor.com/media/photo-s/28/b9/2c/26/bandara-phuket-beach.jpg" alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://alayaresorts.com/wp-content/uploads/2022/09/slider-3.jpg" alt="" />
                </div>
                <div>
                    <img  className='w-full h-full object-cover'src="https://www.kumarresort.in/images/website/3.jpg" alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://fariyas.com/wp-content/uploads/2022/06/Banner-2-1920X1280-1-790x500.jpg" alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://www.dellaresorts.com/images/6-luxury-triva2.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
