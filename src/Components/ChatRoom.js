import React, {useState , useRef} from 'react'
import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, firestore  , timestamps} from '../Firebase/config';
import ChatMessage from './ChatMessage';
import moment from 'moment'
import SendIcon from '@material-ui/icons/Send';


function ChatRoom() {
    const dummy = useRef();
    const messageRef = firestore.collection('messages')
    const query = messageRef.orderBy('createdAt').limit(25)
    const [messages] = useCollectionData(query , {idField : 'id'})
    const [formValue, setFormValue] = useState('')
    const time = moment().format('hh:mm A')
    const sendMessage = async(e)=>{
        e.preventDefault();
        const {uid , photoURL} = auth.currentUser;
        await messageRef.add({
            text : formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
            time : time
        })
        setFormValue('')
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
    console.log("====>>>>" , messages)
    return (
        <>
            <main>
                {messages && messages.map(msg => <ChatMessage key={msg.id}  message={msg} />)}

                    <span ref={dummy}></span>
            </main>
            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type a message here" />
                <button type="submit" disabled={!formValue} className="sendBtn">send</button>
            </form>
        </>
    )
}

export default ChatRoom
