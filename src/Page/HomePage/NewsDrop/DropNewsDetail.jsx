
import { useState, useRef, useEffect } from "react";

function DropNewsDetail({ drop, setDrop, selectedNews }) {
  const [heightDropDown, setHeightDropDown] = useState(0);
  const bodyDropDown = useRef(null);

  useEffect(() => {
    if (drop && bodyDropDown.current) {
      const bodyHeight = bodyDropDown.current.scrollHeight;
      setHeightDropDown(bodyHeight + 20);
    } else {
      setHeightDropDown(0);
    }
  }, [drop, selectedNews]);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!drop) return null;

  return (
    <section
      className="fixed top-25 left-0 w-full bg-white shadow-2xl z-50 transition-all duration-700 ease-in-out overflow-y-auto"
      style={{ height: heightDropDown > 0 ? `${heightDropDown}px` : '0px', maxHeight: '88vh' }}>
      <div className="relative w-full h-full">
        <div ref={bodyDropDown} className="w-full h-fit">
            <div className="relative">
              <div className="pl-6">
                  <h1 className="headline text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-8">
                      {selectedNews.tittle}
                  </h1>
                  <div className="flex items-center text-sm text-gray-600 mt-4 space-x-4">
                      <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/></svg>
                          1 HR 51 MIN AGO
                      </span>
                  </div>

                  <div className="mt-2 text-sm text-gray-700">
                      By Helen Regan, Junko Ogura
                  </div>
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 ">
                      <div>
                          <img src={selectedNews.src} alt="Aerial view of Kashiwazaki-Kariwa Nuclear Power Plant" className="w-225 h-100 rounded-lg shadow-lg object-cover"/>
                      </div>
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-4 italic">
                      Tokyo Electric Power Company's Kashiwazaki-Kariwa Nuclear Power Plant in Kashiwazaki, Niigata, Japan. 
                      (Photos: Wikimedia/The Asahi Shimbun/Getty Images/Reuters)
                  </p>
                  <div className="mt-10 text-lg leading-relaxed text-gray-800 prose prose-lg max-w-none">
                      <p>
                        {selectedNews.details}
                      </p>
                  </div>
              </div>
          </div>
          <div className="w-full justify-end flex p-4 gap-4 mt-4 ">
            
            <button
              onClick={() => setDrop(false)}
              className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition-colors flex items-center gap-2"
            >
              <i className="fa-solid fa-times"></i>
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DropNewsDetail;