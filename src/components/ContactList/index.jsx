import React from 'react';
import './styles.css';
import { useState } from 'react';
import { Users } from '../../users';
import { Link } from 'react-router-dom';

function ContactList({ user }) {
    const [contactUsers, setContactUsers] = useState(Users);

    const filter = (e) => {
        const keyword = e.target.value;

        const results = Users.filter((user) => {
            return user.name.toLowerCase().includes(keyword.toLowerCase());
        });
        setContactUsers(results);
    };


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
                        contactUsers.map((item) => (
                            <li className={['contact', item.id === user?.id && 'active'].join(' ')} key={item.id}>
                                <Link to={`/user/${item.id}`} style={{ textDecoration: 'none' }} className="contact-item">
                                    <div className='contact'>
                                        <div className='contact-item-photo'>
                                            <img className='photo-contact' src={item.photo} alt={item.name}/>
                                            <i className="bi bi-check-circle icon-contact-list" />
                                        </div>
                                        <div>
                                            <h4 className='name-contact'>{item.name}</h4>
                                            <p className='preview-message'>Як справи?</p>
                                        </div>
                                    </div>
                                    <div className='contact-list-date'>Mar 19, 2022</div>
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