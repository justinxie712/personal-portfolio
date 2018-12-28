import React from 'react';
import Project from './Project';

const portworx_description = `  I developed a new user interface for the Portworx database, using HTML5, CSS3, Bootstrap and Go. 
                                It includes a variety of analytical charts (Google Charts API) and features for data analysis. 
                                I also developed a template for the Portworx documentation webpage and demonstrated how scripts can 
                                be written to automate automate graphic and index pattern creation using ElasticSearch.`;

const cc_description       = `  This is a fun application I created in my spare time. It is a simple Caesar Cipher application that is
                                used to create ciphered texts using input text.` 

const lw_description       = `  This is another fun application I created in my spare time. I created a simulation of the classic
                                computer program, "Logo Writer", that creates images with a series of commands.` 

const nwhacks_description = `   I helped create a prototype of a social media application where users can view, submit and comment on photos. 
                                The user interface was implemented using Bootstrap, HTML5, and CSS3, while the back-end used Node.js. It is used to produce 
                                a dashboard of submissions on home page with data of user submissions. I also incorporated Google Maps API and location tracking 
                                to display submissions from neighbouring areas.`;

const cpsc310_description = `   I implemented a query engine that performs simulated tasks and enables effective querying of the school’s metadata (courses, room scheduling, class averages, etc.)
                                Through this project, I learned RESTful design, proper code refactoring techniques, asynchronous development, and object-oriented design methods.
                                I also learned Agile development, unit testing, and high and low-level design.`;

const music_libary_description = `  I helped develop an interactive interface for a standard music library using HTML5 and PHP.
                                    We used an Oracle database to store customer transactions, personal information, etc., and queried from the database using SQLPlus.`;

const patternex_description = ` I wrote a script with Python that automates stress tests on Apache Cassandra nodes.
                                This script produces a performance report of Apache Cassandra nodes, which is used to
                                analyze the results of the stress tests and to identify anomalies.`; 

const nwhacks_github = 'https://github.com/LButcher/FlamingHotCheetos';
const cpsc310_github = 'https://github.com/justinxie712/CPSC310';
const music_libary_github = 'https://github.com/ellasw/304project';
const patternex_github = 'https://github.com/justinxie712/patternex';
const portworx_github = 'https://github.com/justinxie712/database-UI';

const portworx_img = "https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1478015369/ntupfb3rnghvgbw0pdyx.png";
const nwHacks_img = "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/000/583/639/datas/large.png";
const ubc_img = "https://www.animalsinscience.org/wp-content/uploads/2016/12/logoUBC-757x1030.gif";
const patternex_img = "https://pbs.twimg.com/profile_images/675012533812486144/51oD0rFX_400x400.jpg";

const Projects = (props) => (
    <div>
        <div className="Container">
            <p className="section">Projects & Experience</p>
            <hr></hr>
            <Project 
                jobTitle={"Portworx Inc."}
                duration={"May - August 2018"}
                position={"Front-End Engineer Intern"}
                projectTitle={"Database UI"}
                description={portworx_description}
                techstack={"HTML5, CSS3, JavaScript, Go"}
                imgSrc={portworx_img}
                github={portworx_github}
            />
            <Project 
                personal={"yes"}
                duration={"October 2018"}
                projectTitle={"Caesar Cypher"}
                description={cc_description}
                techstack={"HTML5, CSS3, React, JavaScript"}
                imgSrc={'./justin.jpg'}
                github={"https://github.com/justinxie712/CaeserCipher"}
                link={"https://powerful-stream-45405.herokuapp.com/"}
            />
            <Project 
                personal={"yes"}
                duration={"November 2018"}
                projectTitle={"Logo Writer Simulator"}
                description={lw_description}
                techstack={"HTML5, CSS3, React, JavaScript"}
                imgSrc={'./justin.jpg'}
                github={"https://github.com/justinxie712/logo-writer"}
                link={"https://vast-hamlet-18639.herokuapp.com/"}
            />
            <Project 
                classTitle={"nwHacks 2018"}
                duration={"September 2017"}
                projectTitle={"Hot Cheetos Social Media Application"}
                description={nwhacks_description}
                techstack={"HTML5, CSS3, Bootstrap, Node.js"}
                imgSrc={nwHacks_img}
                github={nwhacks_github}
            />
            <Project 
                classTitle={"CPSC 310 - Introduction to Software Engineering"}
                duration={"December 2017"}
                projectTitle={"Class Project"}
                description={cpsc310_description}
                techstack={"TypeScript"}
                imgSrc={ubc_img}
                github={cpsc310_github}
            />
            <Project 
                classTitle={"CPSC 304 - Introduction to Databases"}
                duration={"March 2017"}
                projectTitle={"Music Library Store Application"}
                description={music_libary_description}
                techstack={"HTML5, PHP"}
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