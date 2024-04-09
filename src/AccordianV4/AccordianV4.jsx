import React, { useState } from "react";
import Data from "./Data";

const AccordianV4 = () => {
  const [active, Setactive] = useState(null);
  return (
    <div>
      AccordianV4
      <h2>Faq</h2>
      <div>
              {Data.map((item) => (
                  <div key={item.id}>
                      <button
                          onClick={() => {
                              Setactive(active===item.id?null:item.id)
                      }}
                      >
                          {item.question}
                        {active===item.id?"-":"+"}
                      </button>
                      {active === item.id && (<div>{item.answer }</div>)}
                  
                  </div>
       ))}
    </div>
  );
};

export default AccordianV4;
