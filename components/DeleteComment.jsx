import { deleteArticleCommentById } from "../Api"
import { useParams } from "react-router-dom"

export default function DeleteComment ({handleCommentState}) {

    const {comment_id} = useParams()

    const handleDeleteComment = (e) => {
        console.log(e.target, comment_id);
    }
    return (
        <div className="delete-btn">
            <button onClick={(e) => handleDeleteComment(e)}>Delete comment</button>
        </div>
    )
    };



    // export default function DeleteComment ({handleCommentState}) {

    //     const handleDeleteComment = (e) => {
    //         deleteArticleCommentById(comment_id).then(() => {
    //             console.log(comment_id, 'you clicked me');
    //             handleCommentState(currentComments => {
    //                 const copyCurrentComments = [...currentComments]
    //                 return copyCurrentComments.filter(comment => comment.comment_id !== comment_id)
    //             })
    //         }).catch(error => console.log('error happened in component', error))
    //     }
    //     return (
    //         <div className="delete-btn">
    //             <button onClick={(e) => handleDeleteComment(e)}>Delete comment</button>
    //         </div>
    //     )
    //     };