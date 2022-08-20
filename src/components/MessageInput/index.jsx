import React from 'react';
import { sendMessage } from '../../services/firebase';

import './styles.css';

function MessageInput() {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage(value);
        setValue('');
    };

    return (
        <div className='wrapper-input-message'>
            <form onSubmit={handleSubmit} className="message-input-container">
                <input
                    type="text"
                    placeholder="Type your message"
                    value={value}
                    onChange={handleChange}
                    className="message-input"
                    required
                    minLength={1}
                />
                <button type="submit" disabled={value.length < 1} className="send-message">
                    <i className="bi bi-send"/>
                </button>
            </form>
        </div>
    );
}

export { MessageInput };
