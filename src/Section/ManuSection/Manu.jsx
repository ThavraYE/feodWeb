import { Link } from "react-router-dom";
import foedLogo from "../../assets/image/foedLogo-removebg-preview.png";
function Manu() {
  return (
    <>
      <div className="main_menu flex justify-around items-center fixed top-0 z-[99999px] bg-[#3396D3]">
        <div className="logo w-25 h-100px">
          <img src={foedLogo} alt="" className="w-[180px] h-100px object-fit" />
        </div>
        <div className="manu ">
          <div className="navbar h-100px">
            <li>
              <Link to="/home" className="pt-serif-regular color_dark p-[18px_30px]">
                Home
              </Link>
            </li>
            <div className="dropdown ">
              <li>
                <Link to="#" className="dropbtn pt-serif-regular p-[18px_30px]">
                  About Us
                </Link>{" "}
              </li>
              <div className="dropdown-content w_250px top_5px">
                <li className="p_10px_20px_10px_0px ">
                  <Link to="#about-faculty" className="pt-serif-regular p-[18px_30px]">
                    About Faculty of Education
                  </Link>{" "}
                </li>
                <div className="sub-dropdown-content w_200px top_5px l_250px p-[18px_30px]">
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#vision" className="pt-serif-regular">
                      Vision
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#mission" className="pt-serif-regular p-[18px_30px]">
                      Mission
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#education-philosophy"
                      className="pt-serif-regular p-[18px_30px]"
                    >
                      Education Philosophy
                    </Link>{" "}
                  </li>
                </div>

                <li className="p_10px_20px_10px_0px">
                  <Link to="#about-upskilling" className="pt-serif-regular p-[18px_30px]">
                    About the Upskilling Programs
                  </Link>{" "}
                </li>
                <div className="sub-dropdown-content top_45px l_250px">
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#upskilling-vision" className="pt-serif-regular p-[18px_30px]">
                      Vision
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#upskilling-mission" className="pt-serif-regular p-[18px_30px]">
                      Mission
                    </Link>{" "}
                  </li>
                </div>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#our-management" className="pt-serif-regular p-[18px_30px]">
                    Our Management and Teams
                  </Link>{" "}
                </li>
                <div className="sub-dropdown-content top_90px l_250px">
                  <li className="p_10px_20px_10px_0px">
                    <Link to="aboutUs/Dean" className="pt-serif-regular p-[18px_30px]">
                      Dean
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#vice-dean" className="pt-serif-regular p-[18px_30px]">
                      Vice Dean
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#project-operation" className="pt-serif-regular p-[18px_30px]">
                      Project Operation Manager
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#ece-coordinator" className="pt-serif-regular p-[18px_30px]">
                      ECE Coordinator and Team
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#pe-coordinator" className="pt-serif-regular p-[18px_30px]">
                      PE Coordinator and Team
                    </Link>{" "}
                  </li>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <li>
                <Link to="/program" className="dropbtn pt-serif-regular p-[18px_30px]">
                  Programs
                </Link>{" "}
              </li>
              <div className="dropdown-content w_250px">
                <li className="p_10px_20px_10px_0px">
                  <Link className="dropbtn bokor-regular p-[18px_30px]">
                    កម្មវិធីលើកកម្ពស់គុណវុឌ្ឍិគណៈគ្រប់គ្រងសាលារៀន
                  </Link>{" "}
                </li>
                <div className="sub-dropdown-content w_200px top_5px l_250px">
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#bachelor-program1"
                      className="dropbtn bokor-regular p-[18px_30px]"
                    >
                      វិញ្ញាបនបត្រគ្រប់គ្រងអបរំកុមារតូច
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#bachelor-program2"
                      className="dropbtn bokor-regular p-[18px_30px]"
                    >
                      វិញ្ញាបនបត្រគ្រប់គ្រងអប់រំបឋមសិក្សា
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#bachelor-program3"
                      className="dropbtn bokor-regular p-[18px_30px]"
                    >
                      បរិញ្ញបត្រគ្រប់គ្រងអប់រំកុមារតូច
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#bachelor-program4"
                      className="dropbtn bokor-regular p-[18px_30px]"
                    >
                      បរិញ្ញបត្រគ្រប់គ្រងអប់រំមធ្យមសិក្សា
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#bachelor-program5"
                      className="dropbtn bokor-regular p-[18px_30px]"
                    >
                      បរិញ្ញបត្រជាន់ខ្ពស់គ្រប់គ្រងអប់រំកុមារតូច
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#bachelor-program6"
                      className="dropbtn bokor-regular p-[18px_30px]"
                    >
                      បរិញ្ញបត្រជាន់ខ្ពស់គ្រប់គ្រងអប់រំមធ្យមសិក្សា
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#bachelor-program7"
                      className="dropbtn bokor-regular p-[18px_30px]"
                    >
                      បណ្ឌិតអប់រំកុមារតូច
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#bachelor-program8"
                      className="dropbtn bokor-regular p-[18px_30px]"
                    >
                      បណ្ឌិតអប់រំបឋមសិក្សា
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link
                      to="#bachelor-program9"
                      className="dropbtn bokor-regular p-[18px_30px]"
                    >
                      បណ្ឌិតអប់រំមធ្យមសិក្សា
                    </Link>{" "}
                  </li>
                </div>
                <li className="p_10px_20px_10px_0px">
                  <Link className="dropbtn bokor-regular p-[18px_30px]">
                    កម្មវិធីលើកកម្ពស់គុណវុឌ្ឍិគ្រូបង្រៀន
                  </Link>{" "}
                </li>
                <div className="sub-dropdown-content w_200px top_70px l_250px ">
                  <li className="p_10px_20px_10px_0px upskilling">
                    <Link
                      to="#upskilling-program1"
                      className="dropbtn bokor-regular p-[18px_30px]"
                    >
                      បរិញ្ញាបត្រ
                    </Link>{" "}
                  </li>
                  <div className="sub-dropdown pedagogy l_200px w_200px top_5px">
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#pedagogy-program1"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        អប់រំកុមារតូច
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#pedagogy-program2"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសអក្សរសាស្ត្រខ្មែរ{" "}
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#pedagogy-program2"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសប្រវត្តិវវិទ្យា{" "}
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#pedagogy-program2"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគណិតវិទ្យា{" "}
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#pedagogy-program2"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសរូបវិទ្យា
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#pedagogy-program2"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគីមី{" "}
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#pedagogy-program2"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសជីវវិទ្យា
                      </Link>{" "}
                    </li>
                  </div>
                  <li className="p_10px_20px_10px_0px upskilling">
                    <Link
                      to="#upskilling-program1"
                      className="dropbtn bokor-regular p-[18px_30px]"
                    >
                      បរិញ្ញាបត្រជាន់ខ្ពស់
                    </Link>{" "}
                  </li>
                  <div className="sub-dropdown pedagogy l_200px w_200px  top_45px">
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#pedagogy-program2"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសជីវវិទ្យា
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#pedagogy-program2"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសជីវវិទ្យា
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program1"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសអក្សរសាស្ត្រខ្មែរ{" "}
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program2"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសប្រវត្តិវវិទ្យា
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program3"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគណិតវិទ្យា
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program4"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសរូបវិទ្យា
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program5"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគីមី
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program6"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសជីវវិទ្យា
                      </Link>{" "}
                    </li>
                  </div>
                  <li className="p_10px_20px_10px_0px upskilling">
                    <Link
                      to="#upskilling-program1"
                      className="dropbtn bokor-regular p-[18px_30px]"
                    >
                      បណ្ឌិតអប់រំ
                    </Link>{" "}
                  </li>
                  <div className="sub-dropdown pedagogy l_200px w_200px  top_90px">
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program1"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសអក្សរសាស្ត្រខ្មែរ{" "}
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program2"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសប្រវត្តិវវិទ្យា
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program3"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគណិតវិទ្យា
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program4"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសរូបវិទ្យា
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program5"
                        className="dropbtn bokor-regular p-[18px_30px]"
                      >
                        វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគីមី
                      </Link>{" "}
                    </li>
                    <li className="p_10px_20px_10px_0px">
                      {" "}
                      <Link
                        to="#teacher-program6"
                        className="dropbtn bokor-regular p-[18px_30px]"
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
                  className="dropbtn pt-serif-regular p-[18px_30px]"
                >
                  Past Projects
                </Link>{" "}
              </li>
              <div className="dropdown-content w_100px">
                <li className="p_10px_20px_10px_0px">
                  <Link to="#seip" className="pt-serif-regular p-[18px_30px]">
                    SEIP
                  </Link>{" "}
                </li>
                <div className="sub-dropdown-content l_100px top_5px">
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#tup" className="pt-serif-regular p-[18px_30px]">
                      TUP
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#lup" className="pt-serif-regular p-[18px_30px]">
                      LUP
                    </Link>{" "}
                  </li>
                </div>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#heip" className="pt-serif-regular p-[18px_30px]">
                    HEIP
                  </Link>{" "}
                </li>
                <div className="sub-dropdown-content  top_45px l_100px">
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#ece" className="pt-serif-regular p-[18px_30px]">
                      ECE
                    </Link>{" "}
                  </li>
                  <li className="p_10px_20px_10px_0px">
                    <Link to="#cehetli" className="pt-serif-regular p-[18px_30px]">
                      CEHETLI
                    </Link>{" "}
                  </li>
                </div>
              </div>
            </div>

            <div className="dropdown">
              <li>
                <Link to="career.html" className="dropbtn pt-serif-regular p-[18px_30px]">
                  Career
                </Link>{" "}
              </li>
              <div className="dropdown-content w_250px">
                <li className="p_10px_20px_10px_0px">
                  <Link to="#internship" className="pt-serif-regular p-[18px_30px]">
                    Internship Opportunity
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#opportunity" className="pt-serif-regular p-[18px_30px]">
                    ECE
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#opportunity" className="pt-serif-regular p-[18px_30px]">
                    PE
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#opportunity" className="pt-serif-regular p-[18px_30px]">
                    SE TUP
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#opportunity" className="pt-serif-regular p-[18px_30px]">
                    SE LUP
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#opportunity" className="pt-serif-regular p-[18px_30px]">
                    EdTech
                  </Link>{" "}
                </li>
              </div>
            </div>

            <div className="dropdown">
              <li>
                <Link to="contectUs.html" className="dropbtn pt-serif-regular p-[18px_30px]">
                  Contact Us
                </Link>{" "}
              </li>
              <div className="dropdown-content w_250px l_250px">
                <li className="p_10px_20px_10px_0px">
                  <Link
                    to="#faculty-of-education-contact"
                    className="pt-serif-regular p-[18px_30px]"
                  >
                    Faculty of Education
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#prof-sok-soth" className="pt-serif-regular p-[18px_30px]">
                    Prof. Sok Soth, Dean
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link
                    to="mailto:sok.soth@rupp.edu.kh"
                    className="pt-serif-regular p-[18px_30px]"
                  >
                    sok.soth@rupp.edu.kh
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#asso-mam-socheath" className="pt-serif-regular p-[18px_30px]">
                    Asso. Mam Socheath, Vice Dean
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link
                    to="mailto:mam.socheath@rupp.edu.kh"
                    className="pt-serif-regular p-[18px_30px]"
                  >
                    mam.socheath@rupp.edu.kh
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#ece-coordinator" className="pt-serif-regular p-[18px_30px]">
                    ECE Coordinator
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#miss-leang-lengngich" className="pt-serif-regular p-[18px_30px]">
                    Miss Leang Lengngich
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link
                    to="mailto:leang.lengngich@rupp.edu.kh"
                    className="pt-serif-regular p-[18px_30px]"
                  >
                    leang.lengngich@rupp.edu.kh
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link
                    to="#pe-coordinator-contact"
                    className="pt-serif-regular p-[18px_30px]"
                  >
                    PE Coordinator
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#se-tup-coordinator" className="pt-serif-regular p-[18px_30px]">
                    SE TUP Coordinator
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#se-lup-coordinator" className="pt-serif-regular p-[18px_30px]">
                    SE LUP Coordinator
                  </Link>{" "}
                </li>
                <li className="p_10px_20px_10px_0px">
                  <Link to="#edtech-coordinator" className="pt-serif-regular p-[18px_30px]">
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
