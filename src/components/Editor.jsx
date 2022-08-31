import React, {Component} from "react";
import "./../styles/Editor.css"

class Editor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="editor-wrapper">
                    <h2 className="editor-title">Personal Info</h2>
                    <div className="inputs">
                        <input className="input" type="text" placeholder="First Name" />
                        <input className="input" type="text" placeholder="Last Name" />
                        <input className="input" type="text" placeholder="Job Title" />
                        <input className="input" type="number" placeholder="Phone Number" />
                        <input className="input" type="email" placeholder="Email" />
                        <input className="input" type="text" placeholder="Linked In" />
                        <input className="input" type="text" placeholder="Github Username" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Editor;