import {createBrowserRouter} from 'react-router-dom';
import Manu from '../component/Manu';
import Swiper from '../component/Swiper';
import HomePage from '../component/HomePage'
import Dean from '../component/DeanPage';
import Home from '../component/Home';
import ProgramSection from '../component/program_section';
const appRoute = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>,
        children:[
            {
                index: true,
                element: <Swiper/>
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