import React from 'react';
const ContactSidebar = () => {
  return (
    <aside className="w-full md:w-1/4">
      <div className="bg-white border border-gray-300 p-4 shadow-sm">
        <h2 className="text-xl font-serif text-[#1C4D8D] border-bottom border-gray-200 pb-2 mb-4 border-b">
          Contact Info
        </h2>
        
        <div className="mb-4">
          <img 
            src="https://picsum.photos/seed/contact/400/200" 
            alt="Contact" 
            className="w-full border border-gray-300 p-1 mb-4"
          />
        </div>

        <div className="space-y-4 text-sm font-sans">
          <div>
            <h3 className="font-bold text-base">Prof. Sok Soth</h3>
            <p className="italic text-gray-700">Dean</p>
          </div>

          <div className="text-gray-800">
            <p>210B, Building A, Royal University of Phnom Penh</p>
          </div>

          <div>
            <p className="font-bold">Email: <span className="font-normal text-blue-800 underline">sok.soth@rupp.edu.kh</span></p>
            <p className="font-bold">Telephone: <span className="font-normal">+855 77 608 250</span></p>
            <p className="font-bold">Website: <a href="https://fed.rupp.edu.kh" target="_blank" className="font-normal text-[#1C4D8D] underline">https://fed.rupp.edu.kh</a></p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ContactSidebar;
