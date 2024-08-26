import * as PropTypes from "prop-types";
import {Component} from "react";
import React from "react";

class Card extends Component {
    render() {
        const {icon, title, text} = this.props;
        const modifiedIcon = React.isValidElement(icon) 
            ? React.cloneElement(icon, { size: 25 }) // Change 50 to the desired size
            : icon;
        return (
            <div className="flex flex-col flex-grow justify-center items-center m-2 h-full">
                <span> {modifiedIcon} </span>
                <p className= "text-center font-bold">{title}</p>
                <p className= "text-justify m-1 p-3 text-xs">{text}</p>
            </div>
        )
    }
}

Card.propTypes = {
    icon: PropTypes.element,
    title: PropTypes.string,
    text: PropTypes.string
}

export default Card