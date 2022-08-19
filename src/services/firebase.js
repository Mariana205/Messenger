import {
    initializeApp
} from 'firebase/app';

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
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

function getTimestampInSeconds () {
    return Math.floor(Date.now() / 1000)
  }

async function sendMessage(text) {
    try {
        const timestamp = getTimestampInSeconds();
        await addDoc(collection(db, 'a-chat-rooms'), {
            text: text.trim(),
            timestamp: timestamp,
        });
    } catch (error) {
        console.error(error);
    }
}

function getMessages(callback) {
    return onSnapshot(
        query(
            collection(db, 'a-chat-rooms'),
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


export {
    sendMessage,
    getMessages
};