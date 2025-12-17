export default function SubNewsCompo({src,alt}){
    return(
        <>
            <div className="group relative overflow-hidden rounded-md h-[238px]">
                    <img src={src} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex flex-col justify-end p-5">
                        <h3 className="text-white font-bold text-lg leading-tight">Cybersecurity in the Age of IoT</h3>
                    </div>
            </div>
        </>
    )
}