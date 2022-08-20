import React from 'react';
import './styles.css';


function Contact({ user }) {
    return (
        <div className="contact-container">
            <div className='contact-item-photo'>
                <img className='photo-contact photo' src={user.photo} alt={user.name} />
                <i className="bi bi-check-circle icon-contact" />
            </div>
            <h3 className='contact-name'>{user.name}</h3>
        </div>
    );
}

export { Contact };