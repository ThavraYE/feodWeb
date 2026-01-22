import imageRupp from "../../assets/image/image.png";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
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

export default function ProgramPage() {
  const sectionRefs = {
    ece: useRef(null),
    pe: useRef(null),
    se: useRef(null),
  };

  const programs = [
    {
      name: "Early Childhood Education Program",
      teacher: ["Certificate Program", "Bachelor's Degree Program", "Master's Degree Program", "PhD Program"],
      principal: ["Certificate Program", "Bachelor's Degree Program", "Master's Degree Program", "PhD Program"],
    },
    {
      name: "Primary Education Program",
      teacher: ["Certificate Program", "Bachelor's Degree Program", "Master's Degree Program", "PhD Program"],
      principal: ["Certificate Program", "Bachelor's Degree Program", "Master's Degree Program", "PhD Program"],
    },
    {
      name: "Secondary Education Program",
      teacher: ["Certificate Program", "Bachelor's Degree Program", "Master's Degree Program", "PhD Program"],
      principal: ["Certificate Program", "Bachelor's Degree Program", "Master's Degree Program", "PhD Program"],
    },
  ];

  const navItems = [
    { label: "Early Childhood Education Program", ref: sectionRefs.ece },
    { label: "Primary Education Program", ref: sectionRefs.pe },
    { label: "Secondary Education Program", ref: sectionRefs.se },
  ];

  const [dropdownStates, setDropdownStates] = useState({
    certificate: false,
    bachelor: false,
    master: false,
    phd: false,
    teacherCertificate: false,
    teacherBachelor: false,
    teacherMaster: false,
    teacherPhd: false,
  });

  const [selectedProgram, setSelectedProgram] = useState("");

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Auto scroll to top when opening certificate dropdown (optional)
  const { pathname } = useLocation();
  useEffect(() => {
    if (dropdownStates.certificate) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.scrollTo({top:0,behavior:"smooth"})
  }, [dropdownStates.certificate],[pathname]);

  return (
    <section className="w-full relative">
      {/* Dropdowns - each checks its own state */}
      <DropDownProgram
        isOpen={dropdownStates.certificate}
        setIsOpen={(v) => setDropdownStates((s) => ({ ...s, certificate: v }))}
        selectedProgram={selectedProgram}
      />
      <DropDownBaProgram
        isOpen={dropdownStates.bachelor}
        setIsOpen={(v) => setDropdownStates((s) => ({ ...s, bachelor: v }))}
        selectedProgram={selectedProgram}
      />
      <DropDownMaProgram
        isOpen={dropdownStates.master}
        setIsOpen={(v) => setDropdownStates((s) => ({ ...s, master: v }))}
        selectedProgram={selectedProgram}
      />
      <DropDownPhdProgram
        isOpen={dropdownStates.phd}
        setIsOpen={(v) => setDropdownStates((s) => ({ ...s, phd: v }))}
        selectedProgram={selectedProgram}
      />

      <TeacherDropDownProgram
        isOpen={dropdownStates.teacherCertificate}
        setIsOpen={(v) => setDropdownStates((s) => ({ ...s, teacherCertificate: v }))}
        selectedProgram={selectedProgram}
      />

      <TeachDropDownBaProgram
        isOpen={dropdownStates.teacherBachelor}
        setIsOpen={(v) => setDropdownStates((s) => ({ ...s, teacherBachelor: v }))}
        selectedProgram={selectedProgram}
      />

      <TeachDropDownMaProgram
        isOpen={dropdownStates.teacherMaster}
        setIsOpen={(v) => setDropdownStates((s) => ({ ...s, teacherMaster: v }))}
        selectedProgram={selectedProgram}
      />

      <TeachDropDownPhdProgram
        isOpen={dropdownStates.teacherPhd}
        setIsOpen={(v) => setDropdownStates((s) => ({ ...s, teacherPhd: v }))}
        selectedProgram={selectedProgram}
      />
      {/* ... add other teacher dropdowns similarly ... */}

      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="w-full relative h-[400px]">
          <img className=" lg:w-full h-full object-cover sm:w-full " src={imageRupp} alt="" />
          <div className=" absolute w-full left-0 top-0 bg-black/50 brightness-50 h-full "></div>
          <div className=" absolute flex flex-col gap-5  items-start bottom-5 left-12 h-60">
            <h1 className=" text-2xl sm:text-3xl lg:text-4xl font-bold text-white brightness-100">
              Program{" "}
            </h1>
            <p className=" w-full sm:w-3/4 lg:w-1/2 text-justify text-white text-sm sm:text-base">
              The Faculty of Education (FoEd) stands as a beacon of academic
              excellence with its three pivotal departments: Educational
              Studies, Higher Education Management and Development, and Lifelong
              Learning. At the heart of FoEd lies our Center for Educational
              Research and Training, a hub for cutting-edge educational
              practices and innovations. Our programs span a comprehensive
            </p>
            <div className=" text-white w-full h-20 flex items-end font-bold">
              {navItems.map((index) => {
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
      </div>

      {/* Timeline + Tables */}
      <section className="p-4 relative min-h-screen">
        {navItems.map((index,idx)=>{ 
              return(
                <div className={`ProgramImg hidden lg:block mt-7 absolute rounded-md overflow-hidden
                  ${
                    (idx==0) ? "lg:left-[135px] lg:top-17 md:left-5 md:top-19 ":(idx==1) ? "lg:right-[135px] lg:top-135 md:right-5  md:top-155":"lg:left-[135px] lg:top-255 md:left-5 md:top-280"
                  }`} key={idx} >
                    <img src={EceImg} alt="" className="w-120 h-72"/>
                </div>
              );
            })}
        
        <div className="absolute left-1/2 -translate-x-1/2 w-20 h-full hidden lg:block">
          <div className="absolute left-1/2 -translate-x-1/2 w-2 h-full bg-[#1C4D8D]" />
          {[40, 400, 950].map((top, i) => (
            <div
              key={i}
              className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1C4D8D] "
              style={{ top: `${top}px` }}
            />
          ))}
        </div>

        {programs.map((item, idx) => (
          <section
            key={item.name}
            className={`flex flex-col mb-24 ${idx % 2 === 0 ? "items-end" : "items-start"}`}
            ref={navItems[idx].ref}
          >
            <TableComponent
              {...item}
              program={item.name}
              onProgramClick={setSelectedProgram}
              setDropdownStates={setDropdownStates}
            />
          </section>
        ))}
      </section>
    </section>
  );
}

