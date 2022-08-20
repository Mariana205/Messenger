import React from 'react';
import { sendMessage } from '../../services/firebase';
import { getRandomJoke } from '../../services/jokeService'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css';

function MessageInput({ user }) {
    const [messageText, setMessageText] = React.useState('');

    const handleChange = (event) => {
        setMessageText(event.target.value);
    };

    const notify = (randomJoke) => toast(<Notification title={user.name} text={randomJoke} />, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: 0,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage(messageText, user.id, 'me');
        setMessageText('');



        setTimeout(async () => {
            const randomJoke = await getRandomJoke();
            sendMessage(randomJoke, user.id, user.name);
            notify(randomJoke);
        }, 1000);
    };

    const Notification = ({ title, text }) => (
        <div>
            <h3 className='notify-title'> {title}</h3>
            <p> {text} </p>
        </div>
    )

    return (
        <div className='wrapper-input-message'>
            <form onSubmit={handleSubmit} className="message-input-container">
                <input
                    type="text"
                    placeholder="Type your message"
                    value={messageText}
                    onChange={handleChange}
                    className="message-input"
                    required
                    minLength={1}
                />
                <button type="submit" disabled={messageText.length < 1} className="send-message">
                    <i className="bi bi-send" />
                </button>
            </form>
        </div>
    );
}

export { MessageInput };
