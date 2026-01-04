import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Dean from "../../Section/DeanViceDeanSection/DeanPage";
import InterNation from "../../Section/PastPresentSection/InterNation"
import ViceDean from "../../Section/DeanViceDeanSection/ViceDean";
import DropDetail from "../PastAndPrensentPage/DropDetailMember/DropDetail";
import TeamPage from "../PastAndPrensentPage/TeamPage";
import MainPastPresent from "../../Section/PastPresentSection/MainPastPresent";
import NewsSection from "../../Section/NewsSection/NewsSection";


function Home(){
    const { pathname } = useLocation();
 useEffect(() => {
    window.scrollTo({top:0,behavior:"smooth"});
  }, [pathname]);

    return(
        <>
            <NewsSection/>
            {/* <MainPastPresent/> */}
            <InterNation/>
            <h1 className="pt-serif-bold text-2xl mt-[30px]" >Our Management and Teams </h1>
            <Dean/>
            <ViceDean/>
            <TeamPage 
            />
        </>
    )
}
export default Home