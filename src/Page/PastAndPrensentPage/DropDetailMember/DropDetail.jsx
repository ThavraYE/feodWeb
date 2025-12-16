// import { useState, useRef, useEffect } from "react";
// import AllDetailMem from "../AllDetailMem"

// function DropDetail({ drop, setDrop,selectedProgram}) {
//   const [heightDropDown, setHeightDropDown] = useState(0);
//   const [selectedCredit, setSelectedCredit] = useState("63 Credit");
//   const bodyDropDown = useRef(null);

//   useEffect(() => {

//     // if(selectedProgram==="Early Childhood Education Program"){
//     if (drop) {
//       const bodyHeight = bodyDropDown.current.scrollHeight;
//       setHeightDropDown(bodyHeight + 20);
//     } else {
//       setHeightDropDown(0);
//       scrollToTop();
//     }
//   // }
//   }, [drop,selectedCredit]);

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
//             <AllDetailMem/>
//             <div className=" w-full justify-end flex p-4 gap-4 h-1/10 mt-4">
//               <button onClick={scrollToTop} className=" text-white bg-[#3396D3] px-3 py-2">
//                 <i className="fa-solid fa-angle-up"></i>To Top 
//               </button>
//               <button
//                 onClick={() => setDrop(!drop)}
//                 className="  text-white bg-red-500 px-3 py-2"
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
// }

// export default DropDetail;





import { useState, useRef, useEffect } from "react";
import AllDetailMem from "../AllDetailMem";

function DropDetail({ drop, setDrop, selectedMember }) {
  const [heightDropDown, setHeightDropDown] = useState(0);
  const bodyDropDown = useRef(null);

  useEffect(() => {
    if (drop && bodyDropDown.current) {
      const bodyHeight = bodyDropDown.current.scrollHeight;
      setHeightDropDown(bodyHeight + 20);
    } else {
      setHeightDropDown(0);
    }
  }, [drop, selectedMember]);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!drop) return null;

  return (
    <section
      className="fixed top-0 left-0 w-full bg-white shadow-2xl z-50 transition-all duration-700 ease-in-out overflow-y-auto"
      style={{ height: heightDropDown > 0 ? `${heightDropDown}px` : '0px', maxHeight: '100vh' }}
    >
      <div className="relative w-full h-full">
        <div ref={bodyDropDown} className="w-full h-fit pt-8">
          <AllDetailMem selectedMember={selectedMember} />
          <div className="w-full justify-end flex p-4 gap-4 mt-4">
            <button
              onClick={scrollToTop}
              className="text-white bg-[#3396D3] px-4 py-2 rounded-md hover:bg-[#2680b8] transition-colors flex items-center gap-2"
            >
              <i className="fa-solid fa-angle-up"></i>
              To Top
            </button>
            <button
              onClick={() => setDrop(false)}
              className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition-colors flex items-center gap-2"
            >
              <i className="fa-solid fa-times"></i>
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DropDetail;