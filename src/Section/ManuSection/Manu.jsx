// import { Link } from "react-router-dom";
// import foedLogo from "../../assets/image/RUPP_Logo_No_bg.png";
// function Manu() {
//   return (
//     <>
//       <div className="main_menu flex justify-around items-center sticky top-0 z-99999 bg-[#1C4D8D] px-4 py-2">
//         <div className="logo w-25 h-100px">
//           <img src={foedLogo} alt="" className="w-[180px] h-100px object-fit" />
//         </div>
//         <div className="manu ">
//           <div className="navbar h-100px">
//             <li>
//               <Link to="/" className="pt-serif-regular color_dark p-[18px_30px] text-white">
//                 Home
//               </Link>
//             </li>
//             <div className="dropdown ">
//               <li>
//                 <Link to="/aboutUs" className="dropbtn pt-serif-regular p-[18px_30px] text-white">
//                   About Us
//                 </Link>{" "}
//               </li>
//               <div className="dropdown-content w_250px top_5px">
//                 <li className="p_10px_20px_10px_0px ">
//                   <Link to="#about-faculty" className="pt-serif-regular p-[18px_30px] text-white">
//                     About Faculty of Education
//                   </Link>{" "}
//                 </li>
//                 <div className="sub-dropdown-content w_200px top_5px l_250px p-[18px_30px]">
//                   <li className="p_10px_20px_10px_0px">
//                     <Link to="#vision" className="pt-serif-regular text-white">
//                       Vision
//                     </Link>{" "}
//                   </li>
//                   <li className="p_10px_20px_10px_0px">
//                     <Link to="#mission" className="pt-serif-regular p-[18px_30px] text-white">
//                       Mission
//                     </Link>{" "}
//                   </li>
//                   <li className="p_10px_20px_10px_0px">
//                     <Link
//                       to="#education-philosophy"
//                       className="pt-serif-regular p-[18px_30px] text-white"
//                     >
//                       Education Philosophy
//                     </Link>{" "}
//                   </li>
//                 </div>

