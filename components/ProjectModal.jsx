import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const ProjectModal = (props) => {
  function toggleModal() {
    console.log(`toggle Modal`);
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
            {/* may need border-top-radius: calc(.3rem - 1px) below */}
            <div className="flex shrink-0 items-center justify-between p-4 pb-0">
              <h1
                className="text-teal text-4xl font-semibold leading-normal"
                id="exampleModalLabel"
              >
                {props.title ? props.title : `title here`}
              </h1>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div className="relative flex-auto p-4">
              {props.text
                ? props.text
                : `Does not wisdom call out?
		Does not understanding raise her voice?`}
            </div>
            <div className="flex flex-wrap shrink-0 items-center justify-end p-3">
              <a
              // font-normal leading-normal text-center?
                className="inline-block cursor-pointer select-none border border-teal text-teal rounded py-1.5 px-3 m-1"
                target="_blank"
                rel="noopener noreferrer"
                href={props.link}
              >
                website
              </a>
              <a
                className="inline-block cursor-pointer select-none border border-teal text-teal rounded py-1.5 px-3 m-1"
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
