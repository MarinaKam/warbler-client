import React from 'react';
import Moment from 'react-moment';
import { Link } from "react-router-dom";
import DefaultProfileImg from '../images/default-profile-image.jpg';

const MessageItem = ({ text,
                         date,
                         username,
                         profileImageUrl,
                         removeMessage,
                         isCorrectUser }) => (
    <div className="list-group-item">
        <img
            src={profileImageUrl || DefaultProfileImg}
            className="timeline-image"
            alt={username}
        />
        <div className="message-area">
            <Link to='/' > {username && '@' + username} &nbsp;</Link>
            <span className="text-muted">
                <Moment className="text-muted" format="Do MMM YYYY">
                    {date}
                </Moment>
            </span>
            <p>{text}</p>
            {isCorrectUser &&
                <a className="btn btn-danger" onClick={removeMessage}>
                    Delete
                </a>}

        </div>
    </div>
);

export default MessageItem;