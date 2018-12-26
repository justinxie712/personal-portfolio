import React from 'react';
import Skill from './Skill';

const Skills = (props) => (
    <div>
        <h3 className='Title'>Skills</h3>
        <div className="Container">
            <hr style={{color: "white"}}></hr>
            <h5 className='experience'>Most Comfort</h5>
            <ol
                style={{background: "white",
                        width: "30vh",
                        padding: "1vh",
                        margin: "1vh",
                        borderRadius: "1vh",
                        border: "1px solid black"
                }}
            >
                <Skill 
                    skill="Javascript"
                    proficiency={4.5}
                    experience="2+ years"
                />
                <Skill 
                    skill="HTML"
                    proficiency={4.5}
                    experience="2+ years"
                />
                <Skill 
                    skill="CSS/SCSS"
                    proficiency={4.5}
                    experience="2+ years"
                />
                <Skill 
                    skill="ReactJS"
                    proficiency={4}
                    experience="2+ years"
                />
                <Skill 
                    skill="Node.js"
                    proficiency={4}
                    experience="2+ years"
                />
            </ol>
            <br></br>
            <h5 className='experience'>Previous Experiences</h5>
            <ul
                style={{background: "white",
                        width: "30vh",
                        padding: "1vh",
                        margin: "1vh",
                        borderRadius: "1vh",
                        border: "1px solid black"
                }}
            >
                <Skill 
                    skill="Java"
                    proficiency={3.5}
                    experience="2 years"
                />
                <Skill 
                    skill="SQL"
                    proficiency={3.5}
                    experience="2 years"
                />
                <Skill 
                    skill="Express"
                    proficiency={3.5}
                    experience="1+ years"
                />
                <Skill 
                    skill="Python"
                    proficiency={3}
                    experience="1 year"
                />
                <Skill 
                    skill="PHP"
                    proficiency={3}
                    experience="1 year"
                />
                <Skill 
                    skill="C++"
                    proficiency={2.5}
                    experience="1 year"
                />
                <Skill 
                    skill="C"
                    proficiency={2.5}
                    experience="1 year"
                />
            </ul>
        </div>
    </div>
);

export default Skills;