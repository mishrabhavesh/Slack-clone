import React from 'react';
import { useHistory } from 'react-router-dom';
import db from '../../firebase';

import './SidebarOptions.css'

const SidebarOptions = ({ Icon, title, Id, addChannelOptions }) => {
    const history = useHistory();
    const addChannel = () => {
        const channelName = prompt("Enter the channel Name")
        if(channelName) {
            db.collection('room').add({
                name: channelName
            })
        }
    };
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
                    <h3 className="sidebar-option__channel">
                        <span className="sidebar-option__hash"># {title}</span>
                    </h3>
                )
            }
        </div>
    )
}

export default SidebarOptions;
