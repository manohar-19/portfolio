import React from "react";
import CV from "../../assets/Resume_Manohar_R.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="Resume_Manohar_R" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