//                 <li className="p_10px_20px_10px_0px">
//                   <Link to="#about-upskilling" className="pt-serif-regular p-[18px_30px] text-white">
//                     About the Upskilling Programs
//                   </Link>{" "}
//                 </li>
//                 <div className="sub-dropdown-content top_45px l_250px">
//                   <li className="p_10px_20px_10px_0px">
//                     <Link to="#upskilling-vision" className="pt-serif-regular p-[18px_30px] text-white">
//                       Vision
//                     </Link>{" "}
//                   </li>
//                   <li className="p_10px_20px_10px_0px">
//                     <Link to="#upskilling-mission" className="pt-serif-regular p-[18px_30px] text-white">
//                       Mission
//                     </Link>{" "}
//                   </li>
//                 </div>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link to="#our-management" className="pt-serif-regular p-[18px_30px] text-white">
//                     Our Management and Teams
//                   </Link>{" "}
//                 </li>
//                 <div className="sub-dropdown-content top_90px l_250px">
//                   <li className="p_10px_20px_10px_0px">
//                     <Link to="aboutUs/Dean" className="pt-serif-regular p-[18px_30px] text-white">
//                       Dean
//                     </Link>{" "}
//                   </li>
//                   <li className="p_10px_20px_10px_0px">
//                     <Link to="#vice-dean" className="pt-serif-regular p-[18px_30px] text-white">
//                       Vice Dean
//                     </Link>{" "}
//                   </li>
//                   <li className="p_10px_20px_10px_0px">
//                     <Link to="#project-operation" className="pt-serif-regular p-[18px_30px] text-white">
//                       Project Operation Manager
//                     </Link>{" "}
//                   </li>
//                   <li className="p_10px_20px_10px_0px">
//                     <Link to="#ece-coordinator" className="pt-serif-regular p-[18px_30px] text-white">
//                       ECE Coordinator and Team
//                     </Link>{" "}
//                   </li>
//                   <li className="p_10px_20px_10px_0px">
//                     <Link to="#pe-coordinator" className="pt-serif-regular p-[18px_30px] text-white">
//                       PE Coordinator and Team
//                     </Link>{" "}
//                   </li>
//                 </div>
//               </div>
//             </div>
//             <div className="dropdown">
//               <li>
//                 <Link to="/program" className="dropbtn pt-serif-regular p-[18px_30px] text-white">
//                   Programs
//                 </Link>{" "}
//               </li>
//               <div className="dropdown-content w_250px">
//                 <li className="p_10px_20px_10px_0px">
//                   <Link className="dropbtn bokor-regular p-[18px_30px] text-white">
//                     កម្មវិធីលើកកម្ពស់គុណវុឌ្ឍិគណៈគ្រប់គ្រងសាលារៀន
//                   </Link>{" "}
//                 </li>
//                 <div className="sub-dropdown-content w_200px top_5px l_250px">
//                   <li className="p_10px_20px_10px_0px">
//                     <Link
//                       to="#bachelor-program1"
//                       className="dropbtn bokor-regular p-[18px_30px] text-white"
//                     >
//                       វិញ្ញាបនបត្រគ្រប់គ្រងអបរំកុមារតូច
//                     </Link>{" "}
//                   </li>
//                   <li className="p_10px_20px_10px_0px">
//                     <Link
//                       to="#bachelor-program2"
//                       className="dropbtn bokor-regular p-[18px_30px] text-white"
//                     >
//                       វិញ្ញាបនបត្រគ្រប់គ្រងអប់រំបឋមសិក្សា
//                     </Link>{" "}
//                   </li>
//                   <li className="p_10px_20px_10px_0px">
//                     <Link
//                       to="#bachelor-program3"
//                       className="dropbtn bokor-regular p-[18px_30px] text-white"
//                     >
//                       បរិញ្ញបត្រគ្រប់គ្រងអប់រំកុមារតូច
//                     </Link>{" "}
//                   </li>
//                   <li className="p_10px_20px_10px_0px">
//                     <Link
//                       to="#bachelor-program4"
//                       className="dropbtn bokor-regular p-[18px_30px] text-white"
//                     >
//                       បរិញ្ញបត្រគ្រប់គ្រងអប់រំមធ្យមសិក្សា
//                     </Link>{" "}
//                   </li>
//                   <li className="p_10px_20px_10px_0px">
//                     <Link
//                       to="#bachelor-program5"
//                       className="dropbtn bokor-regular p-[18px_30px] text-white"
//                     >
//                       បរិញ្ញបត្រជាន់ខ្ពស់គ្រប់គ្រងអប់រំកុមារតូច
//                     </Link>{" "}
//                   </li>
//                   <li className="p_10px_20px_10px_0px">
//                     <Link
//                       to="#bachelor-program6"
//                       className="dropbtn bokor-regular p-[18px_30px] text-white" 
//                     >
//                       បរិញ្ញបត្រជាន់ខ្ពស់គ្រប់គ្រងអប់រំមធ្យមសិក្សា
//                     </Link>{" "}
//                   </li>
//                   <li className="p_10px_20px_10px_0px">
//                     <Link
//                       to="#bachelor-program7"
//                       className="dropbtn bokor-regular p-[18px_30px] text-white"
//                     >
//                       បណ្ឌិតអប់រំកុមារតូច
//                     </Link>{" "}
//                   </li>
//                   <li className="p_10px_20px_10px_0px">
//                     <Link
//                       to="#bachelor-program8"
//                       className="dropbtn bokor-regular p-[18px_30px] text-white"
//                     >
//                       បណ្ឌិតអប់រំបឋមសិក្សា
//                     </Link>{" "}
//                   </li>
//                   <li className="p_10px_20px_10px_0px">
//                     <Link
//                       to="#bachelor-program9"
//                       className="dropbtn bokor-regular p-[18px_30px] text-white"
//                     >
//                       បណ្ឌិតអប់រំមធ្យមសិក្សា
//                     </Link>{" "}
//                   </li>
//                 </div>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link className="dropbtn bokor-regular p-[18px_30px] text-white">
//                     កម្មវិធីលើកកម្ពស់គុណវុឌ្ឍិគ្រូបង្រៀន
//                   </Link>{" "}
//                 </li>
//                 <div className="sub-dropdown-content w_200px top_70px l_250px ">
//                   <li className="p_10px_20px_10px_0px upskilling">
//                     <Link
//                       to="#upskilling-program1"
//                       className="dropbtn bokor-regular p-[18px_30px] text-white"
//                     >
//                       បរិញ្ញាបត្រ
//                     </Link>{" "}
//                   </li>
//                   <div className="sub-dropdown pedagogy l_200px w_200px top_5px">
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#pedagogy-program1"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         អប់រំកុមារតូច
//                       </Link>{" "}
//                     </li>
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#pedagogy-program2"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសអក្សរសាស្ត្រខ្មែរ{" "}
//                       </Link>{" "}
//                     </li>
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#pedagogy-program2"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសប្រវត្តិវវិទ្យា{" "}
//                       </Link>{" "}
//                     </li>
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#pedagogy-program2"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគណិតវិទ្យា{" "}
//                       </Link>{" "}
//                     </li>
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#pedagogy-program2"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសរូបវិទ្យា
//                       </Link>{" "}
//                     </li>
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#pedagogy-program2"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគីមី{" "}
//                       </Link>{" "}
//                     </li>
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#pedagogy-program2"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសជីវវិទ្យា
//                       </Link>{" "}
//                     </li>
//                   </div>
//                   <li className="p_10px_20px_10px_0px upskilling">
//                     <Link
//                       to="#upskilling-program1"
//                       className="dropbtn bokor-regular p-[18px_30px] text-white"
//                     >
//                       បរិញ្ញាបត្រជាន់ខ្ពស់
//                     </Link>{" "}
//                   </li>
//                   <div className="sub-dropdown pedagogy l_200px w_200px  top_45px">
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#pedagogy-program2"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសជីវវិទ្យា
//                       </Link>{" "}
//                     </li>
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#pedagogy-program2"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសជីវវិទ្យា
//                       </Link>{" "}
//                     </li>
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#teacher-program1"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសអក្សរសាស្ត្រខ្មែរ{" "}
//                       </Link>{" "}
//                     </li>
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#teacher-program2"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសប្រវត្តិវវិទ្យា
//                       </Link>{" "}
//                     </li>
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#teacher-program3"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគណិតវិទ្យា
//                       </Link>{" "}
//                     </li>
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#teacher-program4"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសរូបវិទ្យា
//                       </Link>{" "}
//                     </li>
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#teacher-program5"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគីមី
//                       </Link>{" "}
//                     </li>
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#teacher-program6"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសជីវវិទ្យា
//                       </Link>{" "}
//                     </li>
//                   </div>
//                   <li className="p_10px_20px_10px_0px upskilling">
//                     <Link
//                       to="#upskilling-program1"
//                       className="dropbtn bokor-regular p-[18px_30px] text-white"
//                     >
//                       បណ្ឌិតអប់រំ
//                     </Link>{" "}
//                   </li>
//                   <div className="sub-dropdown pedagogy l_200px w_200px  top_90px">
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#teacher-program1"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសអក្សរសាស្ត្រខ្មែរ{" "}
//                       </Link>{" "}
//                     </li>
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#teacher-program2"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសប្រវត្តិវវិទ្យា
//                       </Link>{" "}
//                     </li>
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#teacher-program3"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគណិតវិទ្យា
//                       </Link>{" "}
//                     </li>
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#teacher-program4"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសរូបវិទ្យា
//                       </Link>{" "}
//                     </li>
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#teacher-program5"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគីមី
//                       </Link>{" "}
//                     </li>
//                     <li className="p_10px_20px_10px_0px">
//                       {" "}
//                       <Link
//                         to="#teacher-program6"
//                         className="dropbtn bokor-regular p-[18px_30px] text-white"
//                       >
//                         វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសជីវវិទ្យា
//                       </Link>{" "}
//                     </li>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="dropdown">
//               <li>
//                 <Link
//                   to="pastProject.html"
//                   className="dropbtn pt-serif-regular p-[18px_30px] text-white"
//                 >
//                   Past Projects
//                 </Link>{" "}
//               </li>
//               <div className="dropdown-content w_100px">
//                 <li className="p_10px_20px_10px_0px">
//                   <Link to="#seip" className="pt-serif-regular p-[18px_30px] text-white">
//                     SEIP
//                   </Link>{" "}
//                 </li>
//                 <div className="sub-dropdown-content l_100px top_5px">
//                   <li className="p_10px_20px_10px_0px">
//                     <Link to="#tup" className="pt-serif-regular p-[18px_30px] text-white">
//                       TUP
//                     </Link>{" "}
//                   </li>
//                   <li className="p_10px_20px_10px_0px">
//                     <Link to="#lup" className="pt-serif-regular p-[18px_30px] text-white">
//                       LUP
//                     </Link>{" "}
//                   </li>
//                 </div>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link to="#heip" className="pt-serif-regular p-[18px_30px] text-white">
//                     HEIP
//                   </Link>{" "}
//                 </li>
//                 <div className="sub-dropdown-content  top_45px l_100px">
//                   <li className="p_10px_20px_10px_0px">
//                     <Link to="#ece" className="pt-serif-regular p-[18px_30px] text-white">
//                       ECE
//                     </Link>{" "}
//                   </li>
//                   <li className="p_10px_20px_10px_0px">
//                     <Link to="#cehetli" className="pt-serif-regular p-[18px_30px] text-white">
//                       CEHETLI
//                     </Link>{" "}
//                   </li>
//                 </div>
//               </div>
//             </div>

