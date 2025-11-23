import React from "react";

const JobCards = (props) => {
  return (
    <div className="JobCards">
      <div className="company">

        <div className="topLine">
          <img src={props.brandLogo} alt="logo" />
          <button className="save">Saved</button>
        </div>

        <div className="description">
          <div className="companyName">
            <h2>{props.companyName}</h2>
            <h4 className="date">{props.datePosted}</h4>
          </div>

          <h1 className="role">{props.post}</h1>

          <div className="features">
            <button>{props.role}</button>
            <button>{props.mode}</button>
          </div>
        </div>

        <hr />

        <div className="buttom">
          <div className="det">
            <h3>{props.pay}</h3>
            <h5>{props.location}</h5>
          </div>

          <button>Apply Now</button>
        </div>

      </div>
    </div>
  );
};

export default JobCards;
