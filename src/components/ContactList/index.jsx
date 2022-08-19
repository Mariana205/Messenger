import React from 'react';
import './styles.css';
import { useState } from 'react';
import { Users } from '../../users';

function ContactList() {
    const [query, setQuery] = useState("");
    const [contactUsers, setContactUsers] = useState(Users);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = Users.filter((user) => {
                return user.name.toLowerCase().includes(keyword.toLowerCase());
            });
            setContactUsers(results);
        } else {
            setContactUsers(Users);
        }
    };

    const search = (data) => {
        return data.filter(item => item.name.toLowerCase().includes(query))
    }

    return (
        <>
            <div className='search-container'>
                <i class="bi bi-person-circle" />
                <i class="bi bi-check-circle user-icon" />
                <div className='container-form'>
                    <div className="form">
                        <input type="text" placeholder="Search or start new chat" className="form-search" onChange={filter} />
                        <i class="bi bi-search input-icon" />
                    </div>
                </div>
            </div>

            <div className="container-contact-list">
                <h3 className='contact-list-title'>Chats</h3>
                <ul className='contact-list'>
                    {contactUsers.length > 0 ? (
                        contactUsers.map((item) => (
                            <li className='contact-item'>
                                <div className='contact'>
                                    <img className='photo-contact' src={item.photo} />
                                    <i class="bi bi-check-circle icon" />
                                    <div>
                                        <h4 className='name-contact'>{item.name}</h4>
                                        <p className='preview-message'>Як справи?</p>
                                    </div>
                                </div>
                                <div className='contact-list-date'>Mar 19, 2022</div>
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