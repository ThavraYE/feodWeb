import TeamMemProfile from "../../component/PastPresentComponent/TeamComponent/TeamMemProfile";
import React, { useState } from "react";
import DropDetail from "../PastAndPrensentPage/DropDetailMember/DropDetail";

function TeamPage() {
  const [drop, setDrop] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const memberProfile = [
    {
      name: "Prof. Dr. Tao Nary ",
      image:"https://rupp.edu.kh/fed/images/staff/tao-nary.png",
      contect:
      [
        "012345678",
        "@gmail.com",
        "HV9R+6RC, Russian Federation Blvd (110), Phnom Penh"
        ],
      memDetail: "Passionate about creating engaging visual content and bringing stories to life through video editing.",
      duty: "Video Editor",
      Memskill:
      [
        "Management Skills",
        "Creativity",
        "Digital Marketing",
        "Negotiation",
        "Critical Thinking",
        "Leadership",
      ],
      memEducation:
      [
        {
          degree:"Bacc",
          dateGraduate:"2013-2019",
          school:"MBR",
          eduDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu."
        },
        {
          degree:"Bachlor",
          dateGraduate:"2020-2024",
          school:"RUPP",
          eduDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu."
        }
      ],
      experience:
      [
        {
          title: "Product Design Manager",
          years: "2016 - 2020",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Risk Manager", 
          years: "2019 - 2020",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Project Manager", 
          years: "2017 - 2019",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Marketing Manager", 
          years: "2016 - 2017",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },
      ]
    },
    {
      name: "Sot Visal",
      image:"https://rupp.edu.kh/fed/images/staff/sot-visal.png",
      contect:
      [
        "012345678",
        "@gmail.com",
        "HV9R+6RC, Russian Federation Blvd (110), Phnom Penh"
        ],
      memDetail: "Experienced administrator ensuring smooth operations and efficient workflow management.",
      duty: "Administration",
      Memskill:
      [
        "Management Skills",
        "Creativity",
        "Digital Marketing",
        "Negotiation",
        "Critical Thinking",
        "Leadership",
      ],
      memEducation:
      [
        {
          degree:"Bacc",
          dateGraduate:"2013-2019",
          school:"MBR",
          eduDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu."
        },
        {
          degree:"Bachlor",
          dateGraduate:"2020-2024",
          school:"RUPP",
          eduDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu."
        }
      ],
      experience:
      [
        {
          title: "Product Design Manager",
          years: "2016 - 2020",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Risk Manager", 
          years: "2019 - 2020",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Project Manager", 
          years: "2017 - 2019",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Marketing Manager", 
          years: "2016 - 2017",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },
      ]
    },
    {
      name: "Haing Sivpheng",
      image:"https://rupp.edu.kh/fed/images/staff/haing-sivpheng.jpg",
      contect:
        [
        "012345678",
        "@gmail.com",
        "HV9R+6RC, Russian Federation Blvd (110), Phnom Penh"
        ],
      memDetail: "Tech enthusiast specializing in system management and innovative IT solutions.",
      duty: "IT Specialist",
      Memskill:
      [
        "Management Skills",
        "Creativity",
        "Digital Marketing",
        "Negotiation",
        "Critical Thinking",
        "Leadership",
      ],
      memEducation:
      [
        {
          degree:"Bacc",
          dateGraduate:"2013-2019",
          school:"MBR",
          eduDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu."
        },
        {
          degree:"Bachlor",
          dateGraduate:"2020-2024",
          school:"RUPP",
          eduDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu."
        }
      ],
      experience:
      [
        {
          title: "Product Design Manager",
          years: "2016 - 2020",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Risk Manager", 
          years: "2019 - 2020",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Project Manager", 
          years: "2017 - 2019",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Marketing Manager", 
          years: "2016 - 2017",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },
      ]
    },
    {
      name: "Hor Youhan",
      image:"https://rupp.edu.kh/fed/images/staff/hor-youhan.png",
      contect:
      [
        "012345678",
        "@gmail.com",
        "HV9R+6RC, Russian Federation Blvd (110), Phnom Penh"
        ],
      memDetail: "Dedicated professional providing excellent support and maintaining high service standards.",
      duty: "Attendant",
      Memskill:
      [
        "Management Skills",
        "Creativity",
        "Digital Marketing",
        "Negotiation",
        "Critical Thinking",
        "Leadership",
      ],
      memEducation:
      [
        {
          degree:"Bacc",
          dateGraduate:"2013-2019",
          school:"MBR",
          eduDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu."
        },
        {
          degree:"Bachlor",
          dateGraduate:"2020-2024",
          school:"RUPP",
          eduDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu."
        }
      ],
      experience:
      [
        {
          title: "Product Design Manager",
          years: "2016 - 2020",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Risk Manager", 
          years: "2019 - 2020",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Project Manager", 
          years: "2017 - 2019",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Marketing Manager", 
          years: "2016 - 2017",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },
      ]
    },
    {
      name: "Dr. Moeurn Chantrea",
      image:"https://rupp.edu.kh/fed/images/staff/moeurn-chantrea.png",
      contect:
      [
        "012345678",
        "@gmail.com",
        "HV9R+6RC, Russian Federation Blvd (110), Phnom Penh"
        ],
      memDetail: "Dedicated professional providing excellent support and maintaining high service standards.",
      duty: "Attendant",
      Memskill:
      [
        "Management Skills",
        "Creativity",
        "Digital Marketing",
        "Negotiation",
        "Critical Thinking",
        "Leadership",
      ],
      memEducation:
      [
        {
          degree:"Bacc",
          dateGraduate:"2013-2019",
          school:"MBR",
          eduDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu."
        },
        {
          degree:"Bachlor",
          dateGraduate:"2020-2024",
          school:"RUPP",
          eduDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu."
        }
      ],
      experience:
      [
        {
          title: "Product Design Manager",
          years: "2016 - 2020",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Risk Manager", 
          years: "2019 - 2020",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Project Manager", 
          years: "2017 - 2019",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Marketing Manager", 
          years: "2016 - 2017",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },
      ]
    },
    {
      name: "Mrs. Svay Souma",
      image:"https://rupp.edu.kh/fed/images/staff/svay-souma.png",
      contect:
      [
        "012345678",
        "@gmail.com",
        "HV9R+6RC, Russian Federation Blvd (110), Phnom Penh"
        ],
      memDetail: "Dedicated professional providing excellent support and maintaining high service standards.",
      duty: "Attendant",
      Memskill:
      [
        "Management Skills",
        "Creativity",
        "Digital Marketing",
        "Negotiation",
        "Critical Thinking",
        "Leadership",
      ],
      memEducation:
      [
        {
          degree:"Bacc",
          dateGraduate:"2013-2019",
          school:"MBR",
          eduDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu."
        },
        {
          degree:"Bachlor",
          dateGraduate:"2020-2024",
          school:"RUPP",
          eduDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu."
        }
      ],
      experience:
      [
        {
          title: "Product Design Manager",
          years: "2016 - 2020",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Risk Manager", 
          years: "2019 - 2020",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Project Manager", 
          years: "2017 - 2019",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Marketing Manager", 
          years: "2016 - 2017",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },
      ]
    },
    {
      name: "Ms. Leang Lengngich",
      image:"https://rupp.edu.kh/fed/images/staff/leang-lengngich.png",
      contect:
      [
        "012345678",
        "@gmail.com",
        "HV9R+6RC, Russian Federation Blvd (110), Phnom Penh"
        ],
      memDetail: "Dedicated professional providing excellent support and maintaining high service standards.",
      duty: "Attendant",
      Memskill:
      [
        "Management Skills",
        "Creativity",
        "Digital Marketing",
        "Negotiation",
        "Critical Thinking",
        "Leadership",
      ],
      memEducation:
      [
        {
          degree:"Bacc",
          dateGraduate:"2013-2019",
          school:"MBR",
          eduDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu."
        },
        {
          degree:"Bachlor",
          dateGraduate:"2020-2024",
          school:"RUPP",
          eduDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu."
        }
      ],
      experience:
      [
        {
          title: "Product Design Manager",
          years: "2016 - 2020",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Risk Manager", 
          years: "2019 - 2020",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Project Manager", 
          years: "2017 - 2019",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Marketing Manager", 
          years: "2016 - 2017",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },
      ]
    },
    {
      name: "Mr. Heng Nareth",
      image:"https://rupp.edu.kh/fed/images/staff/heng-nareth.png",
      contect:
      [
        "012345678",
        "@gmail.com",
        "HV9R+6RC, Russian Federation Blvd (110), Phnom Penh"
        ],
      memDetail: "Dedicated professional providing excellent support and maintaining high service standards.",
      duty: "Attendant",
      Memskill:
      [
        "Management Skills",
        "Creativity",
        "Digital Marketing",
        "Negotiation",
        "Critical Thinking",
        "Leadership",
      ],
      memEducation:
      [
        {
          degree:"Bacc",
          dateGraduate:"2013-2019",
          school:"MBR",
          eduDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu."
        },
        {
          degree:"Bachlor",
          dateGraduate:"2020-2024",
          school:"RUPP",
          eduDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque. Sed leo nisl, semper ac hendrerit a, sollicitudin in arcu."
        }
      ],
      experience:
      [
        {
          title: "Product Design Manager",
          years: "2016 - 2020",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Risk Manager", 
          years: "2019 - 2020",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Project Manager", 
          years: "2017 - 2019",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },{
          title: "Marketing Manager", 
          years: "2016 - 2017",
          company:"Arowwai Industries",
          titleDetail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque."
        },
      ]
    },
  ];

  const handleViewMore = (member) => {
    setSelectedMember(member);
    setDrop(true);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;

  // 3. Navigation Handlers
  const handleForward = () => {
    if (currentIndex + visibleCount < memberProfile.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
       // Optional: Loop to start
    }
  };

  const handleBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(memberProfile.length - visibleCount); // Optional: Loop to end
    }
  };

  // 4. Get the current "slice" of 4 visible cards
  const visibleMembers = memberProfile.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="  py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 mt-3">
          <button 
          onClick={handleBackward}
          className=" hover:bg-blue-600 hover:text-white text-blue-600 font-bold py-2 px-6 rounded-full shadow-lg transition-transform active:scale-95 h-10.25"
        >
          &larr;
        </button>
          {visibleMembers.map((item, index) => (
            <TeamMemProfile
              key={index}
              {...item}
              onViewMore={() => handleViewMore(item)}
            />
          ))}

          <button 
          onClick={handleForward}
          className="hover:bg-blue-600 hover:text-white text-blue-600 font-bold py-2 px-6 rounded-full shadow-lg transition-transform active:scale-95 h-10.25"
        >
          &rarr;
        </button>

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