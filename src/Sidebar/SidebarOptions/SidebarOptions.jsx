import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import db from '../../firebase';
import CancelIcon from '@material-ui/icons/Cancel';

import './SidebarOptions.css'

const SidebarOptions = ({ Icon, title, Id, addChannelOptions }) => {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const history = useHistory();
    const addChannel = () => {
        const channelName = prompt("Enter the channel Name")
        if(channelName) {
            db.collection('room').add({
                name: channelName
            })
        }
    };

    const channelDeleteHandler = (e) => {
        if(Id) {
            db.collection('room').doc(Id).delete().then(res => console.log(res))
        }
    }

    const selectChannel = () => {
        Id ? history.push(`/room/${Id}`) : history.push(title)
    }
    return (
        <div
            className="sidebar-option"
            onClick={addChannelOptions ? addChannel : selectChannel}
        >
            { Icon && <Icon className="sidebar-option__icon" />}
            { Icon ?
                <h3>{title}</h3>
                : (
                    <div className="sidebar-option__channel">
                        <h3 className="sidebar-option__hash"># {title}</h3>
                        <i onClick={channelDeleteHandler} className="sidebar-option__cancel"><CancelIcon /></i> 
                    </div>
                )
            }
        </div>
    )
}

export default SidebarOptions;
