import React from "react";
import imgAboutBanner from "../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Banner from "../../components/banner/Banner";
import Collapse from "../../components/collapse/Collapse";
import "./about.css";
import aboutList from "./aboutList.json";

const About = () => {
  return (
    <div className="about_container">
      <Banner image={imgAboutBanner} />
      {aboutList.map((about) => (
        <div className="about_list-item abt-list" key={about.title}>
          <Collapse title={about.title} text={about.content} />
        </div>
      ))}
    </div>
  );
};

export default About;
