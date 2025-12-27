import { createBrowserRouter } from "react-router-dom";
import HomePage from "../component/HomePage";
import Dean from "../Section/DeanViceDeanSection/DeanPage";
import Home from "../Page/HomePage/Home";
import AboutUsPage from "../Page/AboutUsPage/AboutUsPage";
import ProgramPage from "../Page/ProgramPage/ProgramPage";
import AllDetailMem from "../Page/PastAndPrensentPage/AllDetailMem";
import MainPastPresent from "../Section/PastPresentSection/MainPastPresent";
import InternationalPage from "../Page/AboutUsPage/InternationalPage";
import ProjectTeam from "../Page/AboutUsPage/ProjectTeam";
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
        path: "/",
        element: <Home />,
      },
      {
        path: "aboutUs",
        element: <AboutUsPage />,
      },
      {
        path: "aboutUs/Dean",
        element: <Dean />,
      },
      {
        path: "program",
        element: <ProgramPage/>,
      },
      {
        path: "our-management/all-detail-member",
        element:<AllDetailMem/>,
      },
      {
        path: "project/national",
        element:<MainPastPresent/>,
      },
      {
        path: "project/international",
        element:<InternationalPage/>,
      },
      {
        path: "project/national/ece",
        element:<ProjectTeam />,
      },
      
    ],
  },
]);
export default appRoute;
