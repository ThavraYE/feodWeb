import TeamMemProfile from "../../component/PastPresentComponent/TeamComponent/TeamMemProfile";
import React, { useState } from "react";
import DropDetail from "../PastAndPrensentPage/DropDetailMember/DropDetail";

function TeamPage() {
  const [drop, setDrop] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const memberProfile = [
    {
      name: "Kok Lola",
      image:"https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg",
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
      name: "Kok Kaka",
      image:"https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg",
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
      name: "Kok Bopha",
      image:"https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg",
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
      name: "Kok Tola",
      image:"https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg",
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