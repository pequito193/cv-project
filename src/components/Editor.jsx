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
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="number" placeholder="Age" />
                </div>
            </React.Fragment>
        );
    }
}

export default Editor;