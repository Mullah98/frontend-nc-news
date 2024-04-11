import { useContext } from "react"
import UserContext from "../src/contexts/User"

export default function Home () {
    const { loggedInUser } = useContext(UserContext)
    return (
        <div className="rainbow">
        <div className="home">
            <h2>Welcome User <br></br>{loggedInUser.username}</h2>
            <img src={loggedInUser.avatar_url}></img>
        </div>
        </div>
    )
}