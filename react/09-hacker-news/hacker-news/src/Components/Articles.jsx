import React, { useState, useEffect } from "react";
import { useAppContext } from "../util/context";

const Articles = () => {
  const { hits, loading, removeStory } = useAppContext();
  console.log(hits, loading, removeStory);
  return (
    <div>
      {hits.map((hit, id) => {
        const { title, url} = hit;
        return (
          <div key={id}>
            <h4 className="title">{title}</h4>
            <p className="readMore">{url}</p>
            <p className="remove" onClick={(id) => removeStory()}>
              remove
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
