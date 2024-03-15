import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Home from '../components/Home'
import Articles from '../components/Articles'
import { Route, Routes } from 'react-router-dom'
import SingleArticle from '../components/SingleArticle'
import Comments from '../components/Comments'
import UserContext from './contexts/User'

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "grumpy19",
    name: "Paul Grump",
    avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"
  })

  return (
    <>
    <UserContext.Provider value={{loggedInUser: loggedInUser}}>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/articles" element={<Articles />}/>
        <Route path="/articles/:article_id" element={<SingleArticle />}/>
        <Route path="/articles/:article_id/comments" element={<Comments />} />
      </Routes>
    </UserContext.Provider>
    </>
  )
}

export default App
