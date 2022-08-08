import React from "react";
// import "./Project.css";
// import ProjectModal from "./ProjectModal";

function Project(props) {
  return (
    <div id={props.id} className="project col-sm-6 col-lg-4 p-0">
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#modal-${props.id}`}
      >
        <img
          className="project-image"
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
