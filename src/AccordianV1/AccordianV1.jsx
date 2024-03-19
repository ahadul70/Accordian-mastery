import React, { useState } from "react";

const AccordianV1 = ({ title, answer }) => {
  const [accordianOpen, setAccordianOpen] = useState(false);
  return (
    <div className="py-2">
      <button
        className="flex justify-between w-full"
        onClick={() => setAccordianOpen(!accordianOpen)}
      >
        <span> {title}</span>
        {accordianOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordianOpen
            ? "grid-rows-[1fr] opacity-100 "
            : "grid-rows-[0fr] opacity-00"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default AccordianV1;
