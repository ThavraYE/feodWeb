import { useState } from "react";
import image1 from "../assets/image/swipperImg2_1.jpg";
import image2 from "../assets/image/swipperImg2_2.jpg";
import image3 from "../assets/image/swipperImg2_3.jpg";
import AutoImageSwiper from "./Swiper/AutoImageSwiper";
import ImageSwiper from "./Swiper/ImageSwiper";

function Swiper() {
  const [state, setSate] = useState(false);
  return (
    <>
      <div className="flex gap-4 inset-shadow-sm inset-shadow-indigo-500/50 w-full">
        {/* <div className="col-5 mt-[150px]">
        <div id="swiper-container" className="w-full ms-[15px] max-w-2xl bg-white shadow-2xl rounded-xl overflow-hidden relative mt-3">    
            <div id="swiper-track" className="swiper-track">
                <div className="swiper-slide h-96">
                    <img src={image1}
                        alt="Nature scene" 
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>
                <div className="swiper-slide h-96">
                    <img src={image2}
                        alt="Cityscape at night" 
                        className="w-full h-full object-cover rounded-xl"
                        
                    />
                </div>
                <div className="swiper-slide h-96">
                    <img src={image3}
                        alt="Abstract geometric design" 
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>
            </div>
            <button id="prev-btn" className="d-none absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button id="next-btn" className="d-none absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            <div id="dots-container" className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            </div>
        </div>
        </div> */}
        <AutoImageSwiper />
        <div className="w-1/2  mt-[150px] flex flex-col items-start">
          <h1 className=" text-2xl font-bold"> Faculty of Education</h1>
          <div className=" flex flex-col items-start">
            <p
              className={`${
                (state) ? "max-h-[2000px] opacity-100 " : "max-h-31 opacity-70"
              } overflow-hidden text-justify duration-500 transition-all ease-in-out`}
            >
              {" "}
              The Faculty of Education (FoEd) stands as a beacon of academic
              excellence with its three pivotal departments: Educational
              Studies, Higher Education Management and Development, and Lifelong
              Learning. At the heart of FoEd lies our Center for Educational
              Research and Training, a hub for cutting-edge educational
              practices and innovations. Our programs span a comprehensive
              range, from Certificates to Bachelor's (Cohort 5 as of 2024),
              Master's (Cohort 20 as of 2024), and Ph.D. degrees in Education
              (Cohort 5 as of 2024). Since 2018, the Ministry of Education,
              Youth, and Sport has entrusted FoEd with the critical role of
              professional development for principals and teachers nationwide
              through
              <span>
                our renowned TUP and LUP programs for early childhood education,
                primary education and secondary education sub-sectors. Our
                contributions to significant initiatives like the Secondary
                Education Improvement Project (SEIP 2018-2022, 100 target lower
                secondary schools) and the ongoing General Education Improvement
                Project (GEIP 2022-2026, 1700 Schools from ECE, PE and SE)
                underscore our commitment to educational excellence. Moreover,
                FoEd offers research consultancy services and professional
                development short courses at its Center for Educational Research
                and Training. These services extend to development agencies,
                non-governmental organizations, public and private higher
                education institutions, and government ministries, ensuring our
                impact is both wide-reaching and profound. Our unwavering
                commitment is to foster an environment of continuous learning
                and growth, equipping educators to thrive in a dynamic
                educational landscape. Join us at the Faculty of Education,
                where we shape the future of education together.{" "}
              </span>
            </p>
            <button
              onClick={() => setSate(!state)}
              className="relative mt-2 mb-2 overflow-hidden w-32 h-10 hover:text-white text-black font-medium text-lg border-2 border-black rounded-lg cursor-pointer transition-colors duration-500 group"
            >
              {state ? "View More" : "View Less"}
              <span className="absolute top-full left-full w-48 h-48 bg-black rounded-full transition-all duration-700 group-active:bg-purple-900 group-hover:-top-7 group-hover:-left-7 -z-10"></span>
            </button>
            {/* <button
              onClick={() => setSate(!state)}
              className=" rounded-[5px] p-2 border mt-2"
            >
              {state ? "View More " : " View Less"}
            </button> */}
          </div>
          <h1 className=" text-2xl font-bold"> FoE’s Educational Philosophy</h1>
          <div className=" flex flex-col items-start">
            <p
              className={`overflow-hidden text-justify duration-500 transition-all ease-in-out`}
            >
               The Educational Philosophy of the Faculty of Education focuses on
              developing human capital through best practices across all
              concerned educational sub-sectors. This philosophy emphasizes the
              following traits: the ability to research and innovate, make
              well-informed decisions, uphold ethical standards, and be
              well-rounded and accountable citizens. It also includes the
              ability to thrive in a multicultural society, understand national
              and regional potentials, and self-develop as education specialists
              who contribute to national economic development and growth while
              simultaneously conserving the country's cultural and natural
              resources.
            </p>
            {/* <button
              onClick={() => setSate(!state)}
              className=" rounded-[5px] p-2 border mt-2"
            >
              {state ? "View More " : " View Less"}
            </button> */}
          </div>
        </div>

      </div>
      <div className=" w-full h-screen flex items-center flex-col"> 
        <h1 className=" text-3xl font-bold my-10">past & present Projects/Trainings </h1>

        <div className="  w-full h-full flex  ">
            <div className=" w-1/3 h-full ">
            <h1 className=" border px-2 py-3  text-2xl"> SEIP</h1>
            <div className=" w-full h-full flex">
                <div className=" w-1/2 bg-red-400 h-full  "></div>
                <div className=" w-1/2 bg-red-500 h-full "></div>
            </div>
            

            </div>
            <div className=" w-1/3 h-full bg-red-500">
            ge

            </div>
            <div className=" w-1/3 h-full bg-red-500">
            ge

            </div>

        </div>


      </div>
    </>
  );
}
export default Swiper;
