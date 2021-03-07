import React from 'react'
import './Widgets.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed, } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';
function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className='widgets__searchIcon' />
                <input type="text" placeholder='Search Twitter' />
            </div>
            <div className="widgets__widgetContainer">
                <h2>Whats happenging</h2>
                <TwitterTweetEmbed   tweetId={'1367459163970801667'} />
                <TwitterTimelineEmbed sourceType='Profile' screenName='webabhishekk' options={{height:400}} />
                <TwitterShareButton url={'https://www.facebook.com/devabhishekk/'} options={{text:'React Js is awesome', via:'abhishekpanwar'}} />
            </div>
        </div>
    )
}

export default Widgets
