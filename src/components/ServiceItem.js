import React from 'react';

const ServiceItem = ({icon, title, text}) => {
    return (
        <div className="service-card">
            <h2>{icon}</h2>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}

export default ServiceItem;
