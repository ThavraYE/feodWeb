import {createBrowserRouter} from 'react-router-dom';
import Manu from '../component/Manu';
import Swiper from '../component/Swiper';
import HomePage from '../component/HomePage'
import Dean from '../component/DeanPage';
import Home from '../component/Home';
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
            }
        ]
    },

    
])
export default appRoute ;