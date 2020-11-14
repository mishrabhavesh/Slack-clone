import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import './Chat.css'
import db from '../firebase';
import Message from '../Message/Message'
import ChatInput from './ChatInput/ChatInput';

const Chat = () => {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState(null);
    useEffect(() => {
        if(roomId) {
            db.collection('room').doc(roomId).onSnapshot(snap => setRoomDetails(snap.data()));
            db.collection('room')
              .doc(roomId)
              .collection('messages')
              .orderBy('timestamp', 'asc')
              .onSnapshot(snap => setRoomMessages(snap.docs.map(doc => doc.data())))
        }
    }, [roomId])
console.log(roomMessages);
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>

                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon />
                    </p>
                </div>
            </div>
                {roomMessages?.map( mes => (
                   <Message {...mes} key={mes.timestamp.seconds} />

                ))}
                <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat;
