import React, {Component} from "react";
import "./../styles/RemovableInputs.css"

class Education extends Component {
    
    render() {

        const {education, removeInput} = this.props;

        const educationList = [];

        for (let i = 0; i < education.length; i++) {
            educationList.push(
                <p key={education[i]} className="inputs-editor">{education[i]} <img onClick={removeInput} id={education[i]} className="remove-button" src={require("./../images/remove.png")} alt='' /> </p>
            )
        }


        return (
            <React.Fragment>
                <div>
                    {educationList}
                </div>
            </React.Fragment>
        );
    }
}

export default Education;