import React,{useState} from 'react'
import './TweetBox.css'
import db from './firebase'
import {Avatar, Button} from '@material-ui/core'
function TweetBox({user}) {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet= e =>{
        e.preventDefault()
        db.collection('posts')
        .add({
            displayName:user.name,
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar:user.photo
        })
        setTweetImage('')
        setTweetMessage('')
    }
    
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src={user.photo} />
                    <input type='text' placeholder='Whats happening??' value={tweetMessage} onChange={e=> setTweetMessage(e.target.value)} />
                </div>
                <input value={tweetImage} className='tweetBox__imageInput' placeholder='Enter Image URL' type='text' onChange={e=> setTweetImage(e.target.value)} />
                <Button className='tweetBox__tweetButton' type='submit' onClick={sendTweet}>
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
