import React from "react";

const educationContent = [
  {
    year: "2022, " + new Date().getFullYear(),
    degree: "Frontend engineer",
    institute: "UDEMY.COM",
    details: `At the Udemy online study platform, I embarked on a diverse and enriching learning journey, where I acquired a comprehensive understanding of various web development and IT-related technologies. Throughout the coursework, I gained proficiency in essential front-end languages, such as HTML and CSS, and honed my skills in JavaScript and TypeScript for dynamic web applications.My studies also encompassed cutting-edge tools and methodologies, including Docker and Ansible for streamlined deployment and configuration management. Furthermore, I delved into the world of microservices architecture, mastering the Nest framework to create scalable and maintainable applications. To ensure optimal performance, I also became adept at using JMeter for performance testing and analysis.This well-rounded and extensive education from Udemy has equipped me with the technical know-how and practical skills necessary to excel in the rapidly evolving world of web development and IT, enabling me to contribute effectively to diverse projects and teams.`,
  },
  {
    year: "2018",
    degree: "Tashkent Professional College of Automation and Radio Engineering",
    institute: "TPC&A",
    details: `At the Tashkent Professional College of Automation and Radio Engineering, I had the opportunity to pursue a comprehensive education in the Faculty of Accounting, which laid the foundation for my career in the field. Throughout my studies, I gained essential knowledge in areas such as financial accounting, cost accounting, taxation, and auditing. I also developed a strong understanding of relevant accounting software and tools, enabling me to efficiently navigate the digital landscape of the profession.Moreover, my time at the college exposed me to the importance of ethical practices and effective communication in the accounting industry. By participating in various group projects and case studies, I was able to cultivate my teamwork and problem-solving skills, which have proven invaluable in my professional pursuits. The well-rounded education I received at the Tashkent Professional College of Automation and Radio Engineering has been instrumental in shaping my career as a proficient and conscientious accounting professional.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
