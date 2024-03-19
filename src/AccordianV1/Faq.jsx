import React from "react";
import AccordianV1 from "./AccordianV1";

const Faq = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <AccordianV1
        title="Do you pefer Andriod or Iso"
        answer="I like to use Android"
      />
      <AccordianV1
        title="Do you like coffe or tea"
        answer="I like to drink tea"
      />
      <AccordianV1
        title="Do you pefer cake or muffin"
        answer="I like to eat cake"
      />
    </div>
  );
};

export default Faq;

// "w-full h-screen bg-gradient-to-r from-indigo-500 to-blue-600"
