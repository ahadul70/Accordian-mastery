import React, { useState } from "react";
import Data from "./Data";
const AccordianvV3 = () => {
  const [active, Setactive] = useState(null);

  return (
    <div>
      <div>
        <h2>Fequently Asked Question</h2>
        <div>
          {Data.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => {
                  Setactive(item.id === active ? null: item.id);
                }}
              >
                {item.question}
                {active === item.id ? "-" : "+"}
              </button>
              {active === item.id && (
                <div >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordianvV3;
