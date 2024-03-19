import React, { useState } from "react";
import data from "./data";
const AccordianV2 = () => {
  const [activeQuestion, setactiveQuestion] = useState(null);

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center ">
          <div className="w-[89%] m-auto max-w-[1400px] bg-gray-300 p-8 rounded-lg shadow-md">
          
          <h2 className="text-2xl mb-6 font-semibold"> Frequenlty</h2>
          </div>
    </div>
  );
};

export default AccordianV2;
