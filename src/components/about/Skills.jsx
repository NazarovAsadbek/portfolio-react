import React from "react";

const skillsContent = [
  { skillClass: "p75", skillPercent: "75", skillName: "HTML & PUG" },
  { skillClass: "p60", skillPercent: "60", skillName: "CSS & SCSS" },
  { skillClass: "p89  ", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p60", skillPercent: "60", skillName: "TYPESCRIPT" },
  { skillClass: "p90", skillPercent: "90", skillName: "VUE & NUXT" },
  { skillClass: "p60", skillPercent: "60", skillName: "REACT & NEXT" },
  { skillClass: "p75", skillPercent: "75", skillName: "JEST" },
  { skillClass: "p60", skillPercent: "60", skillName: "NODE & NEST" },
  { skillClass: "p75", skillPercent: "75", skillName: "DOCKER & ANSIBLE" },
  { skillClass: "p60", skillPercent: "60", skillName: "HUSKY" },
  { skillClass: "p75", skillPercent: "75", skillName: "GITHUB ACTIONS" },
  { skillClass: "p60", skillPercent: "60", skillName: "GITLAB CI/CD" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
