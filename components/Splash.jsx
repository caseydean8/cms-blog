// shortcut rafce
// import React from "react";
import Typed from "react-typed";

const Splash = () => {
  return (
    <div className="my-8">
      <h1 className="text-5xl font-semibold py-2">let's go</h1>
        <Typed
          className="text-teal font-bold text-6xl pl-7 py-2"
          strings={["React", "Node", "Mongo", "MySQL", "Express", "jQuery"]}
          typeSpeed={100}
          backSpeed={60}
          backDelay={2100}
          showCursor={false}
          // loop
        />
      <h4 className="font-medium py-2 text-xl">
        Welcome to the Portfolio of Casey Carroll, Full Stack Developer
      </h4>
    </div>
  );
};

export default Splash;
