import image from '../../assets/image/swipperImg2_1.jpg'
import { Link } from 'react-router-dom'
function HeipPastPresent ({mainProject,subProject,projectDetail,projectLink}){
    


    return(
        <>
        <div className="shadow-md rounded-sm ">
            <div className=" flex justify-center ">
                <div className="seip w-96 bg-[#1C4D8D] h-[50px] align-middle rounded-lg">
                    <center><h1 className="mt-[15px]  text-white">{mainProject}</h1></center>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-2" >
                <Link to={projectLink[0]}>
                <div className="col "  >
                    <div className="MainDetail w-[98%] ms-[3px]">
                     <div className="h-[150px] radius-10px overflow-hidden">
                        <img src={image} alt="" className=" radius-10px object-cover"/>
                    </div>
                    <div className=" mainDetail  w-[98%]">
                        <span className="detail">
                            <center><h1 className="pt-serif-bold">{subProject[0]}</h1></center>
                            {projectDetail[0]}  
                        </span>
                    </div>
                    </div>
                </div>
                </Link>
                <Link to={projectLink[1]}>
                <div className="col ">
                    <div className="MainDetail w-[98%] ms-[3px]">
                     <div className=" h-[150px] radius-10px overflow-hidden">
                        <img src={image} alt="" className="  object-cover"/>
                    </div>
                    <div className=" mainDetail">
                        <span className="detail">
                            <center><h1 className="pt-serif-bold">{subProject[1]}</h1></center>
                            {projectDetail[1]}
                        </span>
                    </div>
                    </div>
                </div>
                </Link>
            </div>
        </div>
        </>
    )
}
export default HeipPastPresent