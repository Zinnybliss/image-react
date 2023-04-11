import React from "react";

const Body = ({ title, firstName, lastName, picture, id }) => {
  return (
    <div className="twist">
      <div className="mini">
        <img src={picture} className="pic" alt="" />

        <div>
          <h3 className="id">{id}</h3>
          <span className="name">
            {title}. {firstName}. {lastName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Body;
