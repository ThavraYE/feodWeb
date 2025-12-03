import image from '../../../assets/image/swipperImg2_1.jpg'
import { useState } from "react";
function LupEce4CreditCertificateSection(){
     const [state, setSate] = useState(false);
    return(
        <>
            <div className="flex justify-center">
                <div className="ProgramContent grid grid-rows w-[1230px] ">
                    <div className="content flex">
                        <div className="credit w-40  border">
                            <p className='siemreap-regular mt-5'>៥៤ ក្រេឌីត</p>   
                        </div>
                        <div className="creditDetail w-[1070px] border">
                            <div className= {`${(state) ? "max-h-[1000px] opacity-100 " : "max-h-[190px] opacity-80"} overflow-hidden text-justify duration-500 transition-all ease-in-out mt-5`}>
                                <h1 className='siemreap-regular'>ការពិពណ៌នាមុខវិជ្ជា</h1>
                                <p className="text-justify siemreap-regular">●	ការណែនាំអំពីកម្មវិធី</p>
                                <span className='siemreap-regular'>
                                    កម្មវិធីនេះត្រូវបានរៀបចំឡើងដើម្បីត្រៀមលក្ខណៈអ្នកសិក្សា ឱ្យក្លាយជាអ្នកអប់រំដែលមានគុណវុឌ្ឍិ និងជាភ្នាក់ងារនៃការផ្លាស់ប្តូរនៅក្នុងការអភិវឌ្ឍកុមារតូច។ កម្មវិធីនេះផ្តល់នូវការយល់ដឹងស៊ីជម្រៅអំពី មូលដ្ឋានគ្រឹះទ្រឹស្តី និងទស្សនៈគោលនៃការអប់រំកុមារតូច ការគ្រប់គ្រងអប់រំ និងយុទ្ធសាស្ត្រសហគមន៍សាលារៀន។ កម្មវិធីនេះផ្សារភ្ជាប់ទ្រឹស្តីជាមួយការអនុវត្តជាក់ស្តែងនៅសាលារៀន ដោយសង្កត់ធ្ងន់យ៉ាងខ្លាំងលើការលើកកម្ពស់ការរៀន និងការអភិវឌ្ឍរបស់កុមារតូច។ តាមរយៈការរួមបញ្ចូលទ្រឹស្តី និងការអនុវត្ត អ្នកសិក្សានឹងអភិវឌ្ឍចំណេះដឹងជាក់ស្តែង សមត្ថភាពដឹកនាំ និងជំនាញវិជ្ជាជីវៈដែលចាំបាច់ ដើម្បីកែលម្អការអប់រំកុមារតូចនៅកម្រិតសាលារៀន និងសហគមន៍។
                                </span>
                                <p className="text-justify siemreap-regular">●	កម្មវិធីរួមបញ្ចូល (មុខវិជ្ជាគោល)</p>
                                <p className='text-justify siemreap-regular'>កម្មវិធីនេះបណ្ដុះនូវសមត្ថភាពសំខាន់ៗ ពេញលេញ និងផ្ដោតលើការអនុវត្តជាក់ស្ដែងលើផ្នែកបីសំខាន់ៗគឺ៖</p>
                                <p className="text-justify siemreap-regular">១. ការសិក្សាអំពីការអប់រំកុមារតូច</p>
                                <p className="text-justify siemreap-regular">●	ការអភិវឌ្ឍនៃការអប់រំកុមារតូច</p>
                                <p className="text-justify siemreap-regular">●	ការអភិវឌ្ឍគ្រប់ផ្នែករបស់កុមារ</p>
                                <p className="text-justify siemreap-regular">●	កិច្ចសហប្រតិបត្តិការ និងការគាំទ្រកុមារពីសំណាក់ ផ្ទះ-សាលារៀន-សហគមន៍</p>
                                <p className="text-justify siemreap-regular">២. ភាពជាអ្នកដឹកនាំ និងការគ្រប់គ្រង</p>
                                <p className="text-justify siemreap-regular">●	ភាពជាអ្នកដឹកនាំ និងការគ្រប់គ្រងរដ្ឋបាលសាលារៀន​ </p>
                                <p className="text-justify siemreap-regular">●	ការគ្រប់គ្រងអប់រំសម្រាប់បរិបទការអប់រំកុមារតូច</p>
                                <p className="text-justify siemreap-regular">●	យុទ្ធសាស្ត្រដឹកនាំ សាលារៀនមានប្រសិទ្ធភាព និងស្ថេរភាព</p>
                                <p className="text-justify siemreap-regular">៣. ភាពជាអ្នកដឹកនាំ ការគ្រប់គ្រងរដ្ឋបាល និងការអនុវត្ត</p>
                                <p className="text-justify siemreap-regular">●	ភាពជាអ្នកដឹកនាំ និងការគ្រប់គ្រងរដ្ឋបាលសាលារៀន(SBM)</p>
                                <p className="text-justify siemreap-regular">●	យុទ្ធសាស្ត្រសហគមន៍សាលារៀន (SCS)</p>
                                <p className="text-justify siemreap-regular">●	ការចូលរួមអនុវត្តជាក់ស្តែងនៅក្នុងបរិស្ថានសាលារៀន</p>
                                <p className="text-justify siemreap-regular">●	ការស្រាវជ្រាវ ការសរសេរនិក្ខេបបទ និងការរាយការណ៍ដែលស្របតាមស្តង់ដារសាលារៀនមានប្រសិទ្ធភាព និងស្ដង់ដាសាលារៀនគំរូ</p>
                                <p className="text-justify siemreap-regular">● លទ្ធផលសិក្សានៃកម្មវិធី (PLOs)</p>
                                <p className="text-justify siemreap-regular">នៅពេលបញ្ចប់កម្មវិធីសិក្សានេះ អ្នកសិក្សានឹងមានសមត្ថភាព៖</p>
                                <p className="text-justify siemreap-regular">PLO1៖ ពន្យល់ឱ្យបានស៊ីជម្រៅពីទ្រឹស្តី គំនិត និងគោលការណ៍នៃការអប់រំទាំងក្នុងបរិបទសកល និងថ្នាក់ជាតិ ព្រមទាំងឆ្លុះបញ្ចាំងពីការអនុវត្តជាក់ស្តែងនៅក្នុងបរិបទការអប់រំកុមារតូច។</p>
                                <p className="text-justify siemreap-regular">PLO2៖ ពន្យល់បានស៊ីជម្រៅពីដំណើរការអនុវត្តដែលតម្រូវ ដើម្បីបណ្តុះបណ្តាលសាលារៀនឱ្យអនុវត្តយុទ្ធសាស្ត្រសហគមន៍សាលារៀនប្រកបដោយប្រសិទ្ធភាព។</p>
                                <p className="text-justify siemreap-regular">PLO3៖ អភិវឌ្ឍគំរូនៃភាពជាអ្នកដឹកនាំ និងការគ្រប់គ្រងសាលារៀន ដោយផ្តោតលើលទ្ធផលសិក្សារបស់សិស្ស ប្រសិទ្ធភាពសាលារៀន គុណភាព និងនិរន្តរភាព តាមរយៈការរៀន ការអនុវត្ត និងការស្រាវជ្រាវ។ </p>
                                <p className="text-justify siemreap-regular">PLO4៖ ប្រើប្រាស់គំនិត ចំណេះដឹង និងជំនាញនៃការអភិវឌ្ឍ និងការអប់រំកុមារតូច ដើម្បីធ្វើការផ្លាស់ប្តូរវិជ្ជមាននៅក្នុងការរៀននិងការថែទាំកុមារនៅក្នុងបរិបទសាលារៀន។ </p>
                                <p className="text-justify siemreap-regular">PLO5៖ បង្កើតយន្តការ ការគ្រប់គ្រង តាមដាន និងវាយតម្លៃលើការអនុវត្តការគ្រប់គ្រងតាមសាលារៀន និងយុទ្ធសាស្ត្រសហគមន៍សាលារៀន នៅក្នុងការអប់រំកុមារតូច។</p>
                                <p className="text-justify siemreap-regular">PLO6៖ អនុវត្តភាពជាអ្នកដឹកនាំ ការគ្រប់គ្រងការងារ ការប្រឹក្សាគរុកោសល្យ គំនិតផ្តួចផ្តើមបង្កើតប្រាក់ចំណូល និងកម្មវិធីគាំពារសង្គមសម្រាប់សាលារៀន និងសហគមន៍ប្រកបដោយក្រមសីលធម៌វិជ្ជាជីវៈ។</p>
                                <p className="text-justify siemreap-regular">PLO7៖ អភិវឌ្ឍអាកប្បកិរិយាវិជ្ជមាន និងវប្បធម៌នៃការរៀនមួយជីវិត និងការទំនាក់ទំនងប្រកប ដោយការគោរព មនុស្សធម៌ សាមគ្គីភាព និងស្មារតីនៃការចែករំលែក។</p> 
                                <p className="text-justify siemreap-regular">PLO8៖ បង្ហាញផ្នត់គំនិតដឹកនាំដែលគាំទ្រដល់ការបង្កើតបណ្តាញដ៏រឹងមាំ និងលើកកម្ពស់ឧត្តមភាពនៅក្នុងស្ថាប័នគ្រប់គ្រងអប់រំ។</p> 
                            </div>
                            <button onClick={() => setSate(!state)}
                                className="relative mt-2 mb-2 overflow-hidden w-32 h-10 hover:text-white text-black font-medium text-lg border-2 border-black rounded-lg cursor-pointer transition-colors duration-500 group"
                                >
                                    {state ? "View Less" : "View More"}
                                <span className="absolute top-full left-full w-48 h-48 bg-[#3396D3] rounded-full transition-all duration-700 group-active:bg-purple-900 group-hover:-top-7 group-hover:-left-7 -z-10"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LupEce4CreditCertificateSection