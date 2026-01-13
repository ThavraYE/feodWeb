import { useState, useRef, useEffect } from "react";
import LupEcePhdProgram from "../../../Section/ProgramSection/ECEPHD/LupEcePhdProgram";
import LupSePhdProgram from "../../../Section/ProgramSection/SE/LUP/LupSePhdProgram";

// function DropDownProgram({ handleDropDownPhd, setHandleDropDownPhd,selectedProgram}) {
//   const [heightDropDown, setHeightDropDown] = useState(0);
//   const [selectedCredit, setSelectedCredit] = useState("54 Credit");
//   const bodyDropDown = useRef(null);
  
 
//   useEffect(() => {
     
//     // if(selectedProgram==="Primary Education Program"){
//     if (handleDropDownPhd) {
//       const bodyHeight = bodyDropDown.current.scrollHeight;
//       setHeightDropDown(bodyHeight + 20);
//     } else {
//       setHeightDropDown(0);
//     }
//     // }
//   }, [handleDropDownPhd,selectedCredit]);

//   function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }
//   function onclickCredit(credit) {
//     setSelectedCredit(credit);
//   }

//   return (
//     <>
//       <section
//         className={` ${
//           heightDropDown > 0 ? "p-4 " : ""
//         }absolute top-0 left-0 w-full bg-white h-[500px] shadow z-50 transition-all duration-700 ease-in-out  overflow-hidden`}
//         style={{ height: heightDropDown }}
//       >
//         <div className=" relative w-full h-full ">
//           <div ref={bodyDropDown} className=" w-full h-fit">

//             <div className="w-full h-fit">
//               <div>
//                 <h1 className=" text-2xl font-bold ">
//                   {selectedProgram}   
//                 </h1>
//               </div>
//               <div className="w-full flex flex-row justify-start">
//                 <p className=" text-lg p-2 font-bold">Phd Program</p>
//               </div>

//               {/* testing code */}
//               {((selectedProgram === "Early Childhood Education Program")? //testing code
//               (<div className="w-full ">
//                 <div className=" flex flex-row py-2">
//                   <p onClick={() => onclickCredit("54 Credit")} className={`${selectedCredit === "54 Credit" ? "bg-[#3396D3] text-white" : " hover:underline"} px-2 py-1 cursor-pointer`}>
//                     {" "}
//                     54 Credit{" "}
//                   </p>
                  
//                 </div>
//               </div>):selectedProgram  // ):selectedProgram is for testing code
//               )}    

//               {
//                 (selectedProgram==="Early Childhood Education Program")?
//                 (selectedCredit === "54 Credit" && <LupEcePhdProgram />):
//                 ""
//               }
              
              
//             </div>

//             <div className=" w-full justify-end flex p-4 gap-4 h-1/10 mt-4">
//               <button onClick={scrollToTop} className=" text-white bg-[#3396D3] px-3 py-2 rounded-md">
//                 <i className="fa-solid fa-angle-up"></i>To Top 
//               </button>
//               <button
//                 onClick={() => setHandleDropDownPhd(!handleDropDownPhd)}
//                 className="  text-white bg-red-500 px-3 py-2 rounded-md"
//               >
//                 {" "}
//                 Close{" "}
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }export default DropDownProgram;

export default function DropDownPhdProgram({
  isOpen,
  setIsOpen,
  selectedProgram,
}) {
  const containRef = useRef(null);
  const [selectedCredit, setSelectedCredit] = useState("4 Credit");

  // Reset to 4 Credit every time dropdown opens
  useEffect(() => {
    if (isOpen) {
      setSelectedCredit("54 Credit");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isEarlyChildhood = selectedProgram ;

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
              PHD Degree Program
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
          {(
            <div className="flex flex-wrap gap-3 mb-8 border-b pb-3">
              {["54 Credit"].map(credit => (
                <button
                  key={credit}
                  onClick={() => setSelectedCredit(credit)}
                  className={`
                    px-5 py-2 rounded-full font-medium transition hover:cursor-pointer
                    ${selectedCredit === credit 
                      ? "bg-[#1C4D8D] text-white shadow-md" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
                  `}
                >
                  {credit}
                </button>
              ))}
            </div>
          )}

          {/* Content */}
          {isEarlyChildhood ? (
            <>
              {selectedCredit === "54 Credit" && <LupEcePhdProgram />}
            </>
          ) : (
            <div className="py-12 text-center text-gray-600 text-lg">
              {selectedProgram === "Primary Education Program"
                ? "Content for Primary Education Certificate Program (coming soon)"
                : <LupSePhdProgram/>}
            </div>
          )}
        </div>

        {/* Footer with scroll to top */}
        <div className="sticky bottom-0 bg-white border-t px-8 py-4 flex justify-end">
          <button
            onClick={() => containRef.current.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 px-5 py-2 bg-[#1C4D8D] hover:cursor-pointer hover:bg-blue-600 text-white rounded-md transition"
          >
            <span>↑</span> Back to Top
          </button>
        </div>
      </div>
    </div>
  );
}