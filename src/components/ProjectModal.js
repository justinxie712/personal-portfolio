import React, { Component } from 'react';
import Modal from 'react-modal';

class ProjectModal extends Component {
    constructor () {
        super();
        this.state = {
            showModal: false
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
        this.setState({ showModal: true });
    }
    
    handleCloseModal () {
        this.setState({ showModal: false });
    }
    
    render () {
        const style = {
            content: {
                border: "5px solid black",
                zIndex: 210,
                borderRadius: '4px',
                height: "60%",
                padding: '2rem',
                position: 'absolute',
                top: '55%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                width: '50%',
                maxWidth: '80vh',
                overflowX: "hidden",
                background: "#FAEAEA"
            }
        };
        return (
            <div>
                <div className="project" onClick={this.handleOpenModal} onMouseOver={""} style={{cursor: "pointer"}}>
                    <div className="content">
                        <img className="logo" alt="logo" src={this.props.imgSrc}/>
                        <div className="project-details">
                            {this.props.jobTitle && <p className="heading">Company: {this.props.jobTitle}</p>}
                            {this.props.classTitle && <p className="heading">Class: {this.props.classTitle}</p>}
                            {this.props.personal && <p className="heading">Personal Project</p>}
                            <p className="heading"><i>{this.props.duration}</i></p>
                            {this.props.position && <p className="heading">Position: {this.props.position}</p>}
                            <p className="heading">Project: {this.props.projectTitle}</p>
                        </div> 
                    </div>
                </div>
                
                <Modal 
                    isOpen={this.state.showModal}
                    onRequestClose={this.handleCloseModal}
                    style={style}
                    onClick={this.handleOpenModal} 
                >
                    <div className="container">
                        <img className="logo" alt="logo" src={this.props.imgSrc}/>
                        <div className="project-details">
                            {this.props.jobTitle && <p>Company: {this.props.jobTitle}</p>}
                            {this.props.classTitle && <p>Class: {this.props.classTitle}</p>}
                            {this.props.personal && <p>Personal Project</p>}
                            <p><i>{this.props.duration}</i></p>
                            {this.props.position && <p>Position: {this.props.position}</p>}
                            <p>Project: {this.props.projectTitle}</p>
                        </div>
                        <br></br>
                        <hr></hr>
                        <h5>Description:</h5>
                        <p style={{marginBottom: "20px"}}>{this.props.description}</p>
                        <hr></hr>
                        <h5>Tech-Stack:</h5>  
                        <p style={{marginBottom: "20px"}}><i>{this.props.techstack}</i></p>
                        <hr></hr>
                        <h5>Github:</h5>
                        <a href={this.props.github} style={{marginBottom: "20px"}}  target="_blank">
                            <i>{this.props.github}</i>
                        </a>
                        <hr></hr>
                        {this.props.link &&
                            <div>
                                <h5>Link:</h5>
                                <a href={this.props.link} style={{marginBottom: "20px"}}  target="_blank">
                                    <i>{this.props.link}</i>
                                </a> 
                            </div> 
                            }
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ProjectModal