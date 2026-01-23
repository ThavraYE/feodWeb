
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center">     
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {children}
        </div>
      </div>
      
      <footer className="w-full border-t border-gray-300 mt-12 py-6 bg-white text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Faculty of Education - Royal University of Phnom Penh. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
