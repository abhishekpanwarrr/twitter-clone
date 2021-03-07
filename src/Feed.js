import React,{useState,useEffect} from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import db from './firebase'
import FlipMove from 'react-flip-move'


function Feed() {
const [posts,setPosts] = useState([])


useEffect(() => {
    db.collection('posts')
    .onSnapshot(snapshot =>(
        setPosts(snapshot.docs.map(doc=> doc.data()))
    ))
}, [])
    return (
        <di className='feed'>
            <div className='feed__header'>
                <h2>This is home</h2>
            </div>
            <TweetBox />
            <FlipMove>
            {
                posts.map(post=>(
                
            <Post key={post.id} displayName={post.displayName} username={post.username} verified={post.verified} text={post.text}  avatar={post.avatar} image={post.image}/>))
            }
            </FlipMove>
        </di>
    )
}

export default Feed
