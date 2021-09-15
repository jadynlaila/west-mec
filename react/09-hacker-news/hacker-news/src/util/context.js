import React, { useEffect, useReducer, useContext } from "react";
import { reducer } from "./reducer";

const API_ENDPOINT = `https://hn.algolia.com/api/v1/search?`;

//the state object that holds the values for the context
//this is used by the reducer
//
const initialState = {
  hits: [],
  query: "react",
  nbPages: 0,
  page: 0,
  loading: true,
};

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchHits = async (url) => {
    //sets loading to true
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "SET_HITS", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch= (query) => {
    dispatch({type: 'HANDLE_SEARCH', payload: query})
  }

  const removeStory = (id) => {
    dispatch({ type: "REMOVE_STORY", payload: id });
  };

  const handlePage = (value) => {
    dispatch({type: "HANDLE_PAGE", payload: value})
  }

  useEffect(() => {
    fetchHits(`${API_ENDPOINT}query=${state.query}&page=${state.page}&`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider value={{ ...state, removeStory, handleSearch, handlePage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
