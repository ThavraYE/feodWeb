import HeaderProgram from "../../../component/ProjectComponent/EceHeaderProgram"
import LupEceBASection from './LupEceBASection'
function EceBaProgramSection(props){
    return(
        <>
            <div className={`${(props.state) ? "hidden":"block"} content mt-[120px] w-full `}>
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
                <LupEceBASection/>
            </div>
        </>
    )
}
export default EceBaProgramSection