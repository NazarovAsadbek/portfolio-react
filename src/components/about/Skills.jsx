import React from "react";

const skillsContent = [
    {skillClass: "p40", skillPercent: "40", skillName: "HTML"},
    {skillClass: "p30", skillPercent: "30", skillName: "JAVASCRIPT"},
    {skillClass: "p20", skillPercent: "20", skillName: "CSS"},
    {skillClass: "p10", skillPercent: "10", skillName: "PHP"},
    {skillClass: "p30", skillPercent: "30", skillName: "JQUERY"},
    {skillClass: "p40", skillPercent: "40", skillName: "ANGULAR"},
    {skillClass: "p20", skillPercent: "20", skillName: "REACT"},
    {skillClass: "p50", skillPercent: "50", skillName: "VUE"},
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
