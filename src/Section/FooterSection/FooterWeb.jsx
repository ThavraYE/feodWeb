import { Link } from 'react-router-dom'
import React from 'react';
import ruppLogo from '../../assets/image/RUPP_Logo_No_bg.png'
import logoMoeY from '../../assets/image/logoMoeY.webp'
import { FaFacebook, FaYoutube, FaApple, FaGooglePlay } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// function FooterWeb(){
//     return(
//         <>
//         <div className="footer w-full h-[400px] bg-[#1C4D8D] mt-5 grid grid-cols-3 gap-4 ">
//             <div className="contectUs mt-[30px] ms-[60px] text-start">
//                 <h1 className="pt-serif-bold text-2xl text-[#FFFFFF]">Contact us</h1>
//                 <span className="google-sans-flex mt-5 text-[#FFFFFF]">Get in touch for enquiries, feedback, complaints and compliments.</span>
//                 <Link to="096 391 9316" className="google-sans-flex text-[#FFFFFF]">Phone: 096 391 9316</Link><br />
//                 <Link to="sok.soth@rupp.edu.kh " className="google-sans-flex text-[#FFFFFF]">Email: sok.soth@rupp.edu.kh </Link><br />
//                 <div className=" mt-[30px] ">
//                     <Link to="./contectUs.html" className=" rounded-md mt-2.5 border-purple-200 text-[#FFFFFF] hover:border-transparent hover:bg-[#FFFFFF] hover:text-[#0046FF] active:bg-[#FFFFFF] hover:w-[200px] hover:h-[50px]">Contect Us</Link>
//                 </div>
//             </div>
//             <div className="followUs mt-[30px] border-x-2 border-[#FFFFFF] ">
//                 <div className="followUsContect ms-[100px]">
                    
