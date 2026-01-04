
function TeamMemProfile({ name,image, memDetail, duty, onViewMore }) {
  return (
    <div className="w-75 bg-white  rounded-lg shadow-xl overflow-hidden text-center hover:shadow-2xl transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-contain"
      />

      <div className="px-6 py-5">
        <h2 className="text-2xl font-bold inline-flex items-center gap-1 text-gray-800">
          {name}
        </h2>

        <p className="text-gray-600 text-base mt-2 mb-4 h-17.5 overflow-hidden">
          {memDetail}
        </p>

        <div className="flex justify-center gap-12 mb-6 text-gray-600">
          <div>
            <span className="text-black font-bold text-lg">{duty}</span>
          </div>
        </div>

        <button
          onClick={onViewMore}
          className="bg-white text-black border-2 border-gray-300 font-bold text-base px-6 py-3 rounded-md hover:bg-[#3396D3] hover:text-white hover:border-[#3396D3] transition-all duration-300"
        >
          View More
        </button>
      </div>
    </div>
  );
}

export default TeamMemProfile;