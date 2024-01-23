

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  vector: string;
  groupClassName: any;
  overlapGroupClassName: any;
  img: string;
  vector1: string;
}

export const Shipment = ({
  className,
  vector = "/img/vector.svg",
  groupClassName,
  overlapGroupClassName,
  img = "/img/vector-3.svg",
  vector1 = "/img/vector-4.svg",
}: Props): JSX.Element => {
  return (
    <div className={`shipment ${className}`}>
      <div className="div-2">
        <div className="card-header">
          <div className="frame-2">
            <div className="text-wrapper-3">Shipment Updates</div>
            <div className="text-wrapper-4">Total Orders : 394</div>
          </div>
        </div>
        <div className="card-header-wrapper">
          <div className="card-header-2">
            <div className="div-wrapper">
              <div className="text-wrapper-5">Delivered</div>
            </div>
            <div className="frame-3">
              <div className="text-wrapper-5">Out for delivery</div>
            </div>
            <div className="frame-3">
              <div className="text-wrapper-5">Intransit</div>
            </div>
            <div className="frame-3">
              <div className="text-wrapper-5">Pending</div>
            </div>
            <div className="frame-3">
              <div className="text-wrapper-5">Exception</div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-3">
        <div className="div-3">
          <div className="group">
            <img className="vector" alt="Vector" src={vector} />
          </div>
          <div className={`group-2 ${groupClassName}`} />
          <div className="overlap-group-wrapper">
            <div className={`overlap-group ${overlapGroupClassName}`}>
              <div className="element">40</div>
            </div>
          </div>
          <div className="group-3">
            <img className="img" alt="Vector" src={img} />
          </div>
          <div className="group-4">
            <img className="vector-2" alt="Vector" src={vector1} />
          </div>
        </div>
      </div>
      <div className="div-2">
        <div className="frame-4">
          <div className="frame-5">
            <img className="rectangle" alt="Rectangle" src="/img/rectangle-34.svg" />
            <div className="text-wrapper-4">Exception</div>
          </div>
          <div className="frame-5">
            <img className="rectangle" alt="Rectangle" src="/img/rectangle-34-1.svg" />
            <div className="text-wrapper-4">Intransit</div>
          </div>
          <div className="frame-5">
            <img className="rectangle" alt="Rectangle" src="/img/rectangle-34-2.svg" />
            <div className="text-wrapper-4">Pending</div>
          </div>
        </div>
        <div className="frame-6">
          <div className="frame-5">
            <img className="rectangle" alt="Rectangle" src="/img/rectangle-34-3.svg" />
            <div className="text-wrapper-4">Delivered</div>
          </div>
          <div className="frame-5">
            <img className="rectangle" alt="Rectangle" src="/img/rectangle-34-4.svg" />
            <div className="text-wrapper-4">Out for delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Shipment.propTypes = {
  vector: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
};
