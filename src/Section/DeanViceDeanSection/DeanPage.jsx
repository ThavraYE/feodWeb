import DeanImage from '../../assets/image/soksothImage.jpg'
function Dean(){
    return(
        <>
            
                <div className="grid grid-cols-3"> 
                    <div className="col-span-2 ms-7 mt-[30px] rounded-md shadow-xl ">
                        <div className="profileDetail ms-[15px]">
                            <h1 className="pt-serif-bold text-right me-10"> Prof. Dr. Sok Soth</h1>
                            <p className="pt-serif-regular text-right me-10">
                                has been the Dean of the Faculty of Education at the Royal University of Phnom Penh (RUPP)
                                since 2016. He holds a Master's Degree in English Language Teaching from De La Salle University,
                                 Philippines, and a Ph.D. in Education from Victoria University, Melbourne, Australia, under Australian 
                                 Leadership Award. With over a decade of experience as an Applied Linguistics lecturer, researcher, and teacher 
                                 trainer, Dr. Soth's research interests focus on language and culture, particularly their influence on identity 
                                 and educational practices. He is also interested in Curriculum and Instruction. His dedication to enhancing educational 
                                 quality and professional development has made him a respected figure in the field of education.
                            </p>
                        </div>
                    </div>
                    <div className="ms-7 mt-[30px] ">
                        <div className="profile rounded-md overflow-hidden shadow-xl w-[450px] h-[250px] ">
                            <img src={DeanImage} alt="" />
                        </div>
                        
                    </div> 
                </div>
            
        </>
    )
}
export default Dean