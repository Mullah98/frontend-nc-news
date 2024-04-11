import DeleteComment from "./DeleteComment"

export default function CommentsCard({comment, onDelete}) {
    
    let emoji = ''

    if (comment.votes < 0) {
        emoji = '👎'
    } else {
        emoji = '👍'
    }

    return (
        <div className="comments-title">
            <h2 className="comment-author">User: {comment.author}</h2>
            <h2 className="comment-body">{'"'} {comment.body} {'"'}</h2>
            <h2 className="comment-date">Comment created: {comment.created_at}</h2>
            <h2 className="comment-vote">{emoji} {comment.votes} votes</h2>
        <DeleteComment commentId={comment.comment_id} onDelete={onDelete}/>
        </div>
    )
}