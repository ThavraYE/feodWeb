import { useState, useRef, useEffect } from "react";
import DetailFourCredit from "./DetailAllCredit/DetailFourCredit";
import Detail15Credit from "./DetailAllCredit/Detail15Credit";
import Detail36Credit from "./DetailAllCredit/Detail36Credit";

export default function DropDownProgram({
  isOpen,
  setIsOpen,
  selectedProgram,
}) {
  const containRef = useRef(null);
  const [selectedCredit, setSelectedCredit] = useState("4 Credit");

  // Reset to 4 Credit every time dropdown opens
  useEffect(() => {
    if (isOpen) {
      setSelectedCredit("4 Credit");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isEarlyChildhood = selectedProgram === "Early Childhood Education Program";

  return (
    <div 
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 "
      onClick={() => setIsOpen(false)} // click outside to close
    >
      <div ref={containRef}
        className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden  rounded-md shadow-2xl h-185 top-30 sticky"
        onClick={e => e.stopPropagation()} // prevent close when click inside
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-8 py-5 flex items-center justify-between z-10">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {selectedProgram}
            </h1>
            <p className="text-lg font-semibold text-gray-700 mt-1">
              Certificate Program
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
          >
            Close
          </button>
        </div>

        <div className="p-6 md:p-8">
          {/* Credit tabs - only for Early Childhood */}
          {isEarlyChildhood && (
            <div className="flex flex-wrap gap-3 mb-8 border-b pb-3">
              {["4 Credit", "15 Credit", "36 Credit"].map(credit => (
                <button
                  key={credit}
                  onClick={() => setSelectedCredit(credit)}
                  className={`
                    px-5 py-2 rounded-full font-medium transition
                    ${selectedCredit === credit 
                      ? "bg-[#1C4D8D] text-white shadow-md" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
                  `}
                >
                  {credit}
                </button>
              ))}
            </div>
          )}

          {/* Content */}
          {isEarlyChildhood ? (
            <>
              {selectedCredit === "4 Credit" && <DetailFourCredit />}
              {selectedCredit === "15 Credit" && <Detail15Credit />}
              {selectedCredit === "36 Credit" && <Detail36Credit />}
            </>
          ) : (
            <div className="py-12 text-center text-gray-600 text-lg">
              {selectedProgram === "Primary Education Program"
                ? "Content for Primary Education Certificate Program (coming soon)"
                : "Content for Secondary Education Certificate Program (coming soon)"}
            </div>
          )}
        </div>

        {/* Footer with scroll to top */}
        <div className="sticky bottom-0 bg-white border-t px-8 py-4 flex justify-end">
          <button
            onClick={() =>  containRef.current.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 px-5 py-2 bg-[#1C4D8D] hover:bg-blue-600 text-white rounded-md transition"
          >
            <span>↑</span> Back to Top
          </button>
        </div>
      </div>
    </div>
  );
}
