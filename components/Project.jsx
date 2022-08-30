import React, { useState } from "react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
import Portal from "./Portal";
// import "./Project.css";
// import ProjectModal from "./ProjectModal";

function Project(props) {
  // console.log(`props in Project.jsx`)
  // console.log(props)

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    console.log(`toggle Modal`);
    setIsOpen(!isOpen);
  }

  return (
    <div
      id={props.id}
      className="basis-full sm:basis-1/2 lg:basis-1/3 cursor-pointer"
    >
      <div
        type="button"
        onClick={toggleModal}
        // data-bs-toggle="modal"
        // data-bs-target={`#modal-${props.id}`}
      >
        <Image
          className=""
          src={props.image}
          alt={props.alt}
          width="600"
          height="338"
        />
      </div>
      {/* <Portal open={isOpen} onClose={() => setIsOpen(false)} props={props}>
        Portal stuff
      </Portal> */}
      <ProjectModal isOpen={isOpen} {...props} />
    </div>
  );
}

export default Project;
