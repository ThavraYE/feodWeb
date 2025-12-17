import imageRupp from "../../assets/image/image.png";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import DropDownProgram from "../../Page/ProgramPage/dropDown/DropDownProgram";
import DropDownBaProgram from "../../Page/ProgramPage/dropDown/DropDownBaProgram";
import TableComponent from "../../component/TableComponent/TableComponent";
import DropDownMaProgram from "./dropDown/DropDownMaProgram";
import DropDownPhdProgram from "./dropDown/DropDownPhdProgram";
import TeacherDropDownProgram from "./dropDown/TeacherDropDownProgram";
import TeachDropDownBaProgram from "./dropDown/TeachDropDownBaProgram";
import TeachDropDownMaProgram from "./dropDown/TeachDropDownMaProgram";
import TeachDropDownPhdProgram from "./dropDown/TeachDropDownPhdProgram";
import EceImg from "../../assets/image/swipperImg2_1.jpg"

function ProgramPage() {
  const sectionPage = {
    eceProgram: useRef(null),
    peProgram: useRef(null),
    seProgram: useRef(null),
  };
  const tableProgram = [
    {
      program: "Early Childhood Education Program",
      teacherEducation: [
        "Certificate Program",
        "Bachelor's Degree Program",
        "Master's Degree Program",
        "PhD's Degree Program",
      ],
      principalEducation: [
        "Certificate Program",
        "Bachelor's Degree Program",
        "Master's Degree Program",
        "PhD's Degree Program",
      ],
    },
    {
      program: "Primary Education Program",
      teacherEducation: [
        "Certificate Program",
        "Bachelor's Degree Program",
        "Master's Degree Program",
        "PhD's Degree Program",
      ],
      principalEducation: [
        "Certificate Program",
        "Bachelor's Degree Program",
        "Master's Degree Program",
        "PhD's Degree Program",
      ],
    },
    {
      program: "Secondary Education Program",
      teacherEducation: [
        "Certificate Program",
        "Bachelor's Degree Program",
        "Master's Degree Program",
        "PhD's Degree Program",
      ],
      principalEducation: [
        "Certificate Program",
        "Bachelor's Degree Program",
        "Master's Degree Program",
        "PhD's Degree Program",
      ],
    },
  ];
  const navPage = [
    {
      label: "Early Childhood Education Program",
      sectionNav: sectionPage.eceProgram,
    },
    {
      label: "Primary Education Program",
      sectionNav: sectionPage.peProgram,
    },
    {
      label: "Secondary Education Program",
      sectionNav: sectionPage.seProgram,
    },
  ];
  const num=[1,2,3]
  const scrollTo = (Ref) => {
    const yOffset = -900;
    const element = Ref.current;
    const elementTop = element.getBoundingClientRect().top;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    console.log(elementTop);
    Ref.current.scrollIntoView({ top: y, behavior: "smooth" });
  };
  
  const [state, setState] = useState(false);

  //For Lup
  const [handleDropDown, setHandleDropDown] = useState(false);
  const [handleDropDownBa, setHandleDropDownBa] = useState(false);
  const [handleDropDownMa, setHandleDropDownMa] = useState(false);
  const [handleDropDownPhd, setHandleDropDownPhd] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [handleDropDown]);

  // add new function 
  const [selectedProgram, setSelectedProgram] = useState("");
  // This function will be called from TableComponent
  const handleProgramClick = (programName) => {
    console.log("Clicked Program:", programName);     
    setSelectedProgram(programName);
  };

  //for Tup
 const [handleTeacherDropDown, setHandleTeacherDropDown] = useState(false);
 const [handleTeacherDropDownBa, setHandleTeacherDropDownBa] = useState(false);
 const [handleTeacherDropDownMa, setHandleTeacherDropDownMa] = useState(false);
 const [handleTeacherDropDownPhd, setHandleTeacherDropDownPhd] = useState(false);

  return (
    <>
      <section className=" w-full relative  ">
        <DropDownProgram setHandleDropDown={setHandleDropDown} handleDropDown={handleDropDown} selectedProgram={selectedProgram} setSelectedProgram={setSelectedProgram} />
        <DropDownBaProgram setHandleDropDownBa={setHandleDropDownBa} handleDropDownBa={handleDropDownBa} selectedProgram={selectedProgram} setSelectedProgram={setSelectedProgram}/>
        <DropDownMaProgram setHandleDropDownMa={setHandleDropDownMa} handleDropDownMa={handleDropDownMa} selectedProgram={selectedProgram} setSelectedProgram={setSelectedProgram}/>
        <DropDownPhdProgram setHandleDropDownPhd={setHandleDropDownPhd} handleDropDownPhd={handleDropDownPhd} selectedProgram={selectedProgram} setSelectedProgram={setSelectedProgram}/>
        <TeacherDropDownProgram setHandleTeacherDropDown={setHandleTeacherDropDown} handleTeacherDropDown={handleTeacherDropDown} selectedProgram={selectedProgram} setSelectedProgram={setSelectedProgram}/> 
        <TeachDropDownBaProgram setHandleTeacherDropDownBa={setHandleTeacherDropDownBa} handleTeacherDropDownBa={handleTeacherDropDownBa} selectedProgram={selectedProgram} setSelectedProgram={setSelectedProgram}/> 
        <TeachDropDownMaProgram setHandleTeacherDropDownMa={setHandleTeacherDropDownMa} handleTeacherDropDownMa={handleTeacherDropDownMa} selectedProgram={selectedProgram} setSelectedProgram={setSelectedProgram}/>
        <TeachDropDownPhdProgram setHandleTeacherDropDownPhd={setHandleTeacherDropDownPhd} handleTeacherDropDownPhd={handleTeacherDropDownPhd} selectedProgram={selectedProgram} setSelectedProgram={setSelectedProgram}/>
        <div className="w-full relative h-[400px]">
          <img className=" w-full h-full object-cover" src={imageRupp} alt="" />
          <div className=" absolute w-full left-0 top-0 bg-black/50 brightness-50 h-full "></div>
          <div className=" absolute flex flex-col gap-5  items-start bottom-5 left-12 h-60">
            <h1 className=" text-4xl font-bold text-white brightness-100">
              Program{" "}
            </h1>
            <p className=" w-1/2 text-justify text-white">
              The Faculty of Education (FoEd) stands as a beacon of academic
              excellence with its three pivotal departments: Educational
              Studies, Higher Education Management and Development, and Lifelong
              Learning. At the heart of FoEd lies our Center for Educational
              Research and Training, a hub for cutting-edge educational
              practices and innovations. Our programs span a comprehensive
            </p>
            <div className=" text-white w-full h-20 flex items-end font-bold">
              {navPage.map((index) => {
                return (
                  <button
                    key={index.label}
                    onClick={() => scrollTo(index.sectionNav)}
                    className=" text-sm p-2 cursor-pointer hover:underline"
                  >
                    {index.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <section className=" w-full p-4  ">
          <div className=" w-full h-full relative">

            {navPage.map((index,idx)=>{ 
              return(
                <div className={`ProgramImg mt-7  absolute rounded-md overflow-hidden
                  ${
                    (idx==0) ? "left-[135px] top-13":(idx==1) ? "right-[135px] top-108":"left-[135px] top-203"
                  }`} key={idx} >
                    <img src={EceImg} alt="" className="w-120 h-72"/>
                </div>
              );
            })}
            
            <div className=" absolute top-0 left-1/2 -translate-x-1/2  w-20 h-full">
              <div className=" w-full h-full relative ">
                <div className=" absolute -translate-x-1/2 left-1/2 w-2 h-full bg-[#3396D3]"></div>
                <div className=" absolute top-2 w-10 h-10 -translate-x-1/2 left-1/2 rounded-full bg-[#3396D3]">
                  {" "}
                </div>
                <div className=" absolute top-100 w-10 h-10 -translate-x-1/2 left-1/2 rounded-full bg-[#3396D3]">
                  {" "}
                </div>
                <div className=" absolute top-193 w-10 h-10 -translate-x-1/2 left-1/2 rounded-full bg-[#3396D3]">
                  {" "}
                </div>
              </div>
            </div>
            {tableProgram.map((items, idx) => {
              return (
                <section
                  className={`w-full flex flex-col ${
                    idx % 2 !== 0 ? "items-start" : "items-end"
                  } `}
                  key={idx}
                >
                  <TableComponent
                    onProgramClick={handleProgramClick}

                    linktablesate={handleDropDown}
                    onlinktablesate={setHandleDropDown}
                    linktablesateBa={handleDropDownBa}
                    onlinktablesateBa={setHandleDropDownBa}
                    linktablesateMa={handleDropDownMa}
                    onlinktablesateMa={setHandleDropDownMa}
                    linktablesatePhd={handleDropDownPhd}
                    onlinktablesatePhd={setHandleDropDownPhd}

                    linktablesateTeacher={handleTeacherDropDown}
                    onlinktablesateTeacher={setHandleTeacherDropDown}
                    linktablesateTeacherBa={handleTeacherDropDownBa}
                    onlinktablesateTeacherBa={setHandleTeacherDropDownBa}
                    linktablesateTeacherMa={handleTeacherDropDownMa}
                    onlinktablesateTeacherMa={setHandleTeacherDropDownMa}
                    linktablesateTeacherPhd={handleTeacherDropDownPhd}
                    onlinktablesateTeacherPhd={setHandleTeacherDropDownPhd}
                    {...items}
                  />{" "}
                </section>
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
}

export default ProgramPage;
