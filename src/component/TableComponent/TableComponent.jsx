// function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

// function handleClick(message, onlinktablesate,onProgramClick,program){
//     onProgramClick(program);
//     if(message){
//         onlinktablesate(false);
        
//     }
//     setTimeout(() => {onlinktablesate(!message);}, 200);
    
// }
// function TeacherhandleClick(message, onlinktablesateTeacher,onProgramClick,program){
//     onProgramClick(program);
//     scrollToTop()
//     if(message){
//         onlinktablesateTeacher(false);
        
//     }
//     setTimeout(() => {onlinktablesateTeacher(!message);}, 200);
    
// }

// function handleClickBa(messageBa, onlinktablesateBa,onProgramClick,program){
//     onProgramClick(program);
//     scrollToTop()
//     if(messageBa){
//         onlinktablesateBa(false);
//     }
//     setTimeout(() => {
//         onlinktablesateBa(!messageBa);
//     }, 200);
    
// }
// function TeacherhandleClickBa(messageBa, onlinktablesateTeacherBa,onProgramClick,program){
//     onProgramClick(program);
//     scrollToTop()
//     if(messageBa){
//         onlinktablesateTeacherBa(false);
        
//     }
//     setTimeout(() => {onlinktablesateTeacherBa(!messageBa);}, 200);
    
// }

// function handleClickMa(messageMa, onlinktablesateMa,onProgramClick,program){
//     onProgramClick(program);
//     scrollToTop()
//     if(messageMa){
//         onlinktablesateMa(false);
//     }
//     setTimeout(() => {
//         onlinktablesateMa(!messageMa);
//     }, 200);
    
// }
// function TeacherhandleClickMa(messageMa, onlinktablesateTeacherMa,onProgramClick,program){
//     onProgramClick(program);
//     scrollToTop()
//     if(messageMa){
//         onlinktablesateTeacherMa(false);
        
//     }
//     setTimeout(() => {onlinktablesateTeacherMa(!messageMa);}, 200);
    
// }

// function handleClickPhd(messagePhd, onlinktablesatePhd,onProgramClick,program){
//     onProgramClick(program);
//     scrollToTop()
//     if(messagePhd){
//         onlinktablesatePhd(false);
//     }
//     setTimeout(() => {
//         onlinktablesatePhd(!messagePhd);
//     }, 200);
    
// }
// function TeacherhandleClickPhd(messagePhd, onlinktablesateTeacherPhd,onProgramClick,program){
//     onProgramClick(program);
//     scrollToTop()
//     if(messagePhd){
//         onlinktablesateTeacherPhd(false);
        
//     }
//     setTimeout(() => {onlinktablesateTeacherPhd(!messagePhd);}, 200);
    
// }

// function TableComponent( {onProgramClick, program, teacherEducation, principalEducation, linktablesate, onlinktablesate,linktablesateBa,onlinktablesateBa,
//   linktablesateMa,onlinktablesateMa,linktablesatePhd,onlinktablesatePhd,linktablesateTeacher,onlinktablesateTeacher,linktablesateTeacherBa,onlinktablesateTeacherBa,
//   linktablesateTeacherMa,onlinktablesateTeacherMa,linktablesateTeacherPhd,onlinktablesateTeacherPhd}) {
//     return   <div className=" w-1/2 flex flex-col items-center justify-center ">
//                 <h1 className=" text-2xl font-bold p-4">
//                   {" "}
//                   {program}
//                 </h1>
//                 <table className="m-4 border-collapse">
//                   <thead>
//                     <tr className="bg-[#3396D3] text-white">
//                       <th  className="p-4 border border-black">
//                         Teacher Education
//                       </th>
//                       <th className="p-4 border border-black">
//                         Principal Education
//                       </th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     <tr>
//                       <td onClick={(message) => TeacherhandleClick(linktablesateTeacher,onlinktablesateTeacher,onProgramClick,program)} className="p-4 text-start hover:underline cursor-pointer border">
//                         {teacherEducation[0]}
//                       </td>
//                       <td onClick={(message) => handleClick(linktablesate,onlinktablesate,onProgramClick,program)} className="p-4 text-start hover:underline cursor-pointer border">
//                         {principalEducation[0]}
//                       </td>
//                     </tr>

//                     <tr>
//                       <td onClick={(messageBa) => TeacherhandleClickBa(linktablesateTeacherBa,onlinktablesateTeacherBa,onProgramClick,program)} className="p-4 border hover:underline cursor-pointer">{teacherEducation[1]}</td>
//                       <td onClick={(messageBa) => handleClickBa(linktablesateBa,onlinktablesateBa,onProgramClick,program)} className="p-4 border hover:underline cursor-pointer">{principalEducation[1]}</td>
//                     </tr>

//                     <tr>
//                       <td onClick={(messageMa) => TeacherhandleClickMa(linktablesateTeacherMa,onlinktablesateTeacherMa,onProgramClick,program)} className="p-4 text-start hover:underline cursor-pointer border">
//                         {teacherEducation[2]}
//                       </td>
//                       <td onClick={(messageMa) => handleClickMa(linktablesateMa,onlinktablesateMa,onProgramClick,program)}  className="p-4 text-start hover:underline cursor-pointer border">
//                         {principalEducation[2]}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td onClick={(message) => TeacherhandleClickPhd(linktablesateTeacherPhd,onlinktablesateTeacherPhd,onProgramClick,program)} className="p-4 text-start hover:underline cursor-pointer border">
//                         {teacherEducation[3]}
//                       </td>
//                       <td onClick={(message) => handleClickPhd(linktablesatePhd,onlinktablesatePhd,onProgramClick,program)} className="p-4 text-start hover:underline cursor-pointer border">
//                         {principalEducation[3]}
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>;
           
// }

// export default TableComponent;


const DEGREE_LEVELS = ["certificate", "bachelor", "master", "phd"];

export default function TableComponent({
  program,
  teacher,          // renamed from teacherEducation for consistency
  principal,        // renamed from principalEducation
  onProgramClick,
  setDropdownStates,
}) {
  const handleClick = (level, isTeacher = false) => {
    // 1. Set the selected program
    onProgramClick(program);

    // 2. Open the correct dropdown
    const key = isTeacher ? `teacher${level.charAt(0).toUpperCase() + level.slice(1)}` : level;

    setDropdownStates((prev) => ({
      ...prev,
      [key]: true,   // ← open this dropdown
    }));

    // Optional: scroll to top except for certificate
    if (level !== "certificate") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="w-1/2 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold p-4">{program}</h1>
      <table className="m-4 border-collapse w-full max-w-2xl">
        <thead>
          <tr className="bg-[#1C4D8D] text-white">
            <th className="p-4 border border-black">Teacher Education</th>
            <th className="p-4 border border-black">Principal Education</th>
          </tr>
        </thead>
        <tbody>
          {DEGREE_LEVELS.map((level, index) => (
            <tr key={level}>
              <td
                onClick={() => handleClick(level, true)}
                className="p-4 text-start hover:underline cursor-pointer border hover:bg-blue-50 transition-colors"
              >
                {teacher[index]}
              </td>
              <td
                onClick={() => handleClick(level)}
                className="p-4 text-start hover:underline cursor-pointer border hover:bg-blue-50 transition-colors"
              >
                {principal[index]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}