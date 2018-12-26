import React, { Component } from 'react';
import SkillCard from './SkillCard';

class Skill extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
        };
    }
  
    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }
  
    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }
  
    render() {
        return (
            <div>
                <li className='skill'
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                >
                    {this.props.skill}
                </li>
                {
                    this.state.isHovering &&
                    <SkillCard
                        skill={this.props.skill}
                        proficiency={this.props.proficiency}
                        experience={this.props.experience}
                    />
                }
            </div>   
        );
    }
}

export default Skill;