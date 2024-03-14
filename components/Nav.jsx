import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
            {/* <Link to="/comments">Comments</Link> */}
            <a>User</a>
        </nav>
    )
}