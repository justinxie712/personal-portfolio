import React from 'react';

const ProfilePicture = (props) => (
    <div>
        <img className="ProfilePicture" alt="profilePicture" src={props.pictureSRC}/>
    </div>
);

export default ProfilePicture;