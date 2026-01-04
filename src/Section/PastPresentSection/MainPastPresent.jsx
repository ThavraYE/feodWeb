import HeipPastPresent from "../../component/PastPresentComponent/HeipPastPresent"
import { projectsData } from "../../Utils/Utils"
import SeipPastPresent from '../../component/PastPresentComponent/SeipPastPresent'
import GeipPastPresent from '../../component/PastPresentComponent/GeipPastPresent'
import { useState } from "react"
function MainPastPresent({}){
    
    return(
        <>
            <center><h1 className="pt-serif-bold text-2xl mt-[50px] mb-[50px]">Past & Present Projects/Trainings</h1></center>
            <div className="grid grid-cols-3 gap-1 w-full  ">
                {projectsData.map((items, idx) => (
                        <HeipPastPresent
                        key={idx}
                        {...items}
                        />
                    )
                )}
                    
                    {/* <SeipPastPresent/>
                    <GeipPastPresent/> */}
                
            </div>
        </>

    )
}
export default MainPastPresent