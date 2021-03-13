import React,{useState,useEffect} from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import db from './firebase'
import FlipMove from 'react-flip-move'


function Feed({user}) {
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
                <h2>Welcome - <span className='feed__userName'>{user.name}</span> </h2>
            </div>
            <TweetBox user={user} />
            <FlipMove>
            {
                posts.map(post=>(
                
            <Post key={post.id} displayName={post.displayName} verified={post.verified} text={post.text}  avatar={post.avatar} image={post.image}/>))
            }
            </FlipMove>
        </di>
    )
}

export default Feed
