import React from 'react';
import Skill from './Skill';

const Skills = (props) => (
    <div>
        <div className="Container">
            <p className="section">Skills</p>
            <hr style={{color: "white"}}></hr>
            <h5 className='experience'>Most Comfort</h5>
            <ol className="skillList">
                <Skill 
                    skill="JavaScript"
                    proficiency={"Advanced"}
                    experience="2+ years"
                />
                <Skill 
                    skill="HTML5"
                    proficiency={"Advanced"}
                    experience="2+ years"
                />
                <Skill 
                    skill="CSS3/SCSS"
                    proficiency={"Advanced"}
                    experience="2+ years"
                />
                <Skill 
                    skill="React"
                    proficiency={"Advanced"}
                    experience="2+ years"
                />
                <Skill 
                    skill="Node.js"
                    proficiency={"Advanced"}
                    experience="2+ years"
                />
            </ol>
            <br></br>
            <br></br>
            <h5 className='experience'>Previous Experiences</h5>
            <ul className="skillList">
                <Skill 
                    skill="Java"
                    proficiency={"Proficient"}
                    experience="2 years"
                />
                <Skill 
                    skill="SQL"
                    proficiency={"Proficient"}
                    experience="2 years"
                />
                <Skill 
                    skill="Go"
                    proficiency={"Proficient"}
                    experience="1 year"
                />
                <Skill 
                    skill="TypeScript"
                    proficiency={"Proficient"}
                    experience="1 year"
                />
                <Skill 
                    skill="Angular 6"
                    proficiency={"Proficient"}
                    experience="1 year"
                />
                <Skill 
                    skill="Express"
                    proficiency={"Prior Experience"}
                    experience="1+ years"
                />
                <Skill 
                    skill="Python"
                    proficiency={"Prior Experience"}
                    experience="1 year"
                />
                <Skill 
                    skill="PHP"
                    proficiency={"Prior Experience"}
                    experience="1 year"
                />
                <Skill 
                    skill="C++"
                    proficiency={"Prior Experience"}
                    experience="1 year"
                />
                <Skill 
                    skill="C"
                    proficiency={"Prior Experience"}
                    experience="1 year"
                />
            </ul>
        </div>
    </div>
);

export default Skills;