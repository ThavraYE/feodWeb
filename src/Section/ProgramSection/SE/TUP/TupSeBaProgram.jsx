import {useLocation,useParams, useNavigate} from "react-router-dom"
import { useState } from "react";
import { BATUP_DATA } from "../../../../Utils/Utils"
export default function TupSeBaProgram({ selectedSubject }){
    
    const filteredData = BATUP_DATA.filter(
    item => item.mainSubject === selectedSubject
  );

  // If no data found (safety)
  if (filteredData.length === 0) {
    return (
      <div className="py-12 text-center text-gray-600 text-lg">
        មិនទាន់មានទិន្នន័យសម្រាប់ {selectedSubject} នៅឡើយទេ...
      </div>
    );
  }

    return(
        <>
            {
                filteredData.map((tupData,index)=>(
                    <div className=" w-full siemreap-regular  p-4" key={index}>
                        <h1 className="siemreap-regular text-start">
                            ការពិពណ៌នាមុខវិជ្ជា និងលទ្ធផលការសិក្សា
                        </h1>
                        <h1 className="siemreap-regular text-start px-5 py-4">ការពិពណ៌នាអំពីកម្មវិធី</h1>
                        <p className="siemreap-regular px-10 py-1 text-justify">
                        &nbsp;&nbsp;&nbsp;&nbsp;{tupData.courseDescription}</p>
                        <p className="siemreap-regular px-7 py-4 text-start">
                                កញ្ចប់សមត្ថភាព និងមុខវិជ្ជាគោល
                        </p>
                        {tupData.competencyPackages.map((_package,index)=>(
                        <div className="siemreap-regular px-10 py-1 flex flex-col items-start" key={index}>
                            <p>{_package.title}</p>
                            {_package.subjects.map((subject, index) => (
                                <p key={index}>&nbsp;&nbsp;&nbsp;&nbsp;{subject}</p>
                            ))}
                        </div>
                        ))}
                        <p className="siemreap-regular px-7  text-start">● លទ្ធផលសិក្សានៃកម្មវិធី (PLOs)</p>
                        <p className="siemreap-regular px-7 py-4 text-start">
                            ពេលបញ្ចប់ការសិក្សា កម្មវិធី ថ្នាក់បរិញ្ញាបត្រ ឯកទេសគ្រប់គ្រងអប់រំ និងយុទ្ធសាស្រ្តសហគមន៍សាលារៀន BA LUP ដោយជោគជ័យ អ្នកសិក្សានឹងមានសមត្ថភាពដូចខាងក្រោម៖
                            លទ្ធផលសិក្សារំពឹងទុករបស់កម្មវិធី (PLOs) 
                        </p>
                        {tupData.programLearningOutcomes.map((cate,index)=>(
                            <div className="siemreap-regular px-10 py-1 flex flex-col items-start" key={index}>
                            <p className="siemreap-regular   text-start" >{cate.category}</p>
                                {cate.plos.map((plo,index)=>(
                                    <p className="siemreap-regular px-4  text-start" key={index}>&nbsp;&nbsp;{plo.id} {plo.titleKh} {plo.titleEn} {plo.description}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                    
                ))
            }
        </>
    )
}