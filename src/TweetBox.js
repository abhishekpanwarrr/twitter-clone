import React,{useState} from 'react'
import './TweetBox.css'
import db from './firebase'
import {Avatar, Button} from '@material-ui/core'
function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet= e =>{
        e.preventDefault()
        db.collection('posts')
        .add({
            displayName:'Abhishek Panwar',
            username:'webabhishekk',
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar:'https://images.pexels.com/photos/1790393/pexels-photo-1790393.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        })
        setTweetImage('')
        setTweetMessage('')
    }
    
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src='' />
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
