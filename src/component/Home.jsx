import Dean from "./DeanPage";
import Swiper from "./Swiper";
import ViceDean from "./ViceDean";
import ImageSwiper from "./Swiper/ImageSwiper";
import AutoImageSwiper from "./Swiper/AutoImageSwiper";


function Home(){
    return(
        <>
            <Swiper/>
            <h1 class="pt-serif-bold text-2xl mt-[30px]" >Our Management and Teams</h1>
            <Dean/>
            <ViceDean/>
            
        </>
    )
}
export default Home