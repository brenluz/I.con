import * as PropTypes from "prop-types";
import {Component} from "react";

class Card extends Component {
    render() {
        const {icon, title, text} = this.props;
        return (
            <div className="flex flex-col justify-center items-center">
                <span className=""> {icon} </span>
                <p>{title}</p>
                <p>{text}</p>
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