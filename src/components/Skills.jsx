import React, {Component} from "react";
import "./../styles/RemovableInputs.css"

class Skills extends Component {
    
    render() {

        const {skills, removeInput} = this.props;

        const skillsList = [];

        for (let i = 0; i < skills.length; i++) {
            skillsList.push(
                <p key={skills[i]} className="inputs-editor">{skills[i]} <img onClick={removeInput} id={skills[i]} className="remove-button" src={require("./../images/remove.png")} alt='' /> </p>
            )
        }


        return (
            <React.Fragment>
                <div>
                    {skillsList}
                </div>
            </React.Fragment>
        );
    }
}

export default Skills;