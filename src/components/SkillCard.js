import React from 'react';

const SkillCard = (props) => (
    <div className="skill-card">
        <div>
            <p className="card-title">{props.skill}</p>
            <hr></hr>
            <p className="details">Years of Experience: {props.experience}</p>
            <p className="details">Level: {props.proficiency}</p>
        </div>
    </div>
);

export default SkillCard;