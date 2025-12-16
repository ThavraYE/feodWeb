// import { Link } from "react-router-dom";
// function TeamMemProfile({name,memDetail,duty}){
//     return(
//         <>
//             <div className="w-80 bg-white rounded-md shadow-xl overflow-hidden text-center">
//                 <img 
//                     src="https://t4.ftcdn.net/jpg/15/98/56/23/360_F_1598562310_PBaNmPaPyc1TgWjOp3iYMp4mIf8lfQ6n.jpg" 
//                     alt="Sophie Bennett" 
//                     className="w-full h-50 object-cover"
//                 />

//                 <div className="px-6 py-5 ">
//                     <h2 className="text-2xl font-bold inline-flex items-center gap-1">
//                         {name}
//                     </h2>

//                     <p className="text-gray-600 text-base mt-2 mb-4">
//                         {memDetail} 
//                     </p>
//                     <div className="flex justify-center gap-12 mb-6 text-gray-600">
                        
//                         <div>
//                             <span className="text-black font-bold text-lg">{duty}</span> 
//                         </div>
//                     </div>

//                     <button className="bg-[#FFFFFF] text-black border font-bold text-base px-6 py-3 rounded-md hover:bg-[#3396D3] hover:text-white hover:border-black duration-300">
//                         <Link to="our-management/all-detail-member">View More</Link>
//                     </button>
//                 </div>
//             </div>
//         </>
//     )    
// }
// export default TeamMemProfile


function TeamMemProfile({ name, memDetail, duty, onViewMore }) {
  return (
    <div className="w-80 bg-white rounded-lg shadow-xl overflow-hidden text-center hover:shadow-2xl transition-shadow duration-300">
      <img
        src="https://t4.ftcdn.net/jpg/15/98/56/23/360_F_1598562310_PBaNmPaPyc1TgWjOp3iYMp4mIf8lfQ6n.jpg"
        alt={name}
        className="w-full h-64 object-cover"
      />

      <div className="px-6 py-5">
        <h2 className="text-2xl font-bold inline-flex items-center gap-1 text-gray-800">
          {name}
        </h2>

        <p className="text-gray-600 text-base mt-2 mb-4">
          {memDetail}
        </p>

        <div className="flex justify-center gap-12 mb-6 text-gray-600">
          <div>
            <span className="text-black font-bold text-lg">{duty}</span>
          </div>
        </div>

        <button
          onClick={onViewMore}
          className="bg-white text-black border-2 border-gray-300 font-bold text-base px-6 py-3 rounded-md hover:bg-[#3396D3] hover:text-white hover:border-[#3396D3] transition-all duration-300"
        >
          View More
        </button>
      </div>
    </div>
  );
}

export default TeamMemProfile;