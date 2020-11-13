import React from 'react';

import './SidebarOptions.css'

const SidebarOptions = ({ Icon, title }) => {
    return (
        <div className="sidebar-option">
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
