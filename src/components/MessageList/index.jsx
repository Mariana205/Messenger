import React from 'react';
import { useMessages } from '../../hooks/useMessages';
import './styles.css';

function MessageList() {
    const messages = useMessages();

    const containerRef = React.useRef(null);

    React.useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    });

    return (
        <div className="message-list-container" ref={containerRef}>
            <ul className="message-list">
                {messages.map((x) => (
                    <Message key={x.id} message={x} isOwnMessage={x.text.length % 2 === 0} />
                ))}
            </ul>
        </div>
    );
}

function Message({ message, isOwnMessage }) {
    const { displayName, text, timestamp } = message;
    const date = new Date(timestamp * 1000);

    if (!isOwnMessage) {
        return (
            <div className='message-item'>
                <div className={!isOwnMessage && 'photo-contact'} />
                <div>
                    <li className={['message', isOwnMessage && 'own-message'].join(' ')} >
                        <div>{text}</div>
                    </li >
                    <div className='message-date'>{date.toLocaleString()}</div>
                </div>
            </div>
        );
    }
    else {
        return (
            <>
                <li className={['message', isOwnMessage && 'own-message'].join(' ')} >
                    <div>{text}</div>
                </li >
                <div className='own-message message-date'>{date.toLocaleString()}</div>

            </>
        );
    }
}


export { MessageList };
