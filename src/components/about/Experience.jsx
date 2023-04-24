import React from "react";

const experienceContent = [
  {
    year: "2022 - present",
    position: "Frontend engineer",
    compnayName: "OOO CROWE TAC",
    details: `As an accomplished professional with valuable experience in product audit at the esteemed accounting firm, Crowe, I have honed my skills in the field and contributed to the company's reputation for excellence. Throughout my tenure at Crowe, I have been involved in a wide array of product audit projects, which have strengthened my expertise in financial analysis, risk assessment, and regulatory compliance. Working closely with clients from various industries, I have been able to effectively communicate complex financial data and deliver impactful recommendations to improve their internal processes and financial health. My experience at Crowe has not only enhanced my technical proficiency but has also fostered my ability to build and maintain strong client relationships, positioning me as a trusted and competent advisor in the realm of product audit accounting.`,
  },
  {
    year: "2020 - 2022",
    position: "Web Developer",
    compnayName: "OOO TUNE CONSULTING",
    details: `As a dedicated professional with extensive experience in an outsourcing company, I have had the privilege of working on a diverse range of projects that have contributed to my growth and expertise. Collaborating with a wide array of clients and industries, I have been able to refine my skills in communication, project management, and problem-solving. Notable projects I have worked on include process optimization for a leading manufacturing firm, software development for a promising tech startup, and customer service support for a renowned e-commerce platform. Each of these opportunities has allowed me to broaden my perspective, enhance my adaptability, and establish a reputation as a reliable and innovative team player.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
