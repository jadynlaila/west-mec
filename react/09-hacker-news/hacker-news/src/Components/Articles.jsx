import React, { useState, useEffect } from "react";
import { useAppContext } from "../util/context";

const Articles = () => {
  const { hits, loading, removeStory } = useAppContext();
  if(loading){
    return(
      <div className="loading">loading</div>
    )
  }
  return (
  
    <div className="articles">
      {hits.map((hit) => {
        const { objectID: id, title, url, points, author, num_comments} = hit;
        return (
          <div key={id} className="article">
            <h4 className="title">{title}</h4>
            <p className="info">{points} points by <span>{author}</span> | {num_comments} comments</p>
            <div>
              <a href={url} className="readMore" target='_blank' rel="noopener noreferrer">read more</a>
            </div>
            <button className="remove" onClick={() => removeStory(id)}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
