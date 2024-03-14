import { Link } from 'react-router-dom'

export default function ArticleCard(article) {
    return (
        <div className='article-title'>
            <Link to={`/articles/${article.article.article_id}`}>
            <h3>{article.article.title}</h3>
            <img src={article.article.article_img_url}/>
            </Link>
        </div>
    )
}