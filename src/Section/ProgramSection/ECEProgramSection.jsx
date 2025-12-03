import HeaderProgram from "../../component/ProjectComponent/HeaderProgram"
import LupEce15CreditCertificateSection from "./ECECertificate/LupEce15CreditCertificateSection"
import LupEce4CreditCertificateSection from "./ECECertificate/LupEce4CreditCertificateSection"
import LupEce36CreditCertificateSection from "./ECECertificate/LupEce36CreditCertificateSection"
import LupEceBASection from './ECEBA/LupEceBASection'
import LupEceMasterSection from './ECEMaster/LupEceMasterSection'
import LupEcePhdSection from './ECEPHD/LupEcePhdSection'
function ECEProgramSection(){
    return(
        <>
            <div className={` "hidden":"block"} content mt-[120px] w-full `}>
                <HeaderProgram/>
                <div className="flex justify-center ">
                <div className="ProgramContent grid grid-rows w-[1230px] overflow-hidden ">
                    <div className="content flex h-[50px] bg-[#3396D3]">
                        <div className="credit w-40 border">
                            <p className='mt-4 siemreap-regular text-white '>ក្រេឌីត</p>
                        </div>
                        <div className="creditDetail w-[1070px] border">
                            <p className='mt-4 siemreap-regular text-white'>ការពិពណ៌នាមុខវិជ្ជា និងលទ្ធផលការសិក្សា</p>
                        </div>
                    </div>
                </div>
                </div>
                <LupEce4CreditCertificateSection/>
                <LupEce15CreditCertificateSection/>
                <LupEce36CreditCertificateSection/>
                <LupEceBASection/>
                <LupEceMasterSection/>
                <LupEcePhdSection/>
            </div>
        </>
    )
}
export default ECEProgramSection