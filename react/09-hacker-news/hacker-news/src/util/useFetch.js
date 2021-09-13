import { useState, useEffect, useCallback } from "react";
const API_ENDPOINT = `https://hn.algolia.com/api/v1/search?`;

export const useFetch = async (url) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const getArticles = useCallback(async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setArticles(data.hits);
    setLoading(false);
}, []);
    return {loading, articles, setLoading, setArticles}
};


