import React from "react";
import Marks from "./Marks";

const DisplayMarks = () => {
    const Student = [
        {name: "Rishabh", roll: 6464982, m1: 80, m2: 95, m3: 86},
        {name: "Agrawal", roll: 6464482, m1: 80, m2: 95, m3:86},
        {name: "Harsh", roll: 6464683, m1: 80, m2: 95, m3: 86},
        {name: "Kishan", roll: 6464622, m1: 80, m2: 95, m3:86},
        {name: "Patel", roll: 6464684, m1: 90, m2: 95, m3: 78}
    ];
  return (
    <div>
        {
            Student.map((Student, index) =>{
                return(
                <Marks
                  key={index}
                  name={Student.name}
                  roll={Student.roll}
                  m1={Student.m1}
                  m2={Student.m2}
                  m3={Student.m3} />
                )
            })
        }
      
    </div>
  );
};

export default DisplayMarks;