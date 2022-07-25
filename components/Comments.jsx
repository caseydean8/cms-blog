import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";
// Curly braces are for named (often multiple) exports from a file. They are not needed for a default export
import { getComments } from "../services";
import Vote from "./Vote";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);
  const [hidden, setHidden] = useState("hidden");

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, [slug]);

  return (
    <>
      {comments.length && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} {comments.length != 1 ? "Comments" : "Comment"}
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className="border-b border-gray-100 mb-4 pb-4"
            >
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
              {/* <Vote /> */}
            </div>
          ))}
          {/* <div
            className={`${hidden} grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4`}
          >
            <input
              type="text"
              // ref={nameEl}
              className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
              placeholder="Name"
              name="name"
            />
            <input
              type="email"
              // ref={emailEl}
              className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className={`${hidden} grid grid-cols-1 gap-4 mb-4`}>
            <div>
              <input
                // ref={storeDataEl}
                type="checkbox"
                id="storeData"
                name="storeData"
                value="true"
              />
              <label
                className="text-gray-500 cursor-pointer ml-2"
                htmlFor="storeData"
              >
                Save my name and email
              </label>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
};

export default Comments;
