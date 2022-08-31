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
                    <input className="input" type="text" placeholder="First Name" />
                    <input className="input" type="text" placeholder="Last Name" />
                    <input className="input" type="number" placeholder="Age" />
                </div>
            </React.Fragment>
        );
    }
}

export default Editor;