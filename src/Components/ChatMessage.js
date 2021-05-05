import React from 'react'
import { auth } from '../Firebase/config';
import {DoneAll} from '@material-ui/icons/DoneAll'

function ChatMessage(props) {
    const {text , uid , photoURL  } = props.message;
    // const time = moment().format('hh:mm A')
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL}/>
            <p>{text}</p>
        </div>
    )
}

export default ChatMessage
