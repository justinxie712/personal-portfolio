import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
    return (
        <div>
            <div className='Container'>
                <p className="section">Contact</p>
                <hr></hr>
                <div>
                    <h6 style={{fontSize: "20px"}}>Phone</h6>
                    <p style={{fontSize: "17px"}}>(408) 464-8150</p>
                </div>
                <div>
                    <h6 style={{fontSize: "20px"}}>Email</h6>
                    <p style={{fontSize: "17px"}}>justin.xie712@gmail.com</p>
                </div>
                <br></br>
                <br></br>
                <h4>Social Media</h4>
                <hr></hr>
                <SocialIcon style={{ height: "8vh", width: "8vh", marginRight: "3vh"}} url="https://www.linkedin.com/in/justin-xie712/" />
                <SocialIcon style={{ height: "8vh", width: "8vh", marginRight: "3vh"}} url="https://www.facebook.com/justin.xie712" />
                <SocialIcon style={{ height: "8vh", width: "8vh", marginRight: "3vh"}} url="https://github.com/justinxie712" />
                <SocialIcon style={{ height: "8vh", width: "8vh", marginRight: "3vh"}} url="https://www.instagram.com/habs712/" />
            </div>   
        </div>
    )
}

export default Contact;