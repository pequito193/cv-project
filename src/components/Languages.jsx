import React, {Component} from "react";
import "./../styles/Languages.css"

class Languages extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {

        const {languages} = this.props;

        const languageList = [];

        for (let i = 0; i < languages.length; i++) {
            languageList.push(
                <p className="languages-known-editor">{languages[i]} <img className="remove-button" src={require("./../images/remove.png")} /> </p>
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