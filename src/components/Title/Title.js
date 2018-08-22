import React from "react";
import "./Title.css";

const Title = props => {
    let title, guide;
    if (props.loss) {
        title = ""
        guide = ""
    } else {
        title = "Memory Game Time. Get ready. Best score so far: " + props.high;
        guide = "Click a card to play";
    }
    return (<div>
        <h1 className="title">{title}</h1>
        <h6 className="guide">{guide}</h6>
        </div>)
};

export default Title;
