import React from 'react';
import { useMessages } from '../../hooks/useMessages';
import dateFormat from "dateformat";
import './styles.css';

function MessageList({ user }) {
    const messages = useMessages(user.id);

    const containerRef = React.useRef(null);

    React.useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    });

    return (
        <div className="message-list-container" ref={containerRef}>
            <ul className="message-list">
                {messages.map((m) => (
                    <Message key={m.id} message={m} isOwnMessage={m.from === 'me'} user={user} />
                ))}
            </ul>
        </div>
    );
}

function Message({ message, isOwnMessage, user }) {
    const { text, timestamp } = message;
    const date = (new Date(timestamp));
    const dateFormatted = dateFormat(date, "m/d/yy, h:MM TT");

    if (!isOwnMessage) {
        return (
            <div className='message-item'>
                <img className={!isOwnMessage && 'photo-contact'} src={user.photo} alt={user.name} />
                <div>
                    <li className={['message', isOwnMessage && 'own-message'].join(' ')} >
                        <div>{text}</div>
                    </li >
                    <div className='message-date'>{dateFormatted}</div>
                </div>
            </div>
        );
    }
    else {
        return (
            <>
                <li className='message own-message' >
                    <div>{text}</div>
                </li >
                <div className='own-message message-date'>{dateFormatted}</div>
            </>
        );
    }
}


export { MessageList };
