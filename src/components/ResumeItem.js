import React from 'react';

const ResumeItem = ({ year, title, subTitle, text }) => {
    return (
        <div className="resumeItem">
            <h5>{title}</h5>
            <h6>{subTitle} / {year}</h6>
            <p>{text}</p>
        </div>
    )
}

export default ResumeItem;
