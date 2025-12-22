
function AllDetailMem({ selectedMember }) {
  if (!selectedMember) return null;
  return (
    <div className="bg-gray-100 p-8 min-h-screen mt-25">
      <div className="max-w-6xl mx-auto bg-white shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <div className="bg-gray-50 p-8 md:p-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-light text-blue-600 mb-2">
               {selectedMember.name}
              </h1>
              <p className="text-gray-600 text-lg">{selectedMember.duty}</p>
            </div>
            <div className="flex justify-center mb-8">
              <div className="w-48 h-48 rounded-full bg-gray-300 overflow-hidden">
                <img
                  src={selectedMember.image} 
                  alt="Lorna Alvarado"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">
                Contact
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-phone text-blue-400 mt-1 mr-3"></i>
                  <span className="text-gray-600">{selectedMember.contect[0]}</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-envelope text-blue-400 mt-1 mr-3"></i>
                  <span className="text-gray-600 break-all">
                    {selectedMember.name}{selectedMember.contect[1]}
                  </span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-blue-400 mt-1 mr-3"></i>
                  <span className="text-gray-600">
                    {selectedMember.contect[2]}
                  </span>
                </div>
              </div>
            </div>

            {/* About Me Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">
                About Me
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {selectedMember.memDetail}  
              </p>
            </div>

            {/* Skills Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">
                Skills
              </h2>
              <ul className="space-y-2 text-gray-600">

                {selectedMember.Memskill.map((item)=>{
                  return(
                  <li key={item} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  {item}
                </li>
                )})}

              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 p-8 md:p-12">
            {/* Education Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-gray-300">
                Education
              </h2>

              {/* Education Entry 1 */}
              {selectedMember.memEducation.map((item)=>{
                return(
                  <div className="mb-6 relative pl-6">
                    <div className="absolute left-0 top-1 w-3 h-3 bg-blue-400 rounded-full"></div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {item.degree}
                      </h3>
                      <span className="text-gray-500 text-sm">{item.dateGraduate}</span>
                    </div>
                    <p className="text-blue-600 italic mb-2">{item.school}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.eduDetail}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Experience Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-gray-300">
                Experience
              </h2>

              {/* Experience Entries */}
              {selectedMember.experience.map((exp, index) => (
                <div key={index} className="mb-6 relative pl-6">
                  <div className="absolute left-0 top-1 w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {exp.title}
                    </h3>
                    <span className="text-gray-500 text-sm">{exp.years}</span>
                  </div>
                  <p className="text-blue-600 italic mb-2">{exp.company}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {exp.titleDetail}
                  </p>
                </div>
              ))}
            </div>

            {/* References Section */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-gray-300">
                References
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Reference 1 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Harumi Kobayashi
                  </h3>
                  <p className="text-gray-600 mb-3">Wardiere Inc. / CEO</p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Phone:</span> 123-456-7890
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Email:</span> hello@reallygreatsite.com
                  </p>
                </div>

                {/* Reference 2 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Bailey Dupont
                  </h3>
                  <p className="text-gray-600 mb-3">Wardiere Inc. / CEO</p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Phone:</span> 123-456-7890
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Email:</span> hello@reallygreatsite.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllDetailMem






// function AllDetailMem({ selectedMember }) {
//   if (!selectedMember) return null;

//   return (
//     <div className="max-w-4xl mx-auto p-8 mt-20">
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="md:flex">
//           <div className="md:w-1/3">
//             <img
//               src="https://t4.ftcdn.net/jpg/15/98/56/23/360_F_1598562310_PBaNmPaPyc1TgWjOp3iYMp4mIf8lfQ6n.jpg"
//               alt={selectedMember.name}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="p-8 md:w-2/3">
//             <h2 className="text-3xl font-bold text-gray-800 mb-2">
//               {selectedMember.name}
//             </h2>
//             <p className="text-xl text-blue-600 mb-4">{selectedMember.duty}</p>
            
//             <div className="space-y-4">
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-700 mb-2">About</h3>
//                 <p className="text-gray-600">
//                   {selectedMember.memDetail}
//                 </p>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-gray-700 mb-2">Contact Information</h3>
//                 <div className="space-y-2 text-gray-600">
//                   <p><i className="fa-solid fa-envelope mr-2"></i> {selectedMember.name.toLowerCase().replace(' ', '.')}@company.com</p>
//                   <p><i className="fa-solid fa-phone mr-2"></i> +855 12 345 678</p>
//                   <p><i className="fa-solid fa-location-dot mr-2"></i> Phnom Penh, Cambodia</p>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-gray-700 mb-2">Skills & Expertise</h3>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Leadership</span>
//                   <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Communication</span>
//                   <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Problem Solving</span>
//                   <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Team Management</span>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-gray-700 mb-2">Experience</h3>
//                 <div className="space-y-3">
//                   <div className="border-l-4 border-blue-500 pl-4">
//                     <p className="font-semibold text-gray-800">Senior {selectedMember.duty}</p>
//                     <p className="text-gray-600 text-sm">2020 - Present</p>
//                     <p className="text-gray-600 text-sm mt-1">Leading the team and managing daily operations with excellence.</p>
//                   </div>
//                   <div className="border-l-4 border-gray-300 pl-4">
//                     <p className="font-semibold text-gray-800">{selectedMember.duty}</p>
//                     <p className="text-gray-600 text-sm">2018 - 2020</p>
//                     <p className="text-gray-600 text-sm mt-1">Handled multiple projects and collaborated with various teams.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default AllDetailMem