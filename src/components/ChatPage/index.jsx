import { useParams } from 'react-router-dom';
import { MessageInput } from '../MessageInput';
import { MessageList } from '../MessageList';
import { Contact } from '../Contact';
import { ContactList } from '../ContactList'
import { Users } from '../../users';
import { ToastContainer } from 'react-toastify';

import './styles.css';

function ChatPage() {
    const params = useParams();

    const user = Users.find((x) => x.id.toString() === params.id);
    
    return (
        <div className='wrapper-messages-page'>
            <div className='left-container'>
                <ContactList user={user} />
            </div>

            {
                !user ? (<></>) :
                    (
                        <div className="messages-container" >
                            <Contact user={user} />
                            <MessageList user={user} />
                            <MessageInput user={user} />
                        </div>
                    )
            }
            <ToastContainer />

        </div >
    );
}

export { ChatPage };
