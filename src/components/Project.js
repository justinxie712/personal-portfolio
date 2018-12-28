import React from 'react';
import ProjectModal from '../components/ProjectModal';

const Project = (props) => (
    <div>
        <ProjectModal 
            closeTimeoutMS={100}
            jobTitle={props.jobTitle}
            classTitle={props.classTitle}
            personal={props.personal}
            duration={props.duration}
            positionTitle={props.position}
            projectTitle={props.projectTitle}
            description={props.description}
            techstack={props.techstack}
            imgSrc={props.imgSrc}
            github={props.github}
            link={props.link}
        />
    </div>
);

export default Project;