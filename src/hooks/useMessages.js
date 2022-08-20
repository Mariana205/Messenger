import React from 'react';
import { getMessages } from '../services/firebase';

function useMessages(id) {
    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {
        const unsubscribe = getMessages(id, setMessages);

        return unsubscribe;
    }, [id]);

    return messages;
}

export { useMessages };
