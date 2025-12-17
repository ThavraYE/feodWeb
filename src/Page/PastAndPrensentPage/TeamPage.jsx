// import TeamMemProfile from "../../component/PastPresentComponent/TeamComponent/TeamMemProfile";
// import React, { useState } from "react";
// const menberProfile = [
//     {
//         name :"Kok Lola",
//         memDetail : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, at assumenda. Voluptatum id distinctio.",
//         duty : "Video Editor"
//     },
//     {
//         name :"Kok kaka",
//         memDetail : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, at assumenda. Voluptatum id distinctio.",
//         duty : "Administration"
//     },
//     {
//         name :"Kok Bopha",
//         memDetail : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, at assumenda. Voluptatum id distinctio.",
//         duty : "IT"
//     },
//     {
//         name :"Kok Tola",
//         memDetail : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, at assumenda. Voluptatum id distinctio.",
//         duty : "Attendent"
//     },
// ]

// function TeamPage(){
//     return(
//         <>
//             <div className=" flex justify-around  mt-10">
//                 {menberProfile.map((item,index)=>{
//                     return (
//                         <TeamMemProfile 
                        
//                         key={index} 
//                         {...item} />
//                     );
//                 })}
                
                
//             </div>
//         </>
//     );
// }
// export default TeamPage


import TeamMemProfile from "../../component/PastPresentComponent/TeamComponent/TeamMemProfile";
import React, { useState } from "react";
import DropDetail from "../PastAndPrensentPage/DropDetailMember/DropDetail";

function TeamPage() {
  const [drop, setDrop] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const memberProfile = [
    {
      name: "Kok Lola",
      memDetail: "Passionate about creating engaging visual content and bringing stories to life through video editing.",
      duty: "Video Editor"
    },
    {
      name: "Kok Kaka",
      memDetail: "Experienced administrator ensuring smooth operations and efficient workflow management.",
      duty: "Administration"
    },
    {
      name: "Kok Bopha",
      memDetail: "Tech enthusiast specializing in system management and innovative IT solutions.",
      duty: "IT Specialist"
    },
    {
      name: "Kok Tola",
      memDetail: "Dedicated professional providing excellent support and maintaining high service standards.",
      duty: "Attendant"
    }
  ];

  const handleViewMore = (member) => {
    setSelectedMember(member);
    setDrop(true);
  };

  return (
    <div className="  py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 mt-3">
          {memberProfile.map((item, index) => (
            <TeamMemProfile
              key={index}
              {...item}
              onViewMore={() => handleViewMore(item)}
            />
          ))}
        </div>
      </div>

      {/* DropDetail Component - Overlay with member details */}
      <DropDetail
        drop={drop}
        setDrop={setDrop}
        selectedMember={selectedMember}
      />
    </div>
  );
}


export default TeamPage;