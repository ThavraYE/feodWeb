import HeaderProgram from "../../component/ProjectComponent/HeaderProgram"
import LupEce15CreditCertificateSection from "./ECECertificate/LupEce15CreditCertificateSection";
import LupEce4CreditCertificateSection from "./ECECertificate/LupEce4CreditCertificateSection";
function ECEProgramSection(){
    return(
        <>
            <div className="content mt-[120px] w-full ">
                <HeaderProgram/>
                <div className="flex justify-center">
                <div className="ProgramContent grid grid-rows w-[1230px] rounded-t-lg overflow-hidden">
                    <div className="content flex h-[50px] bg-blue-400">
                        <div className="credit w-40">
                            <p className='mt-4 siemreap-regular'>ក្រេឌីត</p>
                        </div>
                        <div className="creditDetail w-[1070px]">
                            <p className='mt-4 siemreap-regular'>ការពិពណ៌នាមុខវិជ្ជា និងលទ្ធផលការសិក្សា</p>
                        </div>
                    </div>
                </div>
                </div>
                <LupEce4CreditCertificateSection/>
                <LupEce15CreditCertificateSection/>
            </div>
        </>
    )
}
export default ECEProgramSection