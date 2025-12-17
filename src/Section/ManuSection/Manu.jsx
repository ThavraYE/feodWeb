import { Link } from "react-router-dom";
import foedLogo from "../../assets/image/RUPP_Logo_No_bg.png";
function Manu() {
  return (
    <>
      <div className="main_menu flex justify-around items-center sticky top-0 z-99999 bg-[#3396D3] px-4 py-2">
        <div className="logo w-25 h-100px">
          <img src={foedLogo} alt="" className="w-[180px] h-100px object-fit" />
        </div>
        <div className="manu ">
          <div className="navbar h-100px">
            <li>
              <Link to="/" className="pt-serif-regular color_dark p-[18px_30px] text-white">
                Home
              </Link>
            </li>
            <div className="dropdown ">
              <li>
                <Link to="/aboutUs" className="dropbtn pt-serif-regular p-[18px_30px] text-white">
                  About Us
                </Link>{" "}
              </li>
              <div className="dropdown-content w_250px top_5px">
                <li className="p_10px_20px_10px_0px ">
                  <Link to="#about-faculty" className="pt-serif-regular p-[18px_30px] text-white">
                    About Faculty of Education
                  </Link>{" "}
                </li>
                <div className="sub-dropdown-content w_200px top_5px l_250px p-[18px_30px]">
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#vision" className="pt-serif-regular text-white">
                      Vision
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#mission" className="pt-serif-regular p-[18px_30px] text-white">
                      Mission
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#education-philosophy"
                      className="pt-serif-regular p-[18px_30px] text-white"
                    >
                      Education Philosophy
                    </Link>{" "}
                  </li>
                </div>

                <li className="p_10px_20px_10px_0px">
                  <Link to="#about-upskilling" className="pt-serif-regular p-[18px_30px] text-white">
                    About the Upskilling Programs
                  </Link>{" "}
                </li>
                <div className="sub-dropdown-content top_45px l_250px">
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#upskilling-vision" className="pt-serif-regular p-[18px_30px] text-white">
                      Vision
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#upskilling-mission" className="pt-serif-regular p-[18px_30px] text-white">
                      Mission
                    </Link>{" "}
                  </li>
                </div>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#our-management" className="pt-serif-regular p-[18px_30px] text-white">
                    Our Management and Teams
                  </Link>{" "}
                </li>
                <div className="sub-dropdown-content top_90px l_250px">
                  <li className="p_10px_20px_10px_0px">
                    <Link to="aboutUs/Dean" className="pt-serif-regular p-[18px_30px] text-white">
                      Dean
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#vice-dean" className="pt-serif-regular p-[18px_30px] text-white">
                      Vice Dean
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#project-operation" className="pt-serif-regular p-[18px_30px] text-white">
                      Project Operation Manager
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#ece-coordinator" className="pt-serif-regular p-[18px_30px] text-white">
                      ECE Coordinator and Team
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#pe-coordinator" className="pt-serif-regular p-[18px_30px] text-white">
                      PE Coordinator and Team
                    </Link>{" "}
                  </li>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <li>
                <Link to="/program" className="dropbtn pt-serif-regular p-[18px_30px] text-white">
                  Programs
                </Link>{" "}
              </li>
              <div className="dropdown-content w_250px">
                <li className="p_10px_20px_10px_0px">
                  <Link className="dropbtn bokor-regular p-[18px_30px] text-white">
                    កម្មវិធីលើកកម្ពស់គុណវុឌ្ឍិគណៈគ្រប់គ្រងសាលារៀន
                  </Link>{" "}
                </li>
                <div className="sub-dropdown-content w_200px top_5px l_250px">
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#bachelor-program1"
                      className="dropbtn bokor-regular p-[18px_30px] text-white"
                    >
                      វិញ្ញាបនបត្រគ្រប់គ្រងអបរំកុមារតូច
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#bachelor-program2"
                      className="dropbtn bokor-regular p-[18px_30px] text-white"
                    >
                      វិញ្ញាបនបត្រគ្រប់គ្រងអប់រំបឋមសិក្សា
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#bachelor-program3"
                      className="dropbtn bokor-regular p-[18px_30px] text-white"
                    >
                      បរិញ្ញបត្រគ្រប់គ្រងអប់រំកុមារតូច
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#bachelor-program4"
                      className="dropbtn bokor-regular p-[18px_30px] text-white"
                    >
                      បរិញ្ញបត្រគ្រប់គ្រងអប់រំមធ្យមសិក្សា
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#bachelor-program5"
                      className="dropbtn bokor-regular p-[18px_30px] text-white"
                    >
                      បរិញ្ញបត្រជាន់ខ្ពស់គ្រប់គ្រងអប់រំកុមារតូច
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#bachelor-program6"
                      className="dropbtn bokor-regular p-[18px_30px] text-white" 
                    >
                      បរិញ្ញបត្រជាន់ខ្ពស់គ្រប់គ្រងអប់រំមធ្យមសិក្សា
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#bachelor-program7"
                      className="dropbtn bokor-regular p-[18px_30px] text-white"
                    >
                      បណ្ឌិតអប់រំកុមារតូច
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#bachelor-program8"
                      className="dropbtn bokor-regular p-[18px_30px] text-white"
                    >
                      បណ្ឌិតអប់រំបឋមសិក្សា
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#bachelor-program9"
                      className="dropbtn bokor-regular p-[18px_30px] text-white"
                    >
                      បណ្ឌិតអប់រំមធ្យមសិក្សា
                    </Link>{" "}
                  </li>
                </div>
                <li className="p_10px_20px_10px_0px">
                  <Link className="dropbtn bokor-regular p-[18px_30px] text-white">
                    កម្មវិធីលើកកម្ពស់គុណវុឌ្ឍិគ្រូបង្រៀន
                  </Link>{" "}
                </li>
                <div className="sub-dropdown-content w_200px top_70px l_250px ">
                  <li className="p_10px_20px_10px_0px upskilling">
                    <Link
                      to="#upskilling-program1"
                      className="dropbtn bokor-regular p-[18px_30px] text-white"
                    >
                      បរិញ្ញាបត្រ
                    </Link>{" "}
                  </li>
                  <div className="sub-dropdown pedagogy l_200px w_200px top_5px">
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#pedagogy-program1"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        អប់រំកុមារតូច
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#pedagogy-program2"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសអក្សរសាស្ត្រខ្មែរ{" "}
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#pedagogy-program2"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសប្រវត្តិវវិទ្យា{" "}
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#pedagogy-program2"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគណិតវិទ្យា{" "}
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#pedagogy-program2"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសរូបវិទ្យា
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#pedagogy-program2"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគីមី{" "}
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#pedagogy-program2"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសជីវវិទ្យា
                      </Link>{" "}
                    </li>
                  </div>
                  <li className="p_10px_20px_10px_0px upskilling">
                    <Link
                      to="#upskilling-program1"
                      className="dropbtn bokor-regular p-[18px_30px] text-white"
                    >
                      បរិញ្ញាបត្រជាន់ខ្ពស់
                    </Link>{" "}
                  </li>
                  <div className="sub-dropdown pedagogy l_200px w_200px  top_45px">
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#pedagogy-program2"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសជីវវិទ្យា
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#pedagogy-program2"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសជីវវិទ្យា
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program1"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសអក្សរសាស្ត្រខ្មែរ{" "}
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program2"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសប្រវត្តិវវិទ្យា
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program3"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគណិតវិទ្យា
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program4"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសរូបវិទ្យា
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program5"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគីមី
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program6"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសជីវវិទ្យា
                      </Link>{" "}
                    </li>
                  </div>
                  <li className="p_10px_20px_10px_0px upskilling">
                    <Link
                      to="#upskilling-program1"
                      className="dropbtn bokor-regular p-[18px_30px] text-white"
                    >
                      បណ្ឌិតអប់រំ
                    </Link>{" "}
                  </li>
                  <div className="sub-dropdown pedagogy l_200px w_200px  top_90px">
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program1"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសអក្សរសាស្ត្រខ្មែរ{" "}
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program2"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសប្រវត្តិវវិទ្យា
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program3"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគណិតវិទ្យា
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program4"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសរូបវិទ្យា
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program5"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគីមី
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program6"
                        className="dropbtn bokor-regular p-[18px_30px] text-white"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសជីវវិទ្យា
                      </Link>{" "}
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <li>
                <Link
                  to="pastProject.html"
                  className="dropbtn pt-serif-regular p-[18px_30px] text-white"
                >
                  Past Projects
                </Link>{" "}
              </li>
              <div className="dropdown-content w_100px">
                <li className="p_10px_20px_10px_0px">
                  <Link to="#seip" className="pt-serif-regular p-[18px_30px] text-white">
                    SEIP
                  </Link>{" "}
                </li>
                <div className="sub-dropdown-content l_100px top_5px">
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#tup" className="pt-serif-regular p-[18px_30px] text-white">
                      TUP
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#lup" className="pt-serif-regular p-[18px_30px] text-white">
                      LUP
                    </Link>{" "}
                  </li>
                </div>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#heip" className="pt-serif-regular p-[18px_30px] text-white">
                    HEIP
                  </Link>{" "}
                </li>
                <div className="sub-dropdown-content  top_45px l_100px">
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#ece" className="pt-serif-regular p-[18px_30px] text-white">
                      ECE
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#cehetli" className="pt-serif-regular p-[18px_30px] text-white">
                      CEHETLI
                    </Link>{" "}
                  </li>
                </div>
              </div>
            </div>

            <div className="dropdown">
              <li>
                <Link to="career.html" className="dropbtn pt-serif-regular p-[18px_30px] text-white" >
                  Career
                </Link>{" "}
              </li>
              <div className="dropdown-content w_250px">
                <li className="p_10px_20px_10px_0px">
                  <Link to="#internship" className="pt-serif-regular p-[18px_30px] text-white">
                    Internship Opportunity
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#opportunity" className="pt-serif-regular p-[18px_30px] text-white">
                    ECE
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#opportunity" className="pt-serif-regular p-[18px_30px] text-white">
                    PE
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#opportunity" className="pt-serif-regular p-[18px_30px] text-white">
                    SE TUP
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#opportunity" className="pt-serif-regular p-[18px_30px] text-white">
                    SE LUP
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#opportunity" className="pt-serif-regular p-[18px_30px] text-white">
                    EdTech
                  </Link>{" "}
                </li>
              </div>
            </div>

            <div className="dropdown">
              <li>
                <Link to="contectUs.html" className="dropbtn pt-serif-regular p-[18px_30px] text-white">
                  Contact Us
                </Link>{" "}
              </li>
              <div className="dropdown-content w_250px l_250px">
                <li className="p_10px_20px_10px_0px">
                  <Link
                    to="#faculty-of-education-contact"
                    className="pt-serif-regular p-[18px_30px] text-white"
                  >
                    Faculty of Education
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#prof-sok-soth" className="pt-serif-regular p-[18px_30px] text-white">
                    Prof. Sok Soth, Dean
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link
                    to="mailto:sok.soth@rupp.edu.kh"
                    className="pt-serif-regular p-[18px_30px] text-white"
                  >
                    sok.soth@rupp.edu.kh
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#asso-mam-socheath" className="pt-serif-regular p-[18px_30px] text-white">
                    Asso. Mam Socheath, Vice Dean
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link
                    to="mailto:mam.socheath@rupp.edu.kh"
                    className="pt-serif-regular p-[18px_30px] text-white"
                  >
                    mam.socheath@rupp.edu.kh
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#ece-coordinator" className="pt-serif-regular p-[18px_30px] text-white">
                    ECE Coordinator
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#miss-leang-lengngich" className="pt-serif-regular p-[18px_30px] text-white">
                    Miss Leang Lengngich
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link
                    to="mailto:leang.lengngich@rupp.edu.kh"
                    className="pt-serif-regular p-[18px_30px] text-white"
                  >
                    leang.lengngich@rupp.edu.kh
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link
                    to="#pe-coordinator-contact"
                    className="pt-serif-regular p-[18px_30px] text-white"
                  >
                    PE Coordinator
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#se-tup-coordinator" className="pt-serif-regular p-[18px_30px] text-white">
                    SE TUP Coordinator
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#se-lup-coordinator" className="pt-serif-regular p-[18px_30px] text-white">
                    SE LUP Coordinator
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#edtech-coordinator" className="pt-serif-regular p-[18px_30px] text-white">
                    EdTech Coordinator
                  </Link>{" "}
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Manu;
