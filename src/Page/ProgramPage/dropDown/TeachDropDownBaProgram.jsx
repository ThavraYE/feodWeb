import { useState, useRef, useEffect } from "react";
import TeachEceBaDetail from "../../../Section/ProgramSection/ECEBA/TeachEceBaDetail"
import TupSeBaProgram from "../../../Section/ProgramSection/SE/TUP/TupSeBaProgram";
import { BATUP_DATA } from "../../../Utils/Utils";

export default function TeacherDropDownBaProgram({
  isOpen,
  setIsOpen,
  selectedProgram,
}) {
  const containRef = useRef(null);
  const [selectedCredit, setSelectedCredit] = useState("63 Credit");
  const [selectedMainSubject, setSelectedMainSubject] = useState("អក្សរសាស្ត្រខ្មែរ");

  useEffect(() => {
    if (isOpen) {
      setSelectedCredit("63 Credit");
      setSelectedMainSubject("អក្សរសាស្ត្រខ្មែរ");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 "
      onClick={() => setIsOpen(false)} // click outside to close
    >
      <div ref={containRef}
        className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden  rounded-md shadow-2xl h-170 top-30 sticky"
        onClick={e => e.stopPropagation()} 
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-8 py-5 flex items-center justify-between z-10">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {selectedProgram}
            </h1>
            <p className="text-lg font-semibold text-gray-700 mt-1">
              Bachelor Program
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="px-5 py-2 bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white rounded-md transition"
          >
            Close
          </button>
        </div>

        <div className="p-6 md:p-8">
          {/* Credit tabs - only for Early Childhood */}
          {
            <div className="flex flex-wrap gap-3 mb-8 border-b pb-3">
              {["63 Credit"].map(credit => (
                <button
                  key={credit}
                  onClick={() => setSelectedCredit(credit)}
                  className={`
                    px-5 py-2 rounded-full font-medium transition
                    ${selectedCredit === credit 
                      ? "bg-[#1C4D8D] text-white shadow-md" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
                  `}
                >
                  {credit}
                </button>
              ))}
            </div>
          }

          {
            (selectedProgram==="Early Childhood Education Program")?
            (
            <>
              {selectedCredit === "63 Credit" && "Content for "+selectedProgram+" Program (coming soon)" }
             
            </>):((selectedProgram==="Primary Education Program")?
                  (
                   <>
                    {selectedCredit === "63 Credit" && "Content for "+selectedProgram+" Program (coming soon)" }
                  </> 
                  ):(
                      <div className="flex flex-wrap gap-3 mb-8 border-b pb-3">
                        {["អក្សរសាស្ត្រខ្មែរ","គណិតវិទ្យា","រូបវិទ្យា","គីមី","ជីវវិទ្យា","ប្រវត្តិវិទ្យា"].map(mainSubject => (
                        <button
                        key={mainSubject}
                        onClick={() => setSelectedMainSubject(mainSubject)}
                        className={`
                          px-5 py-2 rounded-full font-medium transition hover:cursor-pointer
                          ${selectedMainSubject === mainSubject 
                          ? "bg-[#1C4D8D] text-white shadow-md " 
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
                        `}
                        >
                          {mainSubject}
                        </button>
                      ))}
                      </div>
                       
                  )
            )
          }
          {
            (selectedProgram==="Secondary Education Program")?
            (<TupSeBaProgram
                selectedSubject={selectedMainSubject}
              />):""
          }

        </div>

        {/* Footer with scroll to top */}
        <div className="sticky bottom-0 bg-white border-t px-8 py-4 flex justify-end">
          <button
            onClick={() => containRef.current.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center hover:cursor-pointer gap-2 px-5 py-2 bg-[#1C4D8D] hover:bg-blue-600 text-white rounded-md transition"
          >
            <span>↑</span> Back to Top
          </button>
        </div>
      </div>
    </div>
  );
}