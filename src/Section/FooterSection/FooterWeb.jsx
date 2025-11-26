import { Link } from 'react-router-dom'
import logo from '../assets/image/foedLOgo-removebg-preview.png'
function FooterWeb(){
    return(
        <>
        <div className="footer w-full h-[400px] bg-[#3396D3] mt-[20px] grid grid-cols-3 gap-4 rounded-md">
            <div className="contectUs mt-[30px] ms-[60px] text-start">
                <h1 className="pt-serif-bold text-2xl text-[#FFFFFF]">Contact us</h1>
                <span className="google-sans-flex mt-[20px] text-[#FFFFFF]">Get in touch for enquiries, feedback, complaints and compliments.</span>
                <Link to="096 391 9316" className="google-sans-flex text-[#FFFFFF]">Phone: 096 391 9316</Link><br />
                <Link to="sok.soth@rupp.edu.kh " className="google-sans-flex text-[#FFFFFF]">Email: sok.soth@rupp.edu.kh </Link><br />
                <div className="w-[180px]  h-[50px] mt-[30px]">
                    <Link to="./contectUs.html" className=" rounded-full mt-[10px] border-purple-200 text-[#FFFFFF] hover:border-transparent hover:bg-[#FFFFFF] hover:text-[#0046FF] active:bg-[#FFFFFF]">Contect Us</Link>
                </div>
            </div>
            <div className="followUs mt-[30px] border-x-2 border-[#FFFFFF] ">
                <div className="followUsContect ms-[100px]">
                    
                    <h1 className="pt-serif-bold text-2xl text-[#FFFFFF]">Follow us</h1>
                    <div className="grid-rows-2">
                        <div className="facebook mt-[20px]">
                            <Link to="https://web.facebook.com/foerupp" target="_blank" className="text-[#FFFFFF] hover:text-[#0046FF]"><i className="fa-brands fa-facebook text-2xl text-start"></i></Link>
                            <Link to="https://web.facebook.com/foerupp" target="_blank" className="text-[#FFFFFF] hover:text-[#0046FF] text-2xl google-sans-flex">Facebook</Link>
                        </div>
                        <div className="youtube  mt-[20px]">
                            <Link to="https://www.youtube.com/@AcademicINSETFacultyofEducatio" target="_blank" className="text-[#FFFFFF] hover:text-[#BF1A1A]"><i className="fa-brands fa-youtube text-2xl "></i></Link>
                            <Link to="https://www.youtube.com/@AcademicINSETFacultyofEducatio" target="_blank" className="text-[#FFFFFF] hover:text-[#BF1A1A] text-2xl google-sans-flex">YouTube And Resource </Link>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="rightWeb grid-rows-2">
                <div className="Detail mt-[20px]">
                    <span className="google-sans-flex text-[#FFFFFF]"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dignissimos facilis similique dolorem eligendi atque. Quasi enim accusantium consectetur architecto labore laborum voluptatibus, iure harum sequi incidunt inventore culpa! Architecto.</span>
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