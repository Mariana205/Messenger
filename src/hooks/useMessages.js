import React from 'react';
import { getMessages } from '../services/firebase';

function useMessages() {
    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {
        const unsubscribe = getMessages(setMessages);

        return unsubscribe;
    }, []);

    return messages;
}

export { useMessages };
