import React from 'react';

const SkillCard = (props) => (
    <div className="SkillCard">
        <h3>{props.skill}</h3>
        <p>Level: {props.proficiency}</p>
        <p>Years of Experience: {props.experience}</p>
        <h5>Projects</h5>
    </div>
);

export default SkillCard;