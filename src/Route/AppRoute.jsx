<<<<<<< HEAD
import { createBrowserRouter } from "react-router-dom";
import Manu from "../Section/ManuSection/Manu";
import Swiper from "../Section/SwiperSection/Swiper";
import HomePage from "../component/HomePage";
import Dean from "../Section/DeanViceDeanSection/DeanPage";
import Home from "../Page/HomePage/Home";
import ProgramPage from "../Page/ProgramPage/ProgramPage";
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "aboutUs/Dean",
        element: <Dean />,
      },
      {
        path: "program",
        element: <ProgramPage/>,
      },
    ],
  },
]);
export default appRoute;
=======
import {createBrowserRouter} from 'react-router-dom';
import HomePage from '../component/HomePage'
import Dean from '../Section/DeanViceDeanSection/DeanPage';
import Home from '../Page/HomePage/Home';
import ProgramPage from '../Page/ProgramPage/ProgramPage';

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
                element:<ProgramPage/>
            }
        ]
    },

    
])
export default appRoute ;
>>>>>>> fb2718945496f60f5c4337b91bd2353cefc32107
