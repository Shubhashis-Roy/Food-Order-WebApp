import User from "../components/User";
import UserClass from "../components/UserClass";
import React from "react";
const About = () => {
  return (
    <>
      <h1> About Page</h1>
      <div style={{ display: "flex" }}>
        {/* <User name={"Subhashis (function)"} /> */}

        <UserClass name={"Subhashis (Class)"} place={"Ranirhat Class"} />
      </div>
    </>
  );
};

export default About;
