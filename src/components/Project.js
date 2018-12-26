import React from 'react';
import ProjectModal from '../components/ProjectModal';

const Project = (props) => (
    <div>
        <div className="Project">
            <div className="project_details">
                <img className="logo" alt="logo" src={props.imgSrc}/>
                {props.jobTitle && <h4>Company: {props.jobTitle}</h4>}
                {props.classTitle && <h4>Class: {props.classTitle}</h4>}
                <h6><i>{props.duration}</i></h6>
                {props.position && <h5 style={{margin: "20px 10px 10px 10px"}}>Position: {props.position}</h5>}
                <h5 style={{margin: "20px 10px 10px 10px"}}>Project: {props.projectTitle}</h5>
            </div>
            <ProjectModal 
                closeTimeoutMS={100}
                jobTitle={props.jobTitle}
                classTitle={props.classTitle}
                duration={props.duration}
                positionTitle={props.position}
                projectTitle={props.projectTitle}
                description={props.description}
                techstack={props.techstack}
                imgSrc={props.imgSrc}
                github={props.github}
            />
        </div>
    </div>
);

export default Project;