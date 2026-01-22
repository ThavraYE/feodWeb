const DEGREE_LEVELS = ["certificate", "bachelor", "master", "phd"];

export default function TableComponent({
  program,
  teacher,          // renamed from teacherEducation for consistency
  principal,        // renamed from principalEducation
  onProgramClick,
  setDropdownStates,
}) {
  const handleClick = (level, isTeacher = false) => {
    // 1. Set the selected program
    onProgramClick(program);

    // 2. Open the correct dropdown
    const key = isTeacher ? `teacher${level.charAt(0).toUpperCase() + level.slice(1)}` : level;

    setDropdownStates((prev) => ({
      ...prev,
      [key]: true,   // ← open this dropdown
    }));
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-2 sm:px-4">
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold p-4 text-center">{program}</h1>
      <div className="w-11/12 ">
      <table className="min-w-[350px] sm:min-w-full m-4 border-collapse">
        <thead>
          <tr className="bg-[#1C4D8D] text-white">
            <th className="p-2 sm:p-4 border border-black text-sm sm:text-base">Teacher Education</th>
            <th className="p-2 sm:p-4 border border-black text-sm sm:text-base">Principal Education</th>
          </tr>
        </thead>
        <tbody>
          {DEGREE_LEVELS.map((level, index) => (
            <tr key={level}>
              <td
                onClick={() => handleClick(level, true)}
                className="p-4 text-start hover:underline cursor-pointer border hover:bg-blue-50 transition-colors"
              >
                {teacher[index]}
              </td>
              <td
                onClick={() => handleClick(level)}
                className="p-4 text-start hover:underline cursor-pointer border hover:bg-blue-50 transition-colors"
              >
                {principal[index]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}