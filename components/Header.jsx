import { useContext } from "react"
import UserContext from "../src/contexts/User"

export default function Header () {
    const {loggedInUser} = useContext(UserContext)

    return (
        <header>
            <h1 className="header-text"> NC MarketPlace</h1>
            <img className="header-img" src={loggedInUser.avatar_url} ></img>
            <h2 className="header-text2">{loggedInUser.username} is logged in</h2>
        </header>
    )
}