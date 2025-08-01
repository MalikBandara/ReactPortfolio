import React from "react";
import { EDUCATION } from "../constants";

const Work = () => {
  return (
    <section id="experience">
      <h2 className="my-10 text-center text-3xl lg:text-8xl ">
        Education Achievement
      </h2>
      <div className="mx-auto max-w-6xl ">
        {EDUCATION.map((experience, id) => (
          <div key={id} className="mx-4 mb-20 ">
            <h2 className="font-medium  lg:text-2xl ">
              {experience.institute}
            </h2>
            <div className="flex justify-between">
              <p className="py-4 tracking-wide lg:text-xl">
                {experience.course}
              </p>
              <p className="py-4 lg:text-xl ">{experience.year}</p>
            </div>
            <p className="font-sans text-gray-400 ">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
