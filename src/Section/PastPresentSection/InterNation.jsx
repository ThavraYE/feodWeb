import ProgramMockup from "../../component/PastPresentComponent/ProgramMockup"
import image2 from "../../assets/image/swipperImg2_1.jpg"
import image1 from "../../assets/image/handShake.avif"


const interNation=[
    {
        tittle:"International",
        linkTo:"project/international",
        src: image1,
        details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque explicabo, dolores laborum vitae delectus officiis maxime quod tempore pariatur ut quasi est ipsa maiores placeat cum animi saepe. Dolor, obcaecati.",

    },
    {
        tittle:"National",
        linkTo:"project/national",
        src: image2,
        details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque explicabo, dolores laborum vitae delectus officiis maxime quod tempore pariatur ut quasi est ipsa maiores placeat cum animi saepe. Dolor, obcaecati.",
        
    }
]
export default function InterNation(){
    return(
        <>
            <center><h1 className="pt-serif-bold text-2xl mt-[50px] mb-[50px]">Past & Present Projects/Trainings</h1></center>
            <div className="grid grid-cols-2 place-items-center w-full">
                {
                    interNation.map((item,index)=>(
                        <ProgramMockup
                            {...item}
                            key={index}
                        />
                    ))
                }
            </div>
        </>

    )
}