
import React from 'react';

const MainContent = ({ title, content, loading }) => {
  const formatContent = (text) => {
    return text.split('\n').map((para, index) => {
      if (!para.trim()) return <br key={index} />;
      
      if (para.startsWith('### ')) return <h3 key={index} className="text-lg font-bold mt-4 mb-2">{para.replace('### ', '')}</h3>;
      if (para.startsWith('## ')) return <h2 key={index} className="text-xl font-bold mt-6 mb-3">{para.replace('## ', '')}</h2>;
      if (para.startsWith('**') && para.endsWith('**')) return <p key={index} className="font-bold mb-4">{para.replace(/\*\*/g, '')}</p>;
      if (para.startsWith('- ')) return <li key={index} className="ml-6 list-disc mb-1">{para.replace('- ', '')}</li>;
      
      return <p key={index} className="mb-4 leading-relaxed text-gray-800">{para}</p>;
    });
  };

  return (
    <main className="w-full md:w-1/2 min-h-[600px]">
      <div className="bg-white border border-gray-300 p-8 shadow-sm">
        <h1 className="text-3xl font-serif text-gray-800 mb-8 border-b border-gray-100 pb-4">
          {title}
        </h1>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1C4D8D]"></div>
            <p className="text-gray-500 font-serif italic">Loading academic records...</p>
          </div>
        ) : (
          <div className="prose max-w-none font-serif text-lg">
            {formatContent(content)}
          </div>
        )}
      </div>
    </main>
  );
};

export default MainContent;
