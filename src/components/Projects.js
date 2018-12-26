import React from 'react';
import Project from './Project';

const portworx_description = `  I developed a new user interface for the Portworx database, using HTML, CSS, Bootstrap and GoLang. 
                                It includes a variety of analytical graphs (Google Charts API) and data comparison features. 
                                I also developed a template for the Portworx documentation and helped write scripts to automate the process of refactoring code.`;

const nwhacks_description = `   I helped create a prototype of a social media platform where users can view, submit and comment on photos. 
                                I implemented the user interface was developed using Bootstrap, HTML, and CSS, while the back-end comprises of Node.js, and it is used to produce a dashboard of submissions on home page with data of user submissions. 
                                I also implemented the Google Maps API and location-based technology to display submissions from neighbouring areas.`;

const cpsc310_description = `   I implemented a query engine that performs simulated tasks and enables effective querying of the school’s metadata (courses, room scheduling, class averages, etc.)
                                Through this project, I learned RESTful design, proper code refactoring techniques, asyncronous development, and object oriented design patterns.
                                I also learned Agile development, unit testing, and high and low-level designs.`;

const music_libary_description = `  I helped develop an interactive interface for a standard music library using HTML and PHP.
                                    We used an Oracle database to store customer transactions, personal information, etc., and queried from the database using SQLPlus.`;

const patternex_description = ` I developed Python scripts to automate stress tests on Apache Cassandra nodes.
                                These scripts produced performance reports of Apache Cassandra nodes, and used the data to
                                monitor the results of the stress tests and to identify anomalies.`; 

const nwhacks_github = 'https://github.com/LButcher/FlamingHotCheetos';
const cpsc310_github = 'https://github.com/justinxie712/CPSC310';
const music_libary_github = 'https://github.com/ellasw/304project';
const patternex_github = 'https://github.com/justinxie712/patternex';
const portworx_github = 'https://github.com/justinxie712/database-UI';

const portworx_img = "https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1478015369/ntupfb3rnghvgbw0pdyx.png";
const nwHacks_img = "https://pbs.twimg.com/profile_images/845277225695948800/DF1k3QiW_400x400.jpg";
const ubc_img = "https://www.animalsinscience.org/wp-content/uploads/2016/12/logoUBC-757x1030.gif";
const patternex_img = "https://pbs.twimg.com/profile_images/675012533812486144/51oD0rFX_400x400.jpg";

const Projects = (props) => (
    <div>
        <h2 className='Title'>Projects & Experience</h2>
        <div className="ProjectContainer">
            <hr></hr>
            <Project 
                jobTitle={"Portworx Inc."}
                duration={"May - August 2018"}
                position={"Software Engineer Intern"}
                projectTitle={"Database UI"}
                description={portworx_description}
                techstack={"HTML, CSS, Golang"}
                imgSrc={portworx_img}
                github={portworx_github}
            />
            <Project 
                classTitle={"nwHacks 2018"}
                duration={"September 2017"}
                projectTitle={"Hot Cheetos Social Media Application"}
                description={nwhacks_description}
                techstack={"HTML, CSS, Bootstrap, Node.js"}
                imgSrc={nwHacks_img}
                github={nwhacks_github}
            />
            <Project 
                classTitle={"CPSC 310 - Introduction to Software Engineering"}
                duration={"December 2017"}
                projectTitle={"Class Project"}
                description={cpsc310_description}
                techstack={"Typescript"}
                imgSrc={ubc_img}
                github={cpsc310_github}
            />
            <Project 
                classTitle={"CPSC 304 Project - Introduction to Databases"}
                duration={"March 2017"}
                projectTitle={"Music Library Store"}
                description={music_libary_description}
                techstack={"HTML, PHP"}
                imgSrc={ubc_img}
                github={music_libary_github}
            />
            <Project 
                jobTitle={"Patternex Inc."}
                duration={"May - August 2016"}
                position={"Software Engineer Intern"}
                projectTitle={"Stress Test Automation"}
                description={patternex_description}
                techstack={"Python"}
                imgSrc={patternex_img}
                github={patternex_github}
            /> 
        </div>
    </div>
);

export default Projects;