const tableProgram = [
  {
    program: "Early Childhood Education Program",
    teacherEducation: [
      "Certificate Program",
      "Bachelor's Degree Program",
      "Master's Degree Program",
      "PhD's Degree Program",
    ],
    principalEducation: [
      "Certificate Program",
      "Bachelor's Degree Program",
      "Master's Degree Program",
      "PhD's Degree Program",
    ],
  },
  {
    program: "Primary Education Program",
    teacherEducation: [
      "Certificate Program",
      "Bachelor's Degree Program",
      "Master's Degree Program",
      "PhD's Degree Program",
    ],
    principalEducation: [
      "Certificate Program",
      "Bachelor's Degree Program",
      "Master's Degree Program",
      "PhD's Degree Program",
    ],
  },
  {
    program: "Secondary Education Program",
    teacherEducation: [
      "Certificate Program",
      "Bachelor's Degree Program",
      "Master's Degree Program",
      "PhD's Degree Program",
    ],
    principalEducation: [
      "Certificate Program",
      "Bachelor's Degree Program",
      "Master's Degree Program",
      "PhD's Degree Program",
    ],
  },
];

function handleClick(message, onlinktablesate, program, level = '') {
  // Access program here! 🎉
  console.log('Clicked program:', program); // Example: "Early Childhood Education Program"
  if (level) console.log('Clicked level:', level); // Optional: "Certificate Program"

  if (message) {
    onlinktablesate(false);
  }
  setTimeout(() => {
    onlinktablesate(!message);
  }, 200);
}

function handleClickBa(messageBa, onlinktablesateBa, program, level = '') {
  // Access program here!
  console.log('Clicked program:', program);
  if (level) console.log('Clicked level:', level);

  if (messageBa) {
    onlinktablesateBa(false);
  }
  setTimeout(() => {
    onlinktablesateBa(!messageBa);
  }, 200);
}

function handleClickMa(messageMa, onlinktablesateMa, program, level = '') {
  // Access program here!
  console.log('Clicked program:', program);
  if (level) console.log('Clicked level:', level);

  if (messageMa) {
    onlinktablesateMa(false);
  }
  setTimeout(() => {
    onlinktablesateMa(!messageMa);
  }, 200);
}

function TableComponent({ linktablesate, onlinktablesate, linktablesateBa, onlinktablesateBa, linktablesateMa, onlinktablesateMa }) {
  return (
    <div className="flex flex-wrap justify-center"> {/* Wrapper for multiple tables */}
      {tableProgram.map((items, idx) => (
        <div key={idx} className="w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold p-4">
            {items.program} {/* Use items.program here */}
          </h1>
          <table className="m-4 border-collapse">
            <thead>
              <tr className="bg-[#3396D3] text-white">
                <th className="p-4 border border-black">Teacher Education</th>
                <th className="p-4 border border-black">Principal Education</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  onClick={() => handleClick(linktablesate, onlinktablesate, items.program, items.teacherEducation[0])}
                  className="p-4 text-start hover:underline cursor-pointer border"
                >
                  {items.teacherEducation[0]}
                </td>
                <td
                  onClick={() => handleClick(linktablesate, onlinktablesate, items.program, items.principalEducation[0])}
                  className="p-4 text-start hover:underline cursor-pointer border"
                >
                  {items.principalEducation[0]}
                </td>
              </tr>
              <tr>
                <td
                  onClick={() => handleClickBa(linktablesateBa, onlinktablesateBa, items.program, items.teacherEducation[1])}
                  className="p-4 border hover:underline cursor-pointer"
                >
                  {items.teacherEducation[1]}
                </td>
                <td
                  onClick={() => handleClickBa(linktablesateBa, onlinktablesateBa, items.program, items.principalEducation[1])}
                  className="p-4 border hover:underline cursor-pointer"
                >
                  {items.principalEducation[1]}
                </td>
              </tr>
              <tr>
                <td
                  onClick={() => handleClickMa(linktablesateMa, onlinktablesateMa, items.program, items.teacherEducation[2])}
                  className="p-4 text-start hover:underline cursor-pointer border"
                >
                  {items.teacherEducation[2]}
                </td>
                <td
                  onClick={() => handleClickMa(linktablesateMa, onlinktablesateMa, items.program, items.principalEducation[2])}
                  className="p-4 text-start hover:underline cursor-pointer border"
                >
                  {items.principalEducation[2]}
                </td>
              </tr>
              <tr>
                <td
                  onClick={() => handleClick(linktablesate, onlinktablesate, items.program, items.teacherEducation[3])}
                  className="p-4 text-start hover:underline cursor-pointer border"
                >
                  {items.teacherEducation[3]}
                </td>
                <td
                  onClick={() => handleClick(linktablesate, onlinktablesate, items.program, items.principalEducation[3])}
                  className="p-4 text-start hover:underline cursor-pointer border"
                >
                  {items.principalEducation[3]}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      
    </div>
  );
}

export default TableComponent;