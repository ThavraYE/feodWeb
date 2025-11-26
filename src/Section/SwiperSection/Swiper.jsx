import { useState } from "react";
import image1 from "../assets/image/swipperImg2_1.jpg";
import image2 from "../assets/image/swipperImg2_2.jpg";
import image3 from "../assets/image/swipperImg2_3.jpg";
import AutoImageSwiper from "../../component/Swiper/AutoImageSwiper";
import ImageSwiper from "../../component/Swiper/ImageSwiper";

function Swiper() {
  const [state, setSate] = useState(false);
  return (
    <>
      <div className="flex gap-4 inset-shadow-sm inset-shadow-indigo-500/50 w-full">
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
    </>
  );
}
export default Swiper;
