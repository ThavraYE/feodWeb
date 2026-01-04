import { Link } from 'react-router-dom'
import logo from '../../assets/image/RUPP_Logo_No_bg.png'
import logoMoeY from '../../assets/image/logoMoeY.webp'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function FooterWeb(){
    return(
        <>
        <div className="footer w-full h-[400px] bg-[#1C4D8D] mt-5 grid grid-cols-3 gap-4 ">
            <div className="contectUs mt-[30px] ms-[60px] text-start">
                <h1 className="pt-serif-bold text-2xl text-[#FFFFFF]">Contact us</h1>
                <span className="google-sans-flex mt-5 text-[#FFFFFF]">Get in touch for enquiries, feedback, complaints and compliments.</span>
                <Link to="096 391 9316" className="google-sans-flex text-[#FFFFFF]">Phone: 096 391 9316</Link><br />
                <Link to="sok.soth@rupp.edu.kh " className="google-sans-flex text-[#FFFFFF]">Email: sok.soth@rupp.edu.kh </Link><br />
                <div className=" mt-[30px] ">
                    <Link to="./contectUs.html" className=" rounded-md mt-2.5 border-purple-200 text-[#FFFFFF] hover:border-transparent hover:bg-[#FFFFFF] hover:text-[#0046FF] active:bg-[#FFFFFF] hover:w-[200px] hover:h-[50px]">Contect Us</Link>
                </div>
            </div>
            <div className="followUs mt-[30px] border-x-2 border-[#FFFFFF] ">
                <div className="followUsContect ms-[100px]">
                    
                    <h1 className="pt-serif-bold text-2xl text-[#FFFFFF] text-start">Follow us</h1>
                    <div className="grid-rows-2">
                        <div className="facebook mt-5 flex ">
                            <Link to="https://web.facebook.com/foerupp" target="_blank" className="text-[#FFFFFF] hover:text-[#0046FF]"><i className="fa-brands fa-facebook text-2xl text-start"></i></Link>
                            <Link to="https://web.facebook.com/foerupp" target="_blank" className="text-[#FFFFFF] hover:text-[#0046FF] text-2xl google-sans-flex ms-2.5">Facebook</Link>
                        </div>
                        <div className="youtube mt-5 flex">
                            <Link to="https://www.youtube.com/@AcademicINSETFacultyofEducatio" target="_blank" className="text-[#FFFFFF] hover:text-[#BF1A1A]"><i className="fa-brands fa-youtube text-2xl "></i></Link>
                            <Link to="https://www.youtube.com/@AcademicINSETFacultyofEducatio" target="_blank" className="text-[#FFFFFF] hover:text-[#BF1A1A] text-2xl google-sans-flex ms-2.5">YouTube And Resource </Link>
                        </div>
                        <div className="youtube mt-5 flex">
                            <img src={logoMoeY} alt="" className="w-[30px] h-[30px]" />
                            <Link to="https://play.google.com/store/apps/details?id=com.geip.edtech&pcampaignid=web_share" target="_blank" className="text-[#FFFFFF] hover:underline hover:underline-offset-1 text-2xl google-sans-flex ms-2.5">PlayStore</Link><span className="text-[#FFFFFF] text-2xl google-sans-flex ms-2.5"> and</span> 
                            <Link to="https://apps.apple.com/us/app/geip-edtech/id6504125594" target="_blank" className="text-[#FFFFFF] hover:underline hover:underline-offset-1 text-2xl google-sans-flex ms-2.5">AppStore</Link>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="rightWeb grid-rows-2">
                <div className="Detail mt-5">
                    <span className="google-sans-flex text-[#FFFFFF]  text-left "> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dignissimos facilis similique dolorem eligendi atque. Quasi enim accusantium consectetur architecto labore laborum voluptatibus, iure harum sequi incidunt inventore culpa! Architecto.</span>
                </div>
                <div className="logo">
                    <img src={logo} alt="" className="w-[100px] h-[100px]"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default FooterWeb