//             <div className="dropdown">
//               <li>
//                 <Link to="career.html" className="dropbtn pt-serif-regular p-[18px_30px] text-white" >
//                   Career
//                 </Link>{" "}
//               </li>
//               <div className="dropdown-content w_250px">
//                 <li className="p_10px_20px_10px_0px">
//                   <Link to="#internship" className="pt-serif-regular p-[18px_30px] text-white">
//                     Internship Opportunity
//                   </Link>{" "}
//                 </li>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link to="#opportunity" className="pt-serif-regular p-[18px_30px] text-white">
//                     ECE
//                   </Link>{" "}
//                 </li>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link to="#opportunity" className="pt-serif-regular p-[18px_30px] text-white">
//                     PE
//                   </Link>{" "}
//                 </li>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link to="#opportunity" className="pt-serif-regular p-[18px_30px] text-white">
//                     SE TUP
//                   </Link>{" "}
//                 </li>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link to="#opportunity" className="pt-serif-regular p-[18px_30px] text-white">
//                     SE LUP
//                   </Link>{" "}
//                 </li>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link to="#opportunity" className="pt-serif-regular p-[18px_30px] text-white">
//                     EdTech
//                   </Link>{" "}
//                 </li>
//               </div>
//             </div>

//             <div className="dropdown">
//               <li>
//                 <Link to="contectUs.html" className="dropbtn pt-serif-regular p-[18px_30px] text-white">
//                   Contact Us
//                 </Link>{" "}
//               </li>
//               <div className="dropdown-content w_250px l_250px">
//                 <li className="p_10px_20px_10px_0px">
//                   <Link
//                     to="#faculty-of-education-contact"
//                     className="pt-serif-regular p-[18px_30px] text-white"
//                   >
//                     Faculty of Education
//                   </Link>{" "}
//                 </li>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link to="#prof-sok-soth" className="pt-serif-regular p-[18px_30px] text-white">
//                     Prof. Sok Soth, Dean
//                   </Link>{" "}
//                 </li>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link
//                     to="mailto:sok.soth@rupp.edu.kh"
//                     className="pt-serif-regular p-[18px_30px] text-white"
//                   >
//                     sok.soth@rupp.edu.kh
//                   </Link>{" "}
//                 </li>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link to="#asso-mam-socheath" className="pt-serif-regular p-[18px_30px] text-white">
//                     Asso. Mam Socheath, Vice Dean
//                   </Link>{" "}
//                 </li>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link
//                     to="mailto:mam.socheath@rupp.edu.kh"
//                     className="pt-serif-regular p-[18px_30px] text-white"
//                   >
//                     mam.socheath@rupp.edu.kh
//                   </Link>{" "}
//                 </li>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link to="#ece-coordinator" className="pt-serif-regular p-[18px_30px] text-white">
//                     ECE Coordinator
//                   </Link>{" "}
//                 </li>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link to="#miss-leang-lengngich" className="pt-serif-regular p-[18px_30px] text-white">
//                     Miss Leang Lengngich
//                   </Link>{" "}
//                 </li>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link
//                     to="mailto:leang.lengngich@rupp.edu.kh"
//                     className="pt-serif-regular p-[18px_30px] text-white"
//                   >
//                     leang.lengngich@rupp.edu.kh
//                   </Link>{" "}
//                 </li>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link
//                     to="#pe-coordinator-contact"
//                     className="pt-serif-regular p-[18px_30px] text-white"
//                   >
//                     PE Coordinator
//                   </Link>{" "}
//                 </li>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link to="#se-tup-coordinator" className="pt-serif-regular p-[18px_30px] text-white">
//                     SE TUP Coordinator
//                   </Link>{" "}
//                 </li>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link to="#se-lup-coordinator" className="pt-serif-regular p-[18px_30px] text-white">
//                     SE LUP Coordinator
//                   </Link>{" "}
//                 </li>
//                 <li className="p_10px_20px_10px_0px">
//                   <Link to="#edtech-coordinator" className="pt-serif-regular p-[18px_30px] text-white">
//                     EdTech Coordinator
//                   </Link>{" "}
//                 </li>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Manu;







