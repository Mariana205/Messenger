import { useParams } from 'react-router-dom';
import { MessageInput } from '../MessageInput';
import { MessageList } from '../MessageList';
import { Contact } from '../Contact';
import { ContactList } from '../ContactList'
import { Users } from '../../users';

import './styles.css';

function MainPage() {
    const params = useParams();

    const user = Users.find((x) => x.id.toString() === params.id);
    if (!user) {
        // TODO: 404
    }

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
                            <MessageInput />
                        </div>
                    )
            }


        </div >
    );
}

export { MainPage };
