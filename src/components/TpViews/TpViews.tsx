
import React from "react";
import "./style.css";

interface Props {
  className: any;
}

export const TpViews = ({ className }: Props): JSX.Element => {
  return (
    <div className={`TP-views ${className}`}>
      <div className="div-4">
        <p className="text-wrapper-6">Tracking Page Views Vs Orders</p>
        <p className="text-wrapper-7">
          Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.
        </p>
      </div>
      <div className="frame-7">
        <div className="div-4">
          <div className="frame-wrapper">
            <div className="frame-8">
              <div className="text-wrapper-8">Orders</div>
              <div className="text-wrapper-9">80</div>
              <img className="order" alt="Order" src="/img/order.svg" />
            </div>
          </div>
        </div>
        <div className="div-4">
          <div className="frame-9">
            <div className="text-wrapper-8">Tracking Page Views</div>
            <div className="text-wrapper-9">44</div>
            <img className="view" alt="View" src="/img/view.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
