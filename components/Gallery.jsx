import React from "react";
import Project from "./Project";
import data from "../services/data";

const Gallery = () => {
  return (
    <div className="flex flex-wrap -mx-12 shadow-lg">
      {data.map((item, index) => {
        return (
          <Project
            key={index}
            id={item.id}
            image={item.image.src}
            alt={`${item.id} image`}
            title={item.title}
            text={item.text}
            link={item.link}
            repo={item.repo}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
