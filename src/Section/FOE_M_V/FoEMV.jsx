const MV=[
    {
        tittle:"Mission",
        icon:"fa-solid fa-bullseye",
        details:"The Faculty of Education has two core missions: first, to produce teachers and education personnel with high professional competencies; and second, to support the entire education system of the Ministry of Education, Youth, and Sport, while also enhancing students' learning."
    },
    {
        tittle:"Vision",    
        icon:"fa-solid fa-eye ",
        details:"The Faculty of Education has two core missions: first, to produce teachers and education personnel with high professional competencies; and second, to support the entire education system of the Ministry of Education, Youth, and Sport, while also enhancing students' learning."
    },
]

export default function FoEMV(){
    return(
        <>
            <div className=" mx-auto px-4 py-12 ">
    <h1 className="text-3xl font-bold text-center text-num-dark-blue mb-10">Our Vision And Mission</h1>

    <div className="grid grid-cols-3 place-items-center md:grid-cols-2  ">

        {MV.map((item,index)=>(
            <div className="flex flex-col w-5/6 items-center text-center rounded-xl overflow-hidden border shadow-md transition-transform duration-1000 hover:shadow-2xl">
                <div className="mb-4 mt-4">
                <i className={item.icon+" text-9xl" } ></i>
                </div>
                <h2 className="text-xl font-medium text-num-blue mb-2">Our {item.tittle}</h2>
                {/* <h3 className="text-2xl font-bold text-num-dark-blue mb-4">Cultivate Innovative Leaders, Managers, And Entrepreneurs For Society</h3> */}
                <p className="text-gray-600 leading-relaxed ms-5 me-5 mb-4">{item.details}</p>
            </div>
        ))}
      

      
      
    </div>
  </div>
        </>
    )
}