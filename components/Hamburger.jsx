import React from "react";

const Hamburger = (props) => {
  return (
    <>
      <div className="md:hidden col-start-7 justify-self-end pt-[4px]">
        <input
          id="checkbox4"
          type="checkbox"
          onClick={props.onClick}
          className="checkbox4 visuallyHidden"
        />
        <label htmlFor="checkbox4">
          <div className="hamburger hamburger4">
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
            <span className="bar bar4"></span>
            <span className="bar bar5"></span>
          </div>
        </label>
      </div>
    </>
  );
};

export default Hamburger;
