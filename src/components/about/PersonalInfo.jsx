import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Steve" },
  { meta: "last name", metaInfo: "Milner" },
  { meta: "Age", metaInfo: "27 Years" },
  { meta: "Nationality", metaInfo: "Tunisian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Tunis" },
  { meta: "phone", metaInfo: "+21621184010" },
  { meta: "Email", metaInfo: "you@mail.com" },
  { meta: "Skype", metaInfo: " steve.milner" },
  { meta: "langages", metaInfo: "French, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
