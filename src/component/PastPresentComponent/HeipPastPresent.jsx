import image from '../../assets/image/swipperImg2_1.jpg'
function HeipPastPresent (){
    return(
        <>
        <div className="shadow-md rounded-sm ">
            <div className=" flex justify-center ">
                <div className="seip w-96 bg-[#3396d3d7] h-[50px] align-middle rounded-lg">
                    <center><h1 className="mt-[15px] pt-serif-bold">HEIP</h1></center>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-2" >
                <div className="col " >
                    <div className="MainDetail w-[98%] ms-[3px]">
                     <div className="h-[150px] radius-10px overflow-hidden">
                        <img src={image} alt="" className=" radius-10px object-cover"/>
                    </div>
                    <div className=" mainDetail  w-[98%]">
                        <span className="detail">
                            <center><h1 className="pt-serif-bold">ECE</h1></center>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque explicabo, dolores laborum vitae delectus officiis maxime quod tempore pariatur ut quasi est ipsa maiores placeat cum animi saepe. Dolor, obcaecati.
                        </span>
                    </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="MainDetail w-[98%] ms-[3px]">
                     <div className=" h-[150px] radius-10px overflow-hidden">
                        <img src={image} alt="" className="  object-cover"/>
                    </div>
                    <div className=" mainDetail">
                        <span className="detail">
                            <center><h1 className="pt-serif-bold">CEHETLI</h1></center>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque explicabo, dolores laborum vitae delectus officiis maxime quod tempore pariatur ut quasi est ipsa maiores placeat cum animi saepe. Dolor, obcaecati.
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default HeipPastPresent