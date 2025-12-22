export default function SubNewsCompo({tittle,src,alt,details,onViewMore}){
    return(
        <>
            <div onClick={onViewMore} className="group relative overflow-hidden rounded-xl shadow-xl h-[238px]">
                    <img src={src} onClick={onViewMore} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                    <div onClick={onViewMore} className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex flex-col justify-end p-5">
                        <h3 onClick={onViewMore} className="text-white font-bold text-lg leading-tight">{tittle}</h3>
                        <p className="text-gray-200 text-base max-w-2xl">
                        
                        </p>
                    </div>
            </div>
        </>
    )
}