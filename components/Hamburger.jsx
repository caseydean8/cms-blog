import React from "react";

const Hamburger = () => {
  return (
    <>
      <div className="md:hidden justify-self-end pt-[2px]">
        <input
          type="checkbox"
          id="checkbox4"
          class="checkbox4 visuallyHidden"
        />
        <label for="checkbox4" style={{}}>
          <div class="hamburger hamburger4">
            <span class="bar bar1"></span>
            <span class="bar bar2"></span>
            <span class="bar bar3"></span>
            <span class="bar bar4"></span>
            <span class="bar bar5"></span>
          </div>
        </label>
      </div>
    </>
  );
};

export default Hamburger;
