import * as PropTypes from 'prop-types';
import React from 'react';

const Card = (props) => {
  const modifiedIcon = React.isValidElement(props.icon)
    ? React.cloneElement(props.icon, { size: 25 })
    : props.icon;

  return (
    <div className="flex flex-col flex-grow justify-center items-center m-2 h-full">
      <span> {modifiedIcon} </span>
      <p className="text-center font-bold">{props.title}</p>
      <p className="text-justify m-1 p-3 text-xs">{props.text}</p>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
