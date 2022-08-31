import React, {Component} from "react";
import "./../styles/Info.css"

class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="curriculum">
                    <div className="left-side">
                        <img src="" alt="" className="face-photo" />
                        <div className="contacts"></div>
                        <div className="languages"></div>
                    </div>
                    <div className="right-side"></div>
                </div>
            </React.Fragment>
        );
    }
}

export default Info;