import React, { useState, useEffect, useRef } from 'react';
import DropNewsDetail from '../../Page/HomePage/NewsDrop/DropNewsDetail';
import SubNewsCompo from '../../component/SubNewsCompo';

const images = [
      {
        tittle:"Green Energy Innovations: The Path to a Sustainable Future",
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200", 
        alt: "Green Energy",
        details:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quidem necessitatibus laborum reprehenderit alias fuga nihil aliquid optio hic veritatis nisi, incidunt atque impedit? Provident ullam nulla aspernatur explicabo esse!"  },

      { 
        tittle:"Cybersecurity in the Age of IoT",
        src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=60&w=600", 
        alt: 'Nature scene',
        details:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quidem necessitatibus laborum reprehenderit alias fuga nihil aliquid optio hic veritatis nisi, incidunt atque impedit? Provident ullam nulla aspernatur explicabo esse!" },
      { 
        tittle:"Happy work",
        src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=60&w=600",
        alt: 'Cityscape at night',
        details:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quidem necessitatibus laborum reprehenderit alias fuga nihil aliquid optio hic veritatis nisi, incidunt atque impedit? Provident ullam nulla aspernatur explicabo esse!" },
      { 
        tittle:"New Network",
        src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=60&w=600",
        alt: 'Abstract geometric design',
        details:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quidem necessitatibus laborum reprehenderit alias fuga nihil aliquid optio hic veritatis nisi, incidunt atque impedit? Provident ullam nulla aspernatur explicabo esse!" },
      { 
        tittle:"Techology 2026",
        src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=60&w=600",
        alt: 'Abstract geometric design',
        details:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quidem necessitatibus laborum reprehenderit alias fuga nihil aliquid optio hic veritatis nisi, incidunt atque impedit? Provident ullam nulla aspernatur explicabo esse!" },
    ];
    


export default function NewsSection(){
const firstImage = images[0];
const [drop,setDrop]=useState(false);
const [selectedNews, setSelectedNews] = useState(null);
const handleViewMore = (news) => {
    setSelectedNews(news);
    setDrop(true);
  };
    return(
      <>
        <header className="text-center mb-5 mt-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Our News</h1>
            <p className="text-slate-500 text-lg">Check out our newest article for the latest insights and updates.</p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  ">
            {images.map((item,index)=>(
              (index==0) ?
              <div onClick={()=>handleViewMore(item)} className=" lg:col-span-2 group relative overflow-hidden shadow-sm rounded-xl h-[500px] ms-6 duration-600 hover:shadow-xl/30">
                <img  src={item.src}
                     alt="Green Energy" 
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                    <span className="bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">Innovation</span>
                    <h2 className="text-white text-3xl font-bold mb-3">{item.tittle}</h2>
                    <p className="text-gray-200 text-base max-w-2xl">
                        Green energy innovations are paving the way to a sustainable future by reducing carbon emissions and promoting renewable resources. Discover the latest advancements driving this critical transition.
                    </p>
                </div>
              </div> :
              ""
            ))}
            

            <div className= "me-6 grid grid-cols-2 sm:grid-cols-2 gap-6">
              {images.map((item,index)=>(
                (index==0)? "":(index<5)?
                <SubNewsCompo
                onViewMore={() => handleViewMore(item)}
                {...item} 
                key={index}/>:""
              ))}
            </div>
        </div>
        <DropNewsDetail 
          drop={drop}
          setDrop={setDrop}
          selectedNews={selectedNews}
        />      
      </>
    )
}