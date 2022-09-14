import React, {Component} from "react";
import "./../styles/Languages.css"

class Languages extends Component {
    
    render() {

        const {languages, handleRemoveLanguage} = this.props;

        const languageList = [];

        for (let i = 0; i < languages.length; i++) {
            languageList.push(
                <p key={languages[i]} className="languages-known-editor">{languages[i]} <img onClick={handleRemoveLanguage} className="remove-button" src={require("./../images/remove.png")} alt='' /> </p>
            )
        }


        return (
            <React.Fragment>
                <div className="language-list">
                    {languageList}
                </div>
            </React.Fragment>
        );
    }
}

export default Languages;