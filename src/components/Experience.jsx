import React, {Component} from "react";
import "./../styles/RemovableInputs.css"

class Experience extends Component {
    
    render() {

        const {experience, removeInput} = this.props;

        const experienceList = [];

        for (let i = 0; i < experience.length; i++) {
            experienceList.push(
                <p key={experience[i]} className="inputs-editor">{experience[i]} <img onClick={removeInput} id={experience[i]} className="remove-button" src={require("./../images/remove.png")} alt='experience-remove-button' /> </p>
            )
        }


        return (
            <React.Fragment>
                <div>
                    {experienceList}
                </div>
            </React.Fragment>
        );
    }
}

export default Experience;