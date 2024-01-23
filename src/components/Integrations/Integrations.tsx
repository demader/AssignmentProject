

import PropTypes from "prop-types";
import React from "react";
import { ButtonGroup } from "../ButtonGroup";
import "./style.css";

interface Props {
  className: any;
  headingClassName: any;
  text: string;
}

export const Integrations = ({
  className,
  headingClassName,
  text = "Discover a variety of popular integrations tailored for your convenience. <br/><br/>Click to explore and integrate these powerful tools, directing you to our comprehensive Integrations.",
}: Props): JSX.Element => {
  return (
    <div className={`integrations ${className}`}>
      <div className={`heading-4 ${headingClassName}`}>
        <div className="text-wrapper-12">Explore Our Integrated Ecosystem</div>
        <p className="discover-a-variety">{text}</p>
      </div>
      <div className="frame-11">
        <div className="logos">
          <div className="paypal" />
          <div className="ali-reviews" />
          <div className="instagram-feed" />
          <div className="google-analytics" />
          <div className="shopify-flow" />
        </div>
        <ButtonGroup
          buttonButtonShineVariantPrimaryToneClassName="button-group-5"
          buttonDivClassName="button-group-6"
          buttonLabelContent1="Explore Integrations"
          buttonVariant="primary"
          className="button-group-4"
          gap="tight"
          visible={false}
        />
      </div>
    </div>
  );
};

Integrations.propTypes = {
  text: PropTypes.string,
};
