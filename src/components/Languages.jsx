import React, {Component} from "react";
import "./../styles/RemovableInputs.css"

class Languages extends Component {
    
    render() {

        const {languages, removeLanguage} = this.props;

        const languageList = [];

        for (let i = 0; i < languages.length; i++) {
            languageList.push(
                <p key={languages[i]} className="inputs-editor">{languages[i]} <img onClick={removeLanguage} id={languages[i]} className="remove-button" src={require("./../images/remove.png")} alt='language-remove-button' /> </p>
            )
        }


        return (
            <React.Fragment>
                <div>
                    {languageList}
                </div>
            </React.Fragment>
        );
    }
}

export default Languages;