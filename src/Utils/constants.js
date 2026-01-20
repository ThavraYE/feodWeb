

export const NAVIGATION_DATA = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/aboutUs',
    children: [
      {
        label: 'About Faculty of Education',
        path: '#about-faculty',
        children: [
          { label: 'Vision', path: '#vision' },
          { label: 'Mission', path: '#mission' },
          { label: 'Education Philosophy', path: '#education-philosophy' },
        ],
      },
      {
        label: 'About the Upskilling Programs',
        path: '#about-upskilling',
        children: [
          { label: 'Vision', path: '#upskilling-vision' },
          { label: 'Mission', path: '#upskilling-mission' },
        ],
      },
      {
        label: 'Our Management and Teams',
        path: '#our-management',
        children: [
          { label: 'Dean', path: 'aboutUs/Dean' },
          { label: 'Vice Dean', path: '#vice-dean' },
          { label: 'Project Operation Manager', path: '#project-operation' },
          { label: 'ECE Coordinator and Team', path: '#ece-coordinator' },
          { label: 'PE Coordinator and Team', path: '#pe-coordinator' },
        ],
      },
    ],
  },
  {
    label: 'Programs',
    path: '/program',
    children: [
      {
        label: 'កម្មវិធីលើកកម្ពស់គុណវុឌ្ឍិគណៈគ្រប់គ្រងសាលារៀន',
        isKhmer: true,
        children: [
          { label: 'វិញ្ញាបនបត្រគ្រប់គ្រងអបរំកុមារតូច', path: '#bachelor-program1', isKhmer: true },
          { label: 'វិញ្ញាបនបត្រគ្រប់គ្រងអប់រំបឋមសិក្សា', path: '#bachelor-program2', isKhmer: true },
          { label: 'បរិញ្ញបត្រគ្រប់គ្រងអប់រំកុមារតូច', path: '#bachelor-program3', isKhmer: true },
          { label: 'បរិញ្ញបត្រគ្រប់គ្រងអប់រំមធ្យមសិក្សា', path: '#bachelor-program4', isKhmer: true },
          { label: 'បរិញ្ញបត្រជាន់ខ្ពស់គ្រប់គ្រងអប់រំកុមារតូច', path: '#bachelor-program5', isKhmer: true },
          { label: 'បរិញ្ញបត្រជាន់ខ្ពស់គ្រប់គ្រងអប់រំមធ្យមសិក្សា', path: '#bachelor-program6', isKhmer: true },
          { label: 'បណ្ឌិតអប់រំកុមារតូច', path: '#bachelor-program7', isKhmer: true },
          { label: 'បណ្ឌិតអប់រំបឋមសិក្សា', path: '#bachelor-program8', isKhmer: true },
          { label: 'បណ្ឌិតអប់រំមធ្យមសិក្សា', path: '#bachelor-program9', isKhmer: true },
        ],
      },
      {
        label: 'កម្មវិធីលើកកម្ពស់គុណវុឌ្ឍិគ្រូបង្រៀន',
        isKhmer: true,
        children: [
          {
            label: 'បរិញ្ញាបត្រ',
            isKhmer: true,
            children: [
              { label: 'អប់រំកុមារតូច', path: '#pedagogy-program1', isKhmer: true },
              { label: 'វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសអក្សរសាស្ត្រខ្មែរ', path: '#pedagogy-program2', isKhmer: true },
              { label: 'វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសប្រវត្តិវវិទ្យា', path: '#pedagogy-program3', isKhmer: true },
              { label: 'វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគណិតវិទ្យា', path: '#pedagogy-program4', isKhmer: true },
              { label: 'វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសរូបវិទ្យា', path: '#pedagogy-program5', isKhmer: true },
              { label: 'វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគីមី', path: '#pedagogy-program6', isKhmer: true },
              { label: 'វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសជីវវិទ្យា', path: '#pedagogy-program7', isKhmer: true },
            ],
          },
          {
            label: 'បរិញ្ញាបត្រជាន់ខ្ពស់',
            isKhmer: true,
            children: [
              { label: 'វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសអក្សរសាស្ត្រខ្មែរ', path: '#teacher-program1', isKhmer: true },
              { label: 'វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសប្រវត្តិវវិទ្យា', path: '#teacher-program2', isKhmer: true },
              { label: 'វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគណិតវិទ្យា', path: '#teacher-program3', isKhmer: true },
              { label: 'វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសរូបវិទ្យា', path: '#teacher-program4', isKhmer: true },
              { label: 'វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគីមី', path: '#teacher-program5', isKhmer: true },
              { label: 'វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសជីវវិទ្យា', path: '#teacher-program6', isKhmer: true },
            ],
          },
          {
            label: 'បណ្ឌិតអប់រំ',
            isKhmer: true,
            children: [
              { label: 'វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសអក្សរសាស្ត្រខ្មែរ', path: '#dr-khmer', isKhmer: true },
              { label: 'វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសប្រវត្តិវវិទ្យា', path: '#dr-history', isKhmer: true },
              { label: 'វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគណិតវិទ្យា', path: '#dr-math', isKhmer: true },
              { label: 'វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសរូបវិទ្យា', path: '#dr-physics', isKhmer: true },
              { label: 'វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសគីមី', path: '#dr-chemistry', isKhmer: true },
              { label: 'វិជ្ជាជីវៈគ្រូបង្រៀន ឯកទេសជីវវិទ្យា', path: '#dr-bio', isKhmer: true },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Past Projects',
    path: '#',
    children: [
      {
        label: 'SEIP',
        path: '#seip',
        children: [
          { label: 'TUP', path: '#tup' },
          { label: 'LUP', path: '#lup' },
        ],
      },
      {
        label: 'HEIP',
        path: '#heip',
        children: [
          { label: 'ECE', path: '#ece' },
          { label: 'CEHETLI', path: '#cehetli' },
        ],
      },
    ],
  },
  {
    label: 'Career',
    path: '#',
    children: [
      { label: 'Internship Opportunity', path: '#internship' },
      { label: 'ECE', path: '#opportunity-ece' },
      { label: 'PE', path: '#opportunity-pe' },
      { label: 'SE TUP', path: '#opportunity-tup' },
      { label: 'SE LUP', path: '#opportunity-lup' },
      { label: 'EdTech', path: '#opportunity-edtech' },
    ],
  },
  {
    label: 'Contact Us',
    path: '#',
    children: [
      { label: 'Faculty of Education', path: '#faculty-contact' },
      { label: 'Prof. Sok Soth, Dean', path: 'mailto:sok.soth@rupp.edu.kh' },
      { label: 'Asso. Mam Socheath, Vice Dean', path: 'mailto:mam.socheath@rupp.edu.kh' },
      { label: 'Miss Leang Lengngich', path: 'mailto:leang.lengngich@rupp.edu.kh' },
      { label: 'PE Coordinator', path: '#pe-coordinator-contact' },
      { label: 'SE TUP Coordinator', path: '#se-tup-coordinator' },
      { label: 'SE LUP Coordinator', path: '#se-lup-coordinator' },
      { label: 'EdTech Coordinator', path: '#edtech-coordinator' },
    ],
  },
];