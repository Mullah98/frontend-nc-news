import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { postArticleCommentById } from '../Api'
import UserContext from '../src/contexts/User'

export default function CommentAdder({handleCommentState}) {
    const { article_id } = useParams()
    const { loggedInUser } = useContext(UserContext)
    const [newComment, setNewComment] = useState('')

    const handleChanges = (e) => {
        const {value} = e.target;
        setNewComment(value)
    }

    return (
        <form className='CommentAdder' onSubmit={(event) => {
            event.preventDefault();

            postArticleCommentById(article_id, {
                username: loggedInUser.username,
                body: newComment,
            }).then(({comment}) => {
                handleCommentState((allComments) => {
                    return [comment, ...allComments];
                })
                setNewComment('')
            })
            .catch(() => { alert('Something went wrong')})
        }}>
            <label className="article-comment" htmlFor="article-comment">Add a new comment: </label>
            <textarea className='comment-area' required onChange={(e) => handleChanges(e)} type='text' value={newComment} 
            name='comment' id='comment' 
            disabled={!loggedInUser.username}></textarea>
            <button className='add-btn'>Add</button>
        </form>
    )
} 