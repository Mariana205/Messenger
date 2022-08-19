import { MessageInput } from '../MessageInput';
import { MessageList } from '../MessageList';
import { Contact } from '../Contact';
import { ContactList } from '../ContactList'
import { Users } from '../../users'
import './styles.css';

function AuthenticatedApp() {
    return (
        <div className='wrapper-messages-page'>
            <div className='left-container'>
                <ContactList data={Users}/>
            </div>
            <div className="messages-container" >
                <Contact />
                <MessageList />
                <MessageInput />
            </div>
        </div>
    );
}

export { AuthenticatedApp };
