
import Manu from "../Section/ManuSection/Manu"
import { Outlet } from "react-router-dom"
import Dean from "../Section/DeanViceDeanSection/DeanPage"
import FooterWeb from "../Section/FooterSection/FooterWeb"
function HomePage(){
   return(
     <>
        <Manu/>
        <Outlet/>
        <FooterWeb/>  
    </>
    )
}
export default HomePage

