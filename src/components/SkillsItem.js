import React from 'react';

const SkillsItem = ({title, text, width}) => {
    return (
        <div className="skill-box">
            <h3>{title} <span>{text}</span></h3>
            <div className="progress">
                <span style={{ width: width }}></span>
            </div>
        </div>

    )
}

export default SkillsItem;
