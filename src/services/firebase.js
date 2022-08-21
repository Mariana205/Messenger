import {
    initializeApp
} from 'firebase/app';

import {
    getFirestore,
    collection,
    addDoc,
    limit,
    onSnapshot,
    query,
    orderBy,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDXKySSCt-5m8rOwPBBftpgqYzZYnM0CKc",
    authDomain: "olegia.firebaseapp.com",
    projectId: "olegia",
    storageBucket: "olegia.appspot.com",
    messagingSenderId: "386834534132",
    appId: "1:386834534132:web:d2ac28838ba94bb53998a1",
    measurementId: "G-X4MBPW7Z1D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function getTimestampInSeconds() {
    return Math.floor(Date.now())
}

async function sendMessage(text, id, from) {
    try {
        const timestamp = getTimestampInSeconds();
        await addDoc(collection(db, 'a-chat-rooms', id.toString(), 'messages'), {
            text: text.trim(),
            timestamp: timestamp,
            from: from
        });
    } catch (error) {
        console.error(error);
    }
}

function getMessages(id, callback) {
    return onSnapshot(
        query(
            collection(db, 'a-chat-rooms', id.toString(), 'messages'),
            orderBy('timestamp', 'asc')
        ),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map((x) => ({
                id: x.id,
                ...x.data(),
            }));

            callback(messages);
        }
    );
}

function getLastMessage(id, callback) {
    return onSnapshot(
        query(
            collection(db, 'a-chat-rooms', id.toString(), 'messages'),
            orderBy('timestamp', 'desc'),
            limit(1)
        ),
        (querySnapshot) => {
            const doc = querySnapshot.docs[0];
            if (!doc) 
            {
                return;
            }

            const message = {
                id: doc.id,
                userId: id,
                ...doc.data(),
            }

            callback(message);
        }
    );
}


export {
    sendMessage,
    getMessages,
    getLastMessage
};