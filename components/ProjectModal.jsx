import React, { useState } from "react"
import Modal from "react-modal";

Modal.setAppElement("#__next")

const ProjectModal = (props) => {

  function toggleModal() {
    console.log(`toggle Modal`)
    setIsOpen(!isOpen);
  }

  return (
    <Modal
      isOpen={props.isOpen}
      contentLabel="My dialog"
      className="mymodal"
      closeTimeoutMS={500}
    >
      <div
        className="fixed top-0 left-0 z-[1060] w-full h-full overflow-x-hidden overflow-y-auto outline-0 transition-opacity"
        id={`modal-${props.id}`}
      >
        <div className="transition-transform w-auto max-w-lg my-7 mx-auto relative">
          <div className="relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding border border-solid border-stone-900 rounded outline-none">
            <div className="">
              <h1 className="modal-title" id="exampleModalLabel">
                {props.title ? props.title : `title here`}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {props.text
                ? props.text
                : `Does not wisdom call out?
		Does not understanding raise her voice?`}
            </div>
            <div className="modal-footer">
              <a
                className="btn modal-link"
                target="_blank"
                rel="noopener noreferrer"
                href={props.link}
              >
                website
              </a>
              <a
                className="btn modal-link"
                target="_blank"
                rel="noopener noreferrer"
                href={props.repo}
              >
                github
              </a>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
