import React, { Component } from 'react';
import Modal from 'react-modal';
import { Button } from 'reactstrap';

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
                borderRadius: '4px',
                bottom: '50%',
                height: "75%",
                left: '50%',
                padding: '2rem',
                position: 'fixed',
                right: 'auto',
                top: '70%',
                transform: 'translate(-50%,-400px)',
                width: '55%',
                maxWidth: '40rem',
                overflowX: "hidden",
                background: "#FAEAEA"
            }
        };
        return (
            <div>
            <Button 
                onClick={this.handleOpenModal} 
                color="info"
                style={{position: "relative", left: "45vh", marginBottom: "0px", marginTop: "25px"}}
            >See More
            </Button>
            <Modal 
                isOpen={this.state.showModal}
                onRequestClose={this.handleCloseModal}
                style={style}
                onClick={this.handleOpenModal} 
            >
                <div>
                    <img className="logo" alt="logo" style={{margin: "10vh 5vh 5vh 5vh"}} src={this.props.imgSrc}/>
                    <div className="container">
                        <div className='details'>
                            {this.props.jobTitle && <h2 style={{margin: "20px 10px 10px 10px"}}>Company: {this.props.jobTitle}</h2>}
                            {this.props.classTitle && <h2 style={{margin: "20px 10px 10px 10px"}}>Class: {this.props.classTitle}</h2>}
                            <h6 style={{margin: "10px 10px 10px 10px"}}>Date: {this.props.duration}</h6>
                            {this.props.positionTitle && <h5 style={{margin: "20px 10px 10px 10px"}}>Position: {this.props.positionTitle}</h5>}      
                            <h5 style={{margin: "10px 10px 10px 10px", paddingLeft: "15%"}}>Project: {this.props.projectTitle}</h5>
                        </div>                      
                    </div>
                    <br></br>
                    <h3>Description:</h3>
                    <p style={{marginBottom: "20px"}}>{this.props.description}</p>

                    <h5>Tech-Stack:</h5>  
                    <p style={{marginBottom: "20px"}}><i>{this.props.techstack}</i></p>

                    <h5>Github:</h5>  
                    <a href={this.props.github} style={{marginBottom: "20px"}} target="_blank">
                        <i>{this.props.github}</i>
                    </a>
                </div>
            </Modal>
            </div>
        );
    }
}

export default ProjectModal