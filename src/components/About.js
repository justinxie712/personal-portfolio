import React from 'react';

const About = () => {
    return (
        <div>
            <h3 className='Title'>About</h3>
            <div className='Container'>
                <hr></hr>
                <p style={{background: "white", padding: "2vh", border: "3px solid black", borderRadius: "1vh"}}>
                    My name is Justin Xie, and I develop web applications. 
                    Through previous internships and personal projects, I have gained experience with a variety of different languages and frameworks,
                    including React, Javascript, and Bootstrap. 
                    I can thrive both working with a team setting, or independently, as I am a quick learner, and a cooperative team player.  
                </p>
                <br></br>
                <p style={{background: "white", padding: "2vh", border: "3px solid black", borderRadius: "1vh"}}>
                    Some of my extracurricular activities include athletics and community service. 
                    I enjoy working out at the gym, playing soccer, basketball, and baseball, as well
                    as getting involved with my service fraternity, Alpha Phi Omega. 
                    These passions have instilled the values of team work and leadership in me, both in my personal,
                    academic, and professional life.  
                </p>
            </div>   
        </div>
    )
}

export default About;