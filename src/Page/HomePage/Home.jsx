import Dean from "../../Section/DeanViceDeanSection/DeanPage";
import Swiper from "../../Section/SwiperSection/Swiper";
import ViceDean from "../../Section/DeanViceDeanSection/ViceDean";
import ImageSwiper from "../../component/Swiper/ImageSwiper";
import AutoImageSwiper from "../../component/Swiper/AutoImageSwiper";
import MainPastPresent from "../../Section/PastPresentSection/MainPastPresent";


function Home(){
    return(
        <>
            <Swiper/>
            <MainPastPresent/>
            <h1 class="pt-serif-bold text-2xl mt-[30px]" >Our Management and Teams </h1>
            <Dean/>
            <ViceDean/>
            
        </>
    )
}
export default Home