import DeanImage from '../../assets/image/soksothImage.jpg'
function Dean(){
    return(
        <>
            
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start"> 
                    <div className="order-2 md:order-1 md:col-span-2 bg-white rounded-xl shadow-xl p-6 md:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl ms-6">
                        <div className="profileDetail ">
                            <h1 className="pt-serif-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-center md:text-right md:me-4 lg:me-10 border-b-2 border-blue-100 pb-2 inline-block md:block w-full">
                                 Prof. Dr. Sok Soth</h1>
                            <p className="pt-serif-regular text-sm md:text-base lg:text-lg leading-relaxed  text-justify md:text-right md:me-4 lg:me-10">
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
                    <div className="mt-[30px] order-1 md:order-2 flex justify-center ">
                        <div className="profile rounded-xl overflow-hidden shadow-xl w-full max-w-[450px] aspect-4/3 md:aspect-auto md:h-full transition-transform duration-300 hover:scale-[1.02] ">
                            <img src={DeanImage} alt="" />
                        </div>
                        
                    </div> 
                </div>
            
        </>
    )
}
export default Dean