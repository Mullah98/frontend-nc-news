import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleCommentsById, fetchArticleId, patchArticleById } from "../Api";
import { Link } from 'react-router-dom'
import CommentsCard from "./CommentsCard";
import CommentAdder from "./CommentAdder";


export default function SingleArticle () {
    const [singleArticle, setSingleArticle] = useState({})
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [showComments, setShowComments] = useState(false)
    const [commentDeleted, setCommentDeleted] = useState(false)
    const {article_id} = useParams()

    const handleCommentState = (newState) => {
        setComments(newState)
    }

    useEffect(() => {
        fetchArticleId(article_id)
        .then(article => {
            setSingleArticle(article)
            setIsLoading(false)
        })
        fetchArticleCommentsById(article_id)
        .then(articleComments => {
            setComments(articleComments)
        })
    }, [article_id])

    const handleVote = (vote) => {
        patchArticleById(article_id, vote).then(({article}) => {
            setSingleArticle(article)
        }).catch(error => alert('Unable to vote', error))
    }

    const handleDeleteComment = () => {
        fetchArticleCommentsById(article_id)
        .then(articleComments => {
            setComments(articleComments)
            setCommentDeleted(true)
            setTimeout(() => setCommentDeleted(false), 3000)
        })
    }  

    const handleShowComments = () => {
        setShowComments(!showComments)
    }

    if (isLoading) {
        return (
            <h1 className="loading">Loading your article.....</h1>
        )
    }

    return (
        <>
        <div className="single-article">
            <h2 className="title">{singleArticle.title}</h2>
            <img src={singleArticle.article_img_url}></img>
            <h3 className="author">Author: {singleArticle.author}</h3>
            <h3 className="description">{singleArticle.body}</h3>
            <h3>Article votes: {singleArticle.votes}

            <button className="vote-btn" onClick={() => handleVote(1)}>👍</button>
            <button className="vote-btn" onClick={() => handleVote(-1)}>👎</button>

            </h3>

            <CommentAdder handleCommentState={handleCommentState}/>  

            <button className="comment-btn" onClick={handleShowComments}>
                {!showComments ? 'Click me to see comments!' : 'Click me to hide comments!'}
            </button>
        </div>

        {showComments && (
        <div className="comments-card">
        {commentDeleted && <div className="comment-deleted">Comment deleted!</div>}
        {comments.map(comment => {
            return <CommentsCard key={comment.comment_id} comment={comment} onDelete={handleDeleteComment} />
        })}
        </div>
        )}

        </>
    )
}