import Dean from "../../Section/DeanViceDeanSection/DeanPage"
import ViceDean from "../../Section/DeanViceDeanSection/ViceDean"
import FoEMV from "../../Section/FOE_M_V/FoEMV"
import NewsSection from "../../Section/NewsSection/NewsSection"
import Swiper from "../../Section/SwiperSection/Swiper"
export default function AboutUsPage(){
    return(
        <>
            <div className="container">
                <h1 className="text-3xl font-bold  mt-2.5 mb-2.5">Faculty of Education</h1>
                <Swiper/>
                <FoEMV/>
                <h1 className="text-3xl font-bold mt-2.5 mb-2.5">Our Management and Teams</h1>
                <Dean/>
                <ViceDean/>
            </div>
        </>
    )
}