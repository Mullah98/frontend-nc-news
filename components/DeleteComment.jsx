// import { useParams } from "react-router-dom"

import { deleteArticleCommentById } from "../Api"

export default function DeleteComment({commentId, onDelete}) {

    const handleDelete = () => {
        deleteArticleCommentById(commentId).then(res => {
            console.log("Comment deleted!", res);
            onDelete()
        }).catch(error => console.error('Error deleting comment', error))
    }

    return (
        <div className="delete-btn">
            <button className="delete-btn" onClick={handleDelete}>Delete comment</button>
        </div>
    )
}