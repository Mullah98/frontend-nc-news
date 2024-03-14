export default function CommentsCard(comment) {
    
    let emoji = ''

    if (comment.comment.votes < 0) {
        emoji = '👎'
    } else {
        emoji = '👍'
    }

    return (
        <div className="comments-title">
            <h2 className="comment-author">User: {comment.comment.author}</h2>
            <h2 className="comment-body">"{comment.comment.body}"</h2>
            <h2 className="comment-date">Comment created: {comment.comment.created_at.slice(0, 10)}</h2>
            <h2 className="comment-vote">{emoji} {comment.comment.votes} votes</h2>
        </div>
    )
}