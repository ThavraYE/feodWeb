import { useState,useRef,useEffect } from "react"
import {useLocation,useParams, useNavigate} from "react-router-dom"
import TeamMemProfile from "../../component/PastPresentComponent/TeamComponent/TeamMemProfile"
import DropDetail from "../PastAndPrensentPage/DropDetailMember/DropDetail";
import { projectsData } from "../../Utils/Utils";
import {memberProfile} from "../../Utils/Utils"


export default function ProjectTeam(){
const [drop, setDrop] = useState(false);    
const [selectedMember,setSelectedMember]=useState(null);
const [currentIndex, setCurrentIndex] = useState(0);
const visibleCount = 4;
const { pathname } = useLocation();
const { subProjectId } = useParams();
const navigate = useNavigate();

//for select program data 
const selectedSubProject = projectsData
    .flatMap(main => 
        main.subProject.map((name, index) => ({
            name: name,
            link: main.projectLink[index],
            detail: main.projectDetail[index],
            parent: main.mainProject 
        }))
    )
    .find(sub => sub.link === subProjectId);
//when click program it will show team which relate to that program
function getMembersForSubProject(subProjectLink) {
  return memberProfile.filter(member => 
    member.projects?.includes(subProjectLink)
  );
}
const projectMember = getMembersForSubProject(subProjectId);

console.log(projectMember);
console.log(selectedSubProject);
console.log(subProjectId);

const handleViewMore = (member) => {
    setSelectedMember(member);
    setDrop(true);
  };

const handleForward = () => {
    if (currentIndex + visibleCount < projectMember.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

 const handleBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(projectMember.length - visibleCount);
    }
  };
  const visibleMembers = projectMember.slice(currentIndex, currentIndex + visibleCount);
  useEffect(() => {
    if (subProjectId && !selectedSubProject) {
      navigate("/not-found", { replace: true });
    }
  }, [subProjectId, selectedSubProject, navigate]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

    return(
        <>
        <p className="text-start">
          {selectedSubProject.detail}
        </p>
        <div className="grid grid-cols-4 gap-x-6.5 gap-y-10 max-w-7xl mx-auto mt-10" >

              <div  className="col-span-4 bg-gray-100 flex flex-row relative overflow-hidden h-[450px]">
                <div className="w-2/5 relative">
                    <img src="https://placehold.co/400x500/png?text=Zachary+Perret" alt="Zachary Perret" className="w-full h-full object-cover object-top grayscale"/>
                </div>
                <div className="w-3/5 p-12 flex flex-col justify-center">
                    <h2 className="text-4xl font-light text-gray-800 mb-6">Zachary Perret</h2>
                    <div className="border-t border-gray-300 pt-6">
                    <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                        Prior to Plaid, Zach worked for Bain & Co focused on technology mergers and acquisitions. Zach studied Physics and Chemistry at Duke, and then stuck around for a while to write software for laser system controllers.
                    </p>
                    </div>
                </div>
            </div>
            
            <button 
              onClick={handleBackward}
              className=" hover:bg-blue-600 absolute  top-215 left-10  hover:text-white  text-blue-600 font-bold py-2 px-6 rounded-full shadow-lg transition-transform active:scale-95 h-10.25"
            >&larr;
            </button>

            {visibleMembers.map((member,index)=>(
                <TeamMemProfile
                    key={index}
                  {...member}
                  onViewMore={() => handleViewMore(member)}  
                />
            ))}

            <button 
          onClick={handleForward}
          className="hover:bg-blue-600 absolute top-215 right-10  hover:text-white text-blue-600 font-bold py-2 px-6 rounded-full shadow-lg transition-transform active:scale-95 h-10.25"
        >
          &rarr;
        </button>
        </div> 
        <DropDetail
                drop={drop}
                setDrop={setDrop}
                selectedMember={selectedMember}
            />
        </>
    )
}