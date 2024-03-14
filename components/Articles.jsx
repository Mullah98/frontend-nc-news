import { useEffect, useState } from 'react'
import { fetchAllArticles } from '../Api'
import ArticleCard from './ArticleCard';

export default function Articles () {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchAllArticles()
          .then((response) => {
    
            setArticles(response); 
    
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching articles:', error);
            setIsLoading(false);
          });
        }, []);
    
        if (isLoading) {
        return <h1 className='loading'>Currently loading articles...</h1>;
        }
    

        return (
        <div className="articles">
        {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article}/>
        })}
        </div>
        )      
}