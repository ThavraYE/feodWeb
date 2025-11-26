import {createBrowserRouter} from 'react-router-dom';
import Manu from '../Section/ManuSection/Manu';
import Swiper from '../Section/SwiperSection/Swiper';
import HomePage from '../component/HomePage'
import Dean from '../Section/DeanViceDeanSection/DeanPage';
import Home from '../Page/HomePage/Home';
import ProgramSection from '../Section/program_section';
const appRoute = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path:"home",
                element: <Home/>
            },
            {
                path:"aboutUs/Dean",
                element: <Dean/>
            },
            {
                path:"program",
                element:<ProgramSection/>
            }
        ]
    },

    
])
export default appRoute ;