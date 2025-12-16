import React, { useEffect, useRef } from "react";
import Dean from "../../Section/DeanViceDeanSection/DeanPage";
import Swiper from "../../Section/SwiperSection/Swiper";
import ViceDean from "../../Section/DeanViceDeanSection/ViceDean";
import DropDetail from "../PastAndPrensentPage/DropDetailMember/DropDetail";
import TeamPage from "../PastAndPrensentPage/TeamPage";
import MainPastPresent from "../../Section/PastPresentSection/MainPastPresent";

function Home(){
    return(
        <>
            <Swiper/>
            <MainPastPresent/>
            <h1 className="pt-serif-bold text-2xl mt-[30px]" >Our Management and Teams </h1>
            <Dean/>
            <ViceDean/>
            <TeamPage 
            />
        </>
    )
}
export default Home