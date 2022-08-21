import React from 'react';
import { getLastMessage } from '../services/firebase';

function useLastMessage(id) {
    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {
        const unsubscribe = getLastMessage(id, setMessages);

        return unsubscribe;
    }, [id]);

    return messages;
}

export { useLastMessage };