import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import foedLogo from "../../assets/image/RUPP_Logo_No_bg.png";
import { NAVIGATION_DATA } from '../../Utils/constants';

/**
 * DesktopDropdown: Recursive component for nested menus on large screens.
 */
const DesktopDropdown = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  const hasChildren = item.children && item.children.length > 0;

  return (
    <div 
      className="relative h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`flex items-center justify-between px-4 py-3 h-full cursor-pointer  transition-all duration-200 
          ${isOpen ? 'bg-[#153a6b]' : 'hover:bg-[#153a6b]'}
          ${item.isKhmer ? 'font-bokor text-[15px]' : 'font-pt-serif text-[14px] font-bold'}
          text-white whitespace-break-spaces
        `}
      >
        {item.path && item.path !== '#' ? (
          <Link to={item.path} className="block w-full">
            {item.label}
          </Link>
        ) : (
          <span className="select-none">{item.label}</span>
        )}
        
        {hasChildren && (
          <div className="ml-1.5 opacity-70">
            {depth === 0 ? (
              <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            ) : (
              <ChevronRight size={14} />
            )}
          </div>
        )}
      </div>

      {hasChildren && isOpen && (
        <div 
          className={`absolute z-100 bg-[#1C4D8D] shadow-2xl border border-white/10 w-50 py-1 
            ${depth === 0 ? 'top-full left-0' : 'top-0 left-full -ml-px'}
          `}
        >
          {item.children.map((child, idx) => (
            <DesktopDropdown key={idx} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * MobileNavItem: Recursive component for accordion-style menu on mobile/tablet.
 */
const MobileNavItem = ({ item, onClose, depth = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const handleToggle = (e) => {
    if (hasChildren) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    } else {
      onClose();
    }
  };

  return (
    <div className="w-full">
      <div className={`flex items-center w-full border-b border-white/5`}>
        <div className="grow">
          {item.path && item.path !== '#' ? (
            <Link 
              to={item.path} 
              onClick={onClose}
              className={`block  px-5 py-3.5 text-white hover:bg-white/5 transition-colors w-25
                ${item.isKhmer ? 'font-bokor text-lg' : 'font-pt-serif font-bold text-[15px]'}
                ${depth > 0 ? 'pl-8' : ''}`}
            >
              {item.label}
            </Link>
          ) : (
            <button
              onClick={handleToggle}
              className={` text-left px-5 py-3.5 text-white hover:bg-white/5 transition-colors w-25
                ${item.isKhmer ? 'font-bokor text-lg' : 'font-pt-serif font-bold text-[15px]'}
                ${depth > 0 ? 'pl-8' : ''}`}
            >
              {item.label}
            </button>
          )}
        </div>
        {hasChildren && (
          <button 
            onClick={handleToggle}
            className="px-5 py-3.5 text-white/70 hover:bg-white/10 transition-colors"
          >
            <ChevronDown size={20} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>

      {hasChildren && isExpanded && (
        <div className="bg-[#153a6b]/30">
          {item.children.map((child, idx) => (
            <MobileNavItem key={idx} item={child} onClose={onClose} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const Manu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-999 bg-[#1C4D8D] shadow-xl border-b border-[#2a66b3]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20 ">
          
          {/* Brand Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group shrink-0 ">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-md transition-transform group-hover:scale-105">
              <img 
                src={foedLogo} 
                alt="RUPP Logo" 
                className="w-10 h-10 object-contain"
                onError={(e) => { e.target.src = "https://picsum.photos/id/119/100/100"; }}
              />
            </div>
            <div className="flex flex-col text-white">
              <span className="font-pt-serif font-black text-sm md:text-base tracking-tighter leading-none uppercase">Faculty of Education</span>
              <span className=" text-[11px] md:text-xs opacity-80 mt-1">មហាវិទ្យាល័យអប់រំ</span>
            </div>
          </Link>

          {/* Desktop Navigation (Laptops/Tablets Landscape) */}
          <div className="hidden lg:flex items-center h-full w-190">
            {NAVIGATION_DATA.map((item, idx) => (
              <DesktopDropdown key={idx} item={item} />
            ))}
          </div>

          {/* Mobile Toggle Button (Phones/Tablets) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white p-2.5 rounded-lg hover:bg-white/10 transition-all"
              aria-label="Open navigation menu"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div 
        className={`fixed inset-0 z-1000 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Panel */}
      <aside 
        className={`fixed inset-y-0 right-0 z-1001 w-full max-w-[320px] bg-[#1C4D8D] shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#153a6b]">
            <span className="text-white font-bold font-pt-serif uppercase text-xs tracking-widest">Menu</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={26} />
            </button>
          </div>

          {/* Scrollable List */}
          <div className="grow overflow-y-auto custom-scrollbar">
            <div className="py-2">
              {NAVIGATION_DATA.map((item, idx) => (
                <MobileNavItem 
                  key={idx} 
                  item={item} 
                  onClose={() => setIsMobileMenuOpen(false)} 
                />
              ))}
            </div>
          </div>

          {/* Footer Info */}
          <div className="p-6 bg-[#153a6b]/40 border-t border-white/10 text-center">
            <p className="text-[10px] text-white/40 font-pt-serif tracking-widest uppercase">
              © {new Date().getFullYear()} Faculty of Education, RUPP
            </p>
          </div>
        </div>
      </aside>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
      `}</style>
    </nav>
  );
};

export default Manu;