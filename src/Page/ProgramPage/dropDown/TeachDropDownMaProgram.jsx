import { useState, useRef, useEffect } from "react";

function TeachDropDownMaProgram({ handleTeacherDropDownMa, setHandleTeacherDropDownMa,selectedProgram}) {
  const [heightDropDown, setHeightDropDown] = useState(0);
  const [selectedCredit, setSelectedCredit] = useState("4 Credit");
  const bodyDropDown = useRef(null);
  
 
  useEffect(() => {
     
    // if(selectedProgram==="Primary Education Program"){
    if (handleTeacherDropDownMa) {
      const bodyHeight = bodyDropDown.current.scrollHeight;
      setHeightDropDown(bodyHeight + 20);
    } else {
      setHeightDropDown(0);
    }
    // }
  }, [handleTeacherDropDownMa,selectedCredit]);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function onclickCredit(credit) {
    setSelectedCredit(credit);
  }

  return (
    <>
      <section
        className={` ${
          heightDropDown > 0 ? "p-4 " : ""
        }absolute top-0 left-0 w-full bg-white h-[500px] shadow z-50 transition-all duration-700 ease-in-out  overflow-hidden`}
        style={{ height: heightDropDown }}
      >
        <div className=" relative w-full h-full ">
          <div ref={bodyDropDown} className=" w-full h-fit">

            <div className="w-full h-fit">
              <div>
                <h1 className=" text-2xl font-bold ">
                  {selectedProgram} 
                </h1>
              </div>
              <div className="w-full flex flex-row justify-start">
                <p className=" text-lg p-2 font-bold">Master Degree Program</p>
              </div>

              {/* testing code for credit*/}
              {
                (selectedProgram === "Early Childhood Education Program")? //testing code
                (<div className="w-full ">
                  <div className=" flex flex-row py-2">
                    <p onClick={() => onclickCredit("4 Credit")} className={`${selectedCredit === "4 Credit" ? "bg-[#3396D3] text-white" : " hover:underline"} px-2 py-1 cursor-pointer`}>
                      {" "}
                      4 Credit{" "}
                    </p>
                    
                  </div>
                </div>):
                (selectedProgram === "Primary Education Program" )? 
                  "This is Primary Education Program Page" : 
                  "This is Secondery Education Program Page" 
              }    

              {/* for Detail about Program Credit  */}
              {
              (selectedProgram==="Early Childhood Education Program")?
              ((selectedCredit === "4 Credit")? "This For Teacher program ":""):
              (selectedProgram==="Primary Education Program")?
              "This For Teacher program":"This For Teacher program"}
              
              {/* {selectedCredit === "4 Credit" && <DetailFourCredit />} */}
              {/* {selectedCredit === "15 Credit" && <Detail15Credit />} */}
              {/* {selectedCredit === "36 Credit" && <Detail36Credit/>} */}
              
            </div>

            <div className=" w-full justify-end flex p-4 gap-4 h-1/10 mt-4">
              <button onClick={scrollToTop} className=" text-white bg-[#3396D3] px-3 py-2">
                <i className="fa-solid fa-angle-up"></i>To Top 
              </button>
              <button
                onClick={() => setHandleTeacherDropDownMa(!handleTeacherDropDownMa)}
                className="  text-white bg-red-500 px-3 py-2"
              >
                {" "}
                Close{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeachDropDownMaProgram;
