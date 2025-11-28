<<<<<<< HEAD
import imageRupp from "../../assets/image/image.png";
import React, { useRef } from "react";

function ProgramPage() {
  const sectionPage = {
    eceProgram: useRef(null),
    peProgram: useRef(null),
    seProgram: useRef(null),
  };
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
  const scrollTo = (Ref) => {
    const yOffset = -900;
    const element = Ref.current;
    const elementTop = element.getBoundingClientRect().top;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    console.log(elementTop);
    Ref.current.scrollIntoView({ top: y, behavior: "smooth" });
  };
  return (
    <>
      <section className=" w-full  ">
        <div className=" mt-30 w-full relative h-[400px]">
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
            <div className=" absolute top-0 left-1/2 -translate-x-1/2  w-20 h-full">
            <div className=" w-full h-full relative ">
              <div className=" absolute -translate-x-1/2 left-1/2 w-2 h-full bg-[#3396D3]"></div>
              <div className=" absolute top-2 w-10 h-10 -translate-x-1/2 left-1/2 rounded-full bg-[#3396D3]"> </div>
              <div className=" absolute top-83 w-10 h-10 -translate-x-1/2 left-1/2 rounded-full bg-[#3396D3]"> </div>
              <div className=" absolute top-165 w-10 h-10 -translate-x-1/2 left-1/2 rounded-full bg-[#3396D3]"> </div>
            </div>
            </div>

            <section className=" w-full flex flex-col items-end">
            <div className=" w-1/2 flex flex-col items-center justify-center ">
             <h1 className=" text-2xl font-bold p-4">
              {" "}
              Primary Education Program
            </h1>
            <table className=" m-4">
                  <tr className=" border bg-[#3396D3] text-white p-4 ">
                    <th className="p-4 border-black border">Teacher Education</th>
                    <th className="p-4 border-black border">Principal Education</th>
                  </tr>
                  <tr className=" border p-2 ">
                    <th className="p-4 text-start ">Certificate Program</th>
                    <th className="p-4 text-start border">Certificate Program</th>
                  </tr>
                  <tr className=" border p-2 ">
                    <th className="p-4">Bachelor's Degree Program</th>
                    <th className="p-4 border">Bachelor's Degree Program</th>
                  </tr>
                  <tr className=" border p-2 ">
                    <th className="p-4 text-start">Master's Degree Program</th>
                    <th className="p-4 text-start border">Master's Degree Program</th>
                  </tr>
                </table>
            </div>

          </section>
            
            

          <section className=" w-full flex items-start">
            <div className=" w-1/2 flex flex-col items-center justify-center ">
             <h1 className=" text-2xl font-bold p-4">
              {" "}
              Primary Education Program
            </h1>
            <table className=" m-4">
                  <tr className=" border bg-[#3396D3] text-white p-4 ">
                    <th className="p-4 border-black border">Teacher Education</th>
                    <th className="p-4 border-black border">Principal Education</th>
                  </tr>
                  <tr className=" border p-2 ">
                    <th className="p-4 text-start ">Certificate Program</th>
                    <th className="p-4 text-start border">Certificate Program</th>
                  </tr>
                  <tr className=" border p-2 ">
                    <th className="p-4">Bachelor's Degree Program</th>
                    <th className="p-4 border">Bachelor's Degree Program</th>
                  </tr>
                  <tr className=" border p-2 ">
                    <th className="p-4 text-start">Master's Degree Program</th>
                    <th className="p-4 text-start border">Master's Degree Program</th>
                  </tr>
                </table>
            </div>

          </section>
          <section className=" w-full flex flex-col items-end">
            <div className=" w-1/2 flex flex-col items-center justify-center ">
             <h1 className=" text-2xl font-bold p-4">
              {" "}
              Secondary Education Program
            </h1>
            <table className=" m-4">
                  <tr className=" border bg-[#3396D3] text-white p-4 ">
                    <th className="p-4 border-black border">Teacher Education</th>
                    <th className="p-4 border-black border">Principal Education</th>
                  </tr>
                  <tr className=" border p-2 ">
                    <th className="p-4 text-start ">Certificate Program</th>
                    <th className="p-4 text-start border">Certificate Program</th>
                  </tr>
                  <tr className=" border p-2 ">
                    <th className="p-4">Bachelor's Degree Program</th>
                    <th className="p-4 border">Bachelor's Degree Program</th>
                  </tr>
                  <tr className=" border p-2 ">
                    <th className="p-4 text-start">Master's Degree Program</th>
                    <th className="p-4 text-start border">Master's Degree Program</th>
                  </tr>
                </table>
            </div>

          </section>
           
            
            
          </div>
          
        </section>
      </section>
    </>
  );
}

export default ProgramPage;
=======
import ECEProgramSection from "../../Section/ProgramSection/ECEProgramSection"
function ProgramPage(){
    return(
        <>
            <div className="grid grid-row ">
                <ECEProgramSection/>
            </div>
        </>
    )
}
export default ProgramPage
>>>>>>> fb2718945496f60f5c4337b91bd2353cefc32107
