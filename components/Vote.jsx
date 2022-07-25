import React, {useState} from "react";

const Vote = () => {
  const [upVoted, setUpVoted] = useState("none");
  const [downVoted, setDownVoted] = useState("none");

  const handleUpvote = (e) => {
    e.preventDefault();
    console.log(upVoted);
    upVoted === "none" ? setUpVoted("green") : setUpVoted("none");
    setDownVoted("none");
  };

  const handleDownVote = (e) => {
    e.preventDefault();
    console.log(downVoted);
    downVoted === "none" ? setDownVoted("red") : setDownVoted("none");
    setUpVoted("none");
  };

  return (
    <div className="flex items-center w-full">
      <div type="button" onClick={handleUpvote} className="cursor-pointer">
        <svg
          width="35px"
          height="35px"
          viewBox="0 0 1000 1000"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <style>{`.cls-1,.cls-2{fill:${upVoted};stroke:#020202;stroke-linecap:round;stroke-width:22px;}.cls-1{stroke-miterlimit:10;}.cls-2{stroke-linejoin:round;}`}</style>
          </defs>
          <path
            className="cls-1"
            d="M301.18,682.59V462a14.3,14.3,0,0,0-14.3-14.3H236.45a14.3,14.3,0,0,0-14.3,14.3V762.24a14.3,14.3,0,0,0,14.3,14.3h64.73"
          />
          <path
            className="cls-2"
            d="M777.85,540.63h0c-.31-24.72-21.79-44.69-46.51-44.37l7.89-3.32c23.62-6.4,38.77-31.16,32.44-55h0c-6.32-23.88-30.83-38.18-54.45-31.78L547.69,428.82a5,5,0,0,1-5-7.48l21.15-52.76c21-54,31.84-82.13,7.44-118.24-7.33-10.85-17.66-19.44-29.39-25.83h0c-4.54-2.48-10-.41-12.25,4.62l-65,116.4S438.27,386,419.08,414.36c-11.68,17.27-31.2,28.69-51.87,31.36l-11,1.42a4.84,4.84,0,0,0-4.21,4.79v319.6a4.83,4.83,0,0,0,5,4.83l282.78-8.11,74.66-2.94a45.07,45.07,0,0,0,44.37-45.5h0a45.09,45.09,0,0,0-39.69-44l3.32,0a45.07,45.07,0,0,0,44.36-45.49h0a45.08,45.08,0,0,0-39.43-44l6.14-.08A45.07,45.07,0,0,0,777.85,540.63Z"
          />
        </svg>
      </div>
      <div type="button" onClick={handleDownVote} id="downvote" className="cursor-pointer">
        <svg
          width="35px"
          height="35px"
          viewBox="0 0 1000 1000"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <style>{`.cls-3,.cls-4{fill:${downVoted};stroke:#020202;stroke-linecap:round;stroke-width:22px;}.cls-3{stroke-miterlimit:10;}.cls-4{stroke-linejoin:round;}`}</style>
          </defs>
          <path
            className="cls-3"
            d="M301.18,682.59V462a14.3,14.3,0,0,0-14.3-14.3H236.45a14.3,14.3,0,0,0-14.3,14.3V762.24a14.3,14.3,0,0,0,14.3,14.3h64.73"
          />
          <path
            className="cls-4"
            d="M777.85,540.63h0c-.31-24.72-21.79-44.69-46.51-44.37l7.89-3.32c23.62-6.4,38.77-31.16,32.44-55h0c-6.32-23.88-30.83-38.18-54.45-31.78L547.69,428.82a5,5,0,0,1-5-7.48l21.15-52.76c21-54,31.84-82.13,7.44-118.24-7.33-10.85-17.66-19.44-29.39-25.83h0c-4.54-2.48-10-.41-12.25,4.62l-65,116.4S438.27,386,419.08,414.36c-11.68,17.27-31.2,28.69-51.87,31.36l-11,1.42a4.84,4.84,0,0,0-4.21,4.79v319.6a4.83,4.83,0,0,0,5,4.83l282.78-8.11,74.66-2.94a45.07,45.07,0,0,0,44.37-45.5h0a45.09,45.09,0,0,0-39.69-44l3.32,0a45.07,45.07,0,0,0,44.36-45.49h0a45.08,45.08,0,0,0-39.43-44l6.14-.08A45.07,45.07,0,0,0,777.85,540.63Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Vote;
