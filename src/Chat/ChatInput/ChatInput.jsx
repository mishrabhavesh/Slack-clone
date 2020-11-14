import React, { useState } from 'react'
import db from '../../firebase';
import { useStateValue } from '../../Reducer/stateProvider';
import firebase from 'firebase'
import './ChatInput.css'

const ChatInput = ({channelName, channelId}) => {
    const [input, setInput] = useState('');
    const [{ user }] = useStateValue();
    const chatSubmitHandler = (e) => {
        e.preventDefault();
        if (channelId) {
            db.collection('room').doc(channelId).collection('messages').add({
                message: input,
                timestamp: new Date(),
                user: user?.displayName,
                userImage: user?.photoURL
            })
        }
        setInput('');
    }

    const chatInputHandler = e => setInput(e.target.value);

    return (
        <div className="chat-input">
            <form>
                <input
                className="chat-input__box"
                placeholder={`Message #${channelName}`}
                value={input}
                onChange={chatInputHandler}
                />
                <button onClick={chatSubmitHandler} type="submit">
                    Send
                </button>
            </form>
        </div>
    )
}

export default ChatInput
