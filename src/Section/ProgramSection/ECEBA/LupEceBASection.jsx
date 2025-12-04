import image from '../../../assets/image/swipperImg2_1.jpg'
import { useState } from "react";
function LupEceBaSection(){
     const [state, setSate] = useState(false);
    return(
        <>
            <div className="flex justify-center">
                <div className="ProgramContent grid grid-rows w-[1230px] ">
                    <div className="content flex">
                        <div className="credit w-40  border">
                            <p className='siemreap-regular mt-5'>៦៣ ក្រេឌីត</p>   
                        </div>
                        <div className="creditDetail w-[1070px] border">
                            <div className= {`${(state) ? "max-h-[1000px] opacity-100 " : "max-h-[190px] opacity-80"} overflow-hidden text-justify duration-500 transition-all ease-in-out mt-5`}>
                                <h1 className='siemreap-regular'>ការពិពណ៌នាមុខវិជ្ជា</h1>
                                <p className="text-justify siemreap-regular">●	ការណែនាំអំពីកម្មវិធី</p>
                                <span className='siemreap-regular'>
                                    កម្មវិធីនេះត្រូវបានរៀបចំឡើងដើម្បីត្រៀមលក្ខណៈអ្នកសិក្សាឱ្យក្លាយជាអ្នកដឹកនាំ និងអ្នកអប់រំប្រកបដោយសមត្ថភាព នវានុវត្តន៍ និងកំណែទម្រង់ ក្នុងការអភិវឌ្ឍកុមារតូច។ កម្មវិធីនេះណែនាំដល់អ្នកសិក្សានូវទ្រឹស្ដីសំខាន់ៗ គោលការណ៍ និងទស្សនៈ នៃការអប់រំកុមារតូច ការគ្រប់គ្រងអប់រំ និងយុទ្ធសាស្ត្រដៃគូររវាងសាលារៀន និងសហគមន៍។ កម្មវិធីនេះផ្សារភ្ជាប់មូលដ្ឋានគ្រឹះ ទ្រឹស្ដី ទៅនឹងបទពិសោធន៍ពិតជាក់ស្ដែងនៅក្នុងបរិបទសាលារៀនដោយមានគោលបំណងច្បាស់លាស់ ដែលអាចឱ្យអ្នកសិក្សាបណ្ដុះនូវការអនុវត្តប្រកបដោយសមត្ថភាព ភស្តុតាងច្បាស់លាស់ និងសកម្មភាពពាក់ព័ន្ធផ្ដោតលើការលើកកម្ពស់ការរៀន និងការអភិវឌ្ឍរបស់កុមារតូច។
                                    ដោយផ្តោតលើការកែលម្អសាលារៀន ភាពជាអ្នកដឹកនាំប្រកបដោយប្រសិទ្ធភាព និងសកម្មភាពអប់រំដែលមានស្ថេរភាព កម្មវិធីនេះ ផ្ដល់នូវ ចំណេះជំនាញទៅដល់គ្រូបង្រៀន និងគណៈគ្រប់គ្រងសាលារៀន ដើម្បីឱ្យពួកគាត់ក្លាយជាភ្នាក់ងារកំណែទម្រង់វិជ្ជមាន។ តាមរយៈការកសាងសមត្ថភាព និងការសិក្សាគរុកោសល្យបែបឆ្លុះបញ្ចាំង អ្នកសិក្សាទទួលបានការត្រៀមលក្ខណៈដើម្បីអាចផ្ដួចផ្ដើម អនុវត្ត និងរក្សាការកែលម្អដែលមានសារៈសំខាន់សម្រាប់លទ្ធផលសិក្សារបស់កុមារ និងសម្រាប់គុណភាពនៃសេវាអប់រំកុមារតូចក្នុងសាលារៀន និងសហគមន៍របស់ខ្លួន។
                                </span>
                                <p className="text-justify siemreap-regular">●	កម្មវិធីរួមបញ្ចូល (មុខវិជ្ជាគោល)</p>
                                <p className='text-justify siemreap-regular'>កម្មវិធីនេះបណ្ដុះនូវសមត្ថភាពសំខាន់ៗ ពេញលេញ និងផ្ដោតលើការអនុវត្តជាក់ស្ដែងលើផ្នែកបីសំខាន់ៗគឺ៖</p>
                                <p className="text-justify siemreap-regular">១. បច្ចេកវិទ្យាអប់រំ និងប្រព័ន្ធតាមដានទិន្នន័យសិក្សា</p>
                                <p className="text-justify siemreap-regular">●	វប្បធម៌សាលារៀនដែលគាំទ្រដល់ការលូតលាស់សុខុមាលភាពរបស់កុមារ</p>
                                <p className="text-justify siemreap-regular">●	ការអភិវឌ្ឍគ្រប់ផ្នែករបស់កុមារ និងតម្រូវការសិក្សានានា</p>
                                <p className="text-justify siemreap-regular">●	សហប្រតិបត្តិការរវាងសាលារៀន និងសហគមន៍ដែលរួមចំណែកក្នុងការកែលម្អបរិយាកាសសិក្សា</p>
                                <p className="text-justify siemreap-regular">២. កម្មវិធីសិក្សា គរុកោសល្យ និងនវានុវត្តន៍</p>
                                <p className="text-justify siemreap-regular">●	ភាពជាអ្នកដឹកនាំដែលមានការតម្រង់ទិស និងរដ្ឋបាលច្បាស់លាស់</p>
                                <p className="text-justify siemreap-regular">●	ការគ្រប់គ្រងសាលារៀនប្រកបដោយយុទ្ធសាស្ត្រ និងប្រសិទ្ធភាព</p>
                                <p className="text-justify siemreap-regular">●	ការសម្រេចចិត្តដោយផ្អែកលើភស្តុតាងច្បាស់លាស់ក្នុងបរិបទអប់រំកុមារតូច</p>
                                <p className="text-justify siemreap-regular">៣. ភាពជាអ្នកដឹកនាំ ការគ្រប់គ្រងរដ្ឋបាល និងការអនុវត្ត</p>
                                <p className="text-justify siemreap-regular">●	ការអនុវត្តការគ្រប់គ្រងកម្រិតសាលារៀន (SBM)</p>
                                <p className="text-justify siemreap-regular">●	យុទ្ធសាស្ត្រសហគមន៍សាលារៀនដើម្បីលើកកម្ពស់កម្មវិធីអប់រំកុមារតូច</p>
                                <p className="text-justify siemreap-regular">●	ការប្រើប្រាស់ និងបកស្រាយស្ដង់ដាសាលារៀនមានប្រសិទ្ធភាព</p>
                                <p className="text-justify siemreap-regular">●	សកម្មភាពកម្មសិក្សា ការចុះអនុវត្តជាក់ស្ដែង និងរបាយការណ៍ឆ្លុះបញ្ចាំង ដើម្បីពង្រឹងការអនុវត្តវិជ្ជាជីវៈ</p>
                                <p className="text-justify siemreap-regular">● លទ្ធផលសិក្សានៃកម្មវិធី (PLOs)</p>
                                <p className="text-justify siemreap-regular">នៅពេលបញ្ចប់កម្មវិធីសិក្សានេះ អ្នកសិក្សានឹងមានសមត្ថភាព៖</p>
                                <p className="text-justify siemreap-regular">PLO1៖ បង្ហាញនូវចំណេះដឹងអំពីរបៀប អភិវឌ្ឍសាលារៀនដែលគាំទ្រដល់សហគមន៍សាលារៀន។</p>
                                <p className="text-justify siemreap-regular">PLO2៖ ពន្យល់អំពីគោលគំនិតនៃភាពជាអ្នកដឹកនាំ និងការគ្រប់គ្រងអប់រំក្នុងការអប់រំកុមារតូច ការគ្រប់គ្រងតាមសាលារៀន (SBM) និងយុទ្ធសាស្ត្រសហគមន៍សាលារៀន (SCS)។</p>
                                <p className="text-justify siemreap-regular">PLO3៖ អនុវត្តភារកិច្ចគ្រប់គ្រងសាលារៀន  យុទ្ធសាស្ត្រ និងសកម្មភាពដឹកនាំដែលមានប្រសិទ្ធភាពឈានទៅរកស្ថេរភាពសាលារៀន។</p>
                                <p className="text-justify siemreap-regular">PLO4៖ ប្រើប្រាស់ទស្សនៈ ចំណេះដឹង និងជំនាញនៃការអភិវឌ្ឍ និងការអប់រំកុមារតូច ដើម្បីបង្កើតឱ្យមានការផ្លាស់ប្ដូរក្នុងការអប់រំ និងថែទាំកុមារនៅសាលារៀន។</p>
                                <p className="text-justify siemreap-regular">PLO5៖ បង្កើតយន្តការគ្រប់គ្រង តាមដាន និងវាយតម្លៃទៅលើការអនុវត្តការគ្រប់គ្រងសាលារៀន និងយុទ្ធសាស្ត្រសហគមន៍សាលារៀននៅកម្រិតមត្តេយ្យសិក្សា។</p>
                                <p className="text-justify siemreap-regular">PLO6៖ ប្រើប្រាស់ ឧបករណ៍រង្វាយតម្លៃស្ដង់ដាសាលាមានប្រសិទ្ធភាពសម្រាប់ការអប់រំកុមារតូចដោយមានទំនុកចិត្ត និងមានសមត្ថភាពផ្ដល់ការបង្វឹកដល់សាលារៀនដោយមានវិជ្ជាជីវៈ។</p>
                                <p className="text-justify siemreap-regular">PLO7៖ បង្ហាញនូវភាពច្នៃប្រឌិតក្នុងការក្លាយជាភ្នាក់ងារកំណែទម្រង់ក្នុងការអប់រំកុមារតូចតាមរយៈការអភិវឌ្ឍចិត្តសង្គម វប្បធម៌ទំនាក់ទំនងដោយមានប្រសិទ្ធិភាព និងវិធីសាស្ត្ររៀនពេញមួយជីវិត។</p> 
                                <p className="text-justify siemreap-regular">PLO8៖ មានឥរិយាបថវិជ្ជមាន និងទំនុកចិត្ត ស្មារតីទំនួលខុសត្រូវ គណនេយ្យភាព និងជំនាញវិជ្ជាជីរៈ និងបំណិនជីវិត សម្រាប់ប្រើប្រាស់នូវចំណេះ និងជំនាញការអប់រំកុមារតូច និងការរស់នៅប្រកបដោយសេចក្ដីថ្លៃថ្នូរនៅក្នុងសង្គម។</p> 
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
export default LupEceBaSection