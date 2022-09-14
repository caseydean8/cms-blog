// shortcut rafce
// import React from "react";
import Typed from "react-typed";

const Splash = () => {
  return (
    <div className="my-8 max-w-5xl mx-auto">
      <h1 className="text-5xl font-semibold py-2">let's go</h1>
      <div className="pb-4">
        <Typed
          className="text-teal font-bold text-6xl pl-7"
          strings={["React", "Node", "Mongo", "MySQL", "Express", "jQuery"]}
          typeSpeed={100}
          backSpeed={60}
          backDelay={2100}
          showCursor={false}
          loop
        />
      </div>
      <h4 className="py-2 text-xl">
        Welcome to the Portfolio of Casey Carroll, Full Stack Developer
      </h4>
    </div>
  );
};

export default Splash;
