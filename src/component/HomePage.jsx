
import Manu from "./Manu"
import { Outlet } from "react-router-dom"
import Dean from "./DeanPage"
import FooterWeb from "./FooterWeb"
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

