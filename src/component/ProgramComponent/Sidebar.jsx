import React from 'react';
import { PROGRAM_SECTIONS } from '../../Utils/constants';

const Sidebar = ({ activeId, onSelect }) => {
  return (
    <aside className="w-full md:w-1/4 h-100 overflow-y-auto">
      <div className="bg-[#f0f0f0] border border-gray-300 p-4 shadow-sm  ">
        <ul className="space-y-1 overflow-y-auto">
          {PROGRAM_SECTIONS.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => onSelect(section.id)}
                className={`w-full text-left py-1 px-2 transition-colors duration-150 text-sm md:text-base hover:bg-white flex items-center gap-2 ${
                  activeId === section.id 
                  ? 'text-[#1C4D8D] font-bold border-l-4 border-[#1C4D8D] bg-white' 
                  : 'text-gray-700'
                }`}
              >
                <span className="text-[#1C4D8D]">•</span>
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
