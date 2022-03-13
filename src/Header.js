import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import bot_profile_img from './img_avatar.png'
import './App.css';

function Header() {
    return (
        <div className='header-chatapp'>
            <button
                className="bot-profile"

            >
               
                <img src={bot_profile_img} alt="Avatar" className="avatar"></img>
                <span className='bot-name'>Bot</span>
            </button>
        </div>
    )
}

export default Header