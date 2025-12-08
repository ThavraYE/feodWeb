

function handleClick(message, onlinktablesate){

    if(message){
        onlinktablesate(false);
    }
    setTimeout(() => {
        onlinktablesate(!message);
    }, 200);
    
}
function handleClickBa(messageBa, onlinktablesateBa){

    if(messageBa){
        onlinktablesateBa(false);
    }
    setTimeout(() => {
        onlinktablesateBa(!messageBa);
    }, 200);
    
}

function handleClickMa(messageMa, onlinktablesateMa){

    if(messageMa){
        onlinktablesateMa(false);
    }
    setTimeout(() => {
        onlinktablesateMa(!messageMa);
    }, 200);
    
}
function TableComponent(  { program, teacherEducation, principalEducation, linktablesate, onlinktablesate,linktablesateBa,onlinktablesateBa,linktablesateMa,onlinktablesateMa }) {
    return   <div className=" w-1/2 flex flex-col items-center justify-center ">
                <h1 className=" text-2xl font-bold p-4">
                  {" "}
                  {program}
                </h1>
                <table className="m-4 border-collapse">
                  <thead>
                    <tr className="bg-[#3396D3] text-white">
                      <th  className="p-4 border border-black">
                        Teacher Education
                      </th>
                      <th className="p-4 border border-black">
                        Principal Education
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td onClick={(message) => handleClick(linktablesate,onlinktablesate)} className="p-4 text-start hover:underline cursor-pointer border">
                        {teacherEducation[0]}
                      </td>
                      <td onClick={(message) => handleClick(linktablesate,onlinktablesate)} className="p-4 text-start hover:underline cursor-pointer border">
                        {principalEducation[0]}
                      </td>
                    </tr>

                    <tr>
                      <td onClick={(messageBa) => handleClickBa(linktablesateBa,onlinktablesateBa)} className="p-4 border hover:underline cursor-pointer">{teacherEducation[1]}</td>
                      <td onClick={(messageBa) => handleClickBa(linktablesateBa,onlinktablesateBa)} className="p-4 border hover:underline cursor-pointer">{principalEducation[1]}</td>
                    </tr>

                    <tr>
                      <td onClick={(message) => handleClick(linktablesateMa,onlinktablesateMa)} className="p-4 text-start hover:underline cursor-pointer border">
                        {teacherEducation[2]}
                      </td>
                      <td onClick={(message) => handleClick(linktablesateMa,onlinktablesateMa)}  className="p-4 text-start hover:underline cursor-pointer border">
                        {principalEducation[2]}
                      </td>
                    </tr>
                    <tr>
                      <td onClick={(message) => handleClick(linktablesate,onlinktablesate)} className="p-4 text-start hover:underline cursor-pointer border">
                        {teacherEducation[3]}
                      </td>
                      <td onClick={(message) => handleClick(linktablesate,onlinktablesate)} className="p-4 text-start hover:underline cursor-pointer border">
                        {principalEducation[3]}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>;
           
}

export default TableComponent;