import React, { useState } from "react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

function Project(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      id={props.id}
      className="basis-full sm:basis-1/2 lg:basis-1/3 cursor-pointer border border-white"
    >
      <div type="button" onClick={toggleModal}>
        <Image
          className="h-full"
          src={props.image}
          alt={props.alt}
          width="600"
          height="338"
          layout="responsive"
        />
      </div>
      <ProjectModal isOpen={isOpen} handleClose={toggleModal} {...props} />
    </div>
  );
}

export default Project;
