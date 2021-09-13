import React from "react";
import { useArticleContext } from "../util/useContext";

const url = "https://hn.algolia.com/api/v1/search?query=";

const Articles = () => {
  const { articles, loading } = useArticleContext();
  if (loading) {
    return <div className="loading">loading</div>;
  }
  if (!loading) {
    return <div className="articles">working</div>;
  }
};

export default Articles;
