import React, { useState, useEffect, useRef } from 'react';
import image1 from '../../assets/image/swipperImg2_1.jpg';
import image2 from '../../assets/image/swipperImg2_2.jpg';
import image3 from '../../assets/image/swipperImg2_3.jpg';
import SubNewsCompo from '../../component/SubNewsCompo';

const images = [
      { 
        src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=60&w=600", 
        alt: 'Nature scene' },
      { src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=60&w=600",
        alt: 'Cityscape at night' },
      { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=60&w=600",
        alt: 'Abstract geometric design' },
      { src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=60&w=600",
        alt: 'Abstract geometric design' },
    ];
export default function NewsSection(){
    return(
      <>
        <header class="text-center mb-5 mt-6">
            <h1 class="text-4xl font-bold text-slate-900 mb-4">Our News</h1>
            <p class="text-slate-500 text-lg">Check out our newest article for the latest insights and updates.</p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            <div className=" lg:col-span-2 group relative overflow-hidden rounded-md h-[500px] ms-6">
                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" 
                     alt="Green Energy" 
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                    <span className="bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">Innovation</span>
                    <h2 className="text-white text-3xl font-bold mb-3">Green Energy Innovations: The Path to a Sustainable Future</h2>
                    <p className="text-gray-200 text-base max-w-2xl">
                        Green energy innovations are paving the way to a sustainable future by reducing carbon emissions and promoting renewable resources. Discover the latest advancements driving this critical transition.
                    </p>
                </div>
            </div>

            <div className= "me-6 grid grid-cols-2 sm:grid-cols-2 gap-6">
              {images.map((item,index)=>{
                return(
                  
                <SubNewsCompo {...item} key={index}/>
                )
              })}
            </div>
        </div>
      </>
    )
}