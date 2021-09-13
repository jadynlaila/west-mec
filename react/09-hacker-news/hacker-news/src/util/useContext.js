import React, { useState, useContext } from 'react'
import { useFetch } from './useFetch';

const ArticleContext = React.createContext();

const AppProvider  = ({children}) => {
    const [query, setQuery] = useState('react');
    const {loading, articles, setLoading, setArticles} = useFetch(`${query}`);
    
    const removeArticle = (id) => {
        setArticles((articles) => articles.filter((article) => article.id !== id))
    }

    return (
        <ArticleContext.Provider value={{articles, removeArticle, loading, setLoading, setQuery}}>
            {children}
        </ArticleContext.Provider>
    )
}

export const useArticleContext = () => {
    return useContext(ArticleContext);
}

export {ArticleContext, AppProvider}