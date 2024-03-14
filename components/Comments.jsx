import { useEffect, useState } from "react"
import { fetchArticleCommentsById } from "../Api"
import { useParams } from 'react-router-dom'
import CommentsCard from "./CommentsCard"

export default function Comments () {
    const [singleComment, setSingleComment] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {article_id} = useParams()

    useEffect(() => {
        fetchArticleCommentsById(article_id)
        .then(articleComments => {
            setSingleComment(articleComments)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return (
            <h1 className="loading">Getting comments....</h1>
        )
    }

    return (
        <div className="comments-card">
        {singleComment.map(comment => {
            return <CommentsCard key={comment.comment_id} comment={comment}/>
        })}
        </div>
    )
}