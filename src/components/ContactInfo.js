import React from 'react';

const ContactInfo = ({icon, title, text}) => {
    return (
        <div className="icons">
            <h3>{icon} {title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default ContactInfo;
