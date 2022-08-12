import React from "react";
// import "./Project.css";
// import ProjectModal from "./ProjectModal";

function Project(props) {
  return (
    <div id={props.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#modal-${props.id}`}
      >
        <img
          className=""
          src={props.image}
          alt={props.alt}
          width="600"
          height="338"
        />
      </button>
      {/* <ProjectModal {...props} /> */}
    </div>
  );
}

export default Project;
