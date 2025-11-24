
import Manu from "./Manu"
import { Outlet } from "react-router-dom"
import Dean from "./DeanPage"
function HomePage(){
   return(
     <>
        <Manu/>
        <Outlet/>
    </>
    )
}
export default HomePage

