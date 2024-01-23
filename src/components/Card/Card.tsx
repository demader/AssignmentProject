

import PropTypes from "prop-types";
import React from "react";
import { Slot } from "../Slot";
import "./style.css";

interface Props {
  showSlot: boolean;
  className: any;
  override: JSX.Element;
}

export const Card = ({
  showSlot = true,
  className,
  override = <Slot backgroundClassName="slot-2" className="slot-instance" />,
}: Props): JSX.Element => {
  return <div className={`card ${className}`}>{showSlot && <>{override}</>}</div>;
};

Card.propTypes = {
  showSlot: PropTypes.bool,
};
