import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Users } from '../../users';
import dateFormat from "dateformat";
import { useLastMessage } from '../../hooks/useLastMessage';

import './styles.css';

const Subscribe = (id) => useLastMessage(id);


function ContactList({ user }) {
    const [contactUsers, setContactUsers] = useState(Users);

    const items = Users.map(user => Subscribe(user.id));

    const filter = (e) => {
        const keyword = e.target.value;

        const results = Users.filter((user) => {
            return user.name.toLowerCase().includes(keyword.toLowerCase());
        });
        setContactUsers(results);
    };

    contactUsers
        .map(user => {
            const item = items.find(i => i.userId === user.id);
            if (item) {
                user['message'] = item.text;
                user['timestamp'] = item.timestamp;
            }

            return user;
        });


    // const dateFormatted = dateFormat(contactUsers.name, "m/d/yy, h:MM TT");

    return (
        <>
            <div className='search-container'>
                <div className='contact-item-photo'>
                    <i className="bi bi-person-circle" />
                    <i className="bi bi-check-circle user-icon" />
                </div>
                <div className='container-form'>
                    <div className="form">
                        <input type="text" placeholder="Search or start new chat" className="form-search" onChange={filter} />
                        <i className="bi bi-search input-icon" />
                    </div>
                </div>
            </div>

            <div className="container-contact-list">
                <h3 className='contact-list-title'>Chats</h3>
                <ul className='contact-list'>
                    {contactUsers.length > 0 ? (
                        contactUsers
                            .sort((a, b) => a.timestamp < b.timestamp ? 1 : -1)
                            .map((item) => (
                                <li className={['contact', item.id === user?.id && 'active'].join(' ')} key={item.id}>
                                    <Link to={`/user/${item.id}`} style={{ textDecoration: 'none' }} className="contact-item">
                                        <div className='contact'>
                                            <div className='contact-item-photo'>
                                                <img className='photo-contact' src={item.photo} alt={item.name} />
                                                <i className="bi bi-check-circle icon-contact-list" />
                                            </div>
                                            <div>
                                                <h4 className='name-contact'>{item.name}</h4>
                                                <p className='preview-message'>{item.message}</p>
                                            </div>
                                        </div>
                                        <div className='contact-list-date'>{dateFormat(item.timestamp, 'mmm d, yyyy')}</div>
                                    </Link>
                                </li>
                            ))

                    ) : (
                        <p className='no-contact'>No contacts</p>
                    )
                    }

                </ul>
            </div>
        </>
    );
}

export { ContactList };