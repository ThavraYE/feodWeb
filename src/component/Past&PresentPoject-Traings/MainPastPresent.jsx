import HeipPastPresent from "./HeipPastPresent"
import SeipPastPresent from './SeipPastPresent'
import GeipPastPresent from './GeipPastPresent'
function MainPastPresent(){
    return(
        <>
            <center><h1 class="pt-serif-bold text-2xl mt-[50px] mb-[50px]">past & present Projects/Trainings</h1></center>
            <div class="grid grid-cols-3 gap-1 w-full  ">
                    <HeipPastPresent/>
                    <SeipPastPresent/>
                    <GeipPastPresent/>
                
            </div>
        </>

    )
}
export default MainPastPresent