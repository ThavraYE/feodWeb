import { Link } from "react-router-dom";
export default function ProgramMockup({src,tittle,details,linkTo}){
    return(
        <>
            <Link to={linkTo}>
            <div className="col rounded-xl overflow-hidden group shadow-xl hover:shadow-2xl hover:border" >
                <div className="MainDetail relative">
                    <div className="h-90 overflow-hidden ">
                        <img src={src} alt="" className="object-fit  transition-transform duration-500 group-hover:scale-105 "/>
                    </div>
                    <div className=" mainDetail absolute inset-0 from-black/80 bg-linear-to-t to-transparent flex flex-col justify-end p-5">
                        <span className="detail">
                            <h1 className="text-white font-bold text-lg leading-tight">{tittle}</h1>
                
                        </span>
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}