//                     <h1 className="pt-serif-bold text-2xl text-[#FFFFFF] text-start">Follow us</h1>
//                     <div className="grid-rows-2">
//                         <div className="facebook mt-5 flex ">
//                             <Link to="https://web.facebook.com/foerupp" target="_blank" className="text-[#FFFFFF] hover:text-[#0046FF]"><i className="fa-brands fa-facebook text-2xl text-start"></i></Link>
//                             <Link to="https://web.facebook.com/foerupp" target="_blank" className="text-[#FFFFFF] hover:text-[#0046FF] text-2xl google-sans-flex ms-2.5">Facebook</Link>
//                         </div>
//                         <div className="youtube mt-5 flex">
//                             <Link to="https://www.youtube.com/@AcademicINSETFacultyofEducatio" target="_blank" className="text-[#FFFFFF] hover:text-[#BF1A1A]"><i className="fa-brands fa-youtube text-2xl "></i></Link>
//                             <Link to="https://www.youtube.com/@AcademicINSETFacultyofEducatio" target="_blank" className="text-[#FFFFFF] hover:text-[#BF1A1A] text-2xl google-sans-flex ms-2.5">YouTube And Resource </Link>
//                         </div>
//                         <div className="youtube mt-5 flex">
//                             <img src={logoMoeY} alt="" className="w-[30px] h-[30px]" />
//                             <Link to="https://play.google.com/store/apps/details?id=com.geip.edtech&pcampaignid=web_share" target="_blank" className="text-[#FFFFFF] hover:underline hover:underline-offset-1 text-2xl google-sans-flex ms-2.5">PlayStore</Link><span className="text-[#FFFFFF] text-2xl google-sans-flex ms-2.5"> and</span> 
//                             <Link to="https://apps.apple.com/us/app/geip-edtech/id6504125594" target="_blank" className="text-[#FFFFFF] hover:underline hover:underline-offset-1 text-2xl google-sans-flex ms-2.5">AppStore</Link>
//                         </div> 
//                     </div>
//                 </div>
//             </div>
//             <div className="rightWeb grid-rows-2">
//                 <div className="Detail mt-5">
//                     <span className="google-sans-flex text-[#FFFFFF]  text-left "> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dignissimos facilis similique dolorem eligendi atque. Quasi enim accusantium consectetur architecto labore laborum voluptatibus, iure harum sequi incidunt inventore culpa! Architecto.</span>
//                 </div>
//                 <div className="logo">
//                     <img src={logo} alt="" className="w-[100px] h-[100px]"/>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }
function FooterWeb () {
  return (
    <footer className="w-full bg-[#1C4D8D] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 py-10 md:px-12 md:py-16">
        
        {/* Section 1: Contact Us */}
        <div className="flex flex-col space-y-4">
          <h1 className="pt-serif-bold text-2xl border-b-2 border-blue-400 pb-2 inline-block w-fit">
            Contact us
          </h1>
          <p className="google-sans-flex text-blue-100 text-sm leading-relaxed text-start">
            Get in touch for enquiries, feedback, complaints and compliments.
          </p>
          <div className="space-y-1">
            <a href="tel:0963919316" className="google-sans-flex hover:text-blue-300 transition-colors block text-start">
              Phone: 096 391 9316
            </a>
            <a href="mailto:sok.soth@rupp.edu.kh" className="google-sans-flex hover:text-blue-300 transition-colors block text-start">
              Email: sok.soth@rupp.edu.kh
            </a>
          </div>
          <div className="pt-4 text-start">
            <Link 
              to="/contact" 
              className="inline-block px-8 py-3 rounded-md border border-white text-white font-semibold 
                       hover:bg-white hover:text-[#1C4D8D] active:scale-95 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Section 2: Follow Us */}
        <div className="flex flex-col space-y-4 border-y md:border-y-0 md:border-x border-white/20 py-8 md:py-0 md:px-8">
          <h1 className="pt-serif-bold text-2xl border-b-2 border-blue-400 pb-2 inline-block w-fit">
            Follow us
          </h1>
          <div className="space-y-5">
            <div className="flex items-center group">
              <a 
                href="https://web.facebook.com/foerupp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 group"
              >
                <div className="p-2 bg-blue-600 rounded-full group-hover:bg-blue-500 transition-colors">
                  <FaFacebook className="text-xl" />
                </div>
                <span className="text-lg google-sans-flex group-hover:text-blue-300 transition-colors">
                  Facebook
                </span>
              </a>
            </div>

            <div className="flex items-center group">
              <a 
                href="https://www.youtube.com/@AcademicINSETFacultyofEducatio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 group"
              >
                <div className="p-2 bg-red-600 rounded-full group-hover:bg-red-500 transition-colors">
                  <FaYoutube className="text-xl" />
                </div>
                <span className="text-lg google-sans-flex group-hover:text-red-300 transition-colors">
                  YouTube Resource
                </span>
              </a>
            </div>

            <div className="flex flex-col space-y-3 pt-2">
              <div className="flex items-center space-x-2">
                <img src={logoMoeY} alt="App Logo" className="w-8 h-8 rounded-lg shadow-lg border border-white/10" />
                <span className="text-sm font-medium opacity-80">Download our App</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.geip.edtech&pcampaignid=web_share"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 hover:underline underline-offset-4 decoration-blue-300"
                >
                  <FaGooglePlay className="text-sm" />
                  <span>PlayStore</span>
                </a>
                <span className="opacity-50">and</span>
                <a 
                  href="https://apps.apple.com/us/app/geip-edtech/id6504125594"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 hover:underline underline-offset-4 decoration-blue-300"
                >
                  <FaApple className="text-sm" />
                  <span>AppStore</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Description & Logo */}
        <div className="flex flex-col space-y-6">
          <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm">
            <p className="google-sans-flex text-sm text-blue-100 leading-relaxed italic">
              "The Faculty of Education is committed to excellence in teacher training, 
              research, and community service, fostering a sustainable future through 
              innovative education and leadership."
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src={ruppLogo} 
                alt="University Logo" 
                className="relative w-24 h-24 md:w-32 md:h-32 object-contain rounded-full border-4 border-[#1C4D8D]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#163D70] py-4 text-center">
        <p className="text-xs text-blue-200/60">
          © {new Date().getFullYear()} Faculty of Education - Royal University of Phnom Penh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default FooterWeb