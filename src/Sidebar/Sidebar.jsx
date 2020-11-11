import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>My work space</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Bhavesh
                    </h3>
                </div>
                <CreateIcon />
            </div>
        </div>
    )
}

export default Sidebar
