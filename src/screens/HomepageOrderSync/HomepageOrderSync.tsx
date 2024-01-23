import React from "react";
import { ButtonGroup } from "../../components/ButtonGroup";
import { Card } from "../../components/Card";
import { Facts } from "../../components/Facts";
import { Html } from "../../components/Html";
import { Integrations } from "../../components/Integrations";
import { OneOne } from "../../components/OneOne";
import { Shipment } from "../../components/Shipment";
import { TpViews } from "../../components/TpViews";
import { TrackingLink } from "../../components/TrackingLink";
import { TrackingPageStyles } from "../../components/TrackingPageStyles";
import { Alerttriangle1 } from "../../icons/Alerttriangle1";
import { Calendar1 } from "../../icons/Calendar1";
import { Chevrondown1 } from "../../icons/Chevrondown1";
import { Info } from "../../icons/Info";
import { Person } from "../../icons/Person";
import { Search1 } from "../../icons/Search1";
import { Settings } from "../../icons/Settings";
import "./style.css";

export const HomepageOrderSync = (): JSX.Element => {
  return (
    <div className="homepage-order-sync">
      <div className="div-7">
        <div className="overlap">
          <img className="bg-illustration" alt="Bg illustration" src="/img/bg-illustration.svg" />
          <div className="text-wrapper-20">Welcome, John Mathew!!</div>
          <div className="tracking-link-wrapper">
            <TrackingLink
              buttonGroupButtonButtonShineVariantPrimaryToneClassName="tracking-link-instance"
              buttonGroupButtonLabelContent="Go To Navigation Menu"
              className="design-component-instance-node-2"
              icon={<Info className="icon-instance-node" />}
            />
          </div>
          <div className="order-quota-wrapper">
            <div className="order-quota">
              <div className="heading-9">
                <div className="frame-12">
                  <Alerttriangle1 className="icon-instance-node" />
                  <div className="order-quota-pending">Customize Customer Notification</div>
                </div>
                <div className="your-order-quota-is-wrapper">
                  <p className="your-order-quota-is">
                    Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers
                  </p>
                </div>
              </div>
              <ButtonGroup
                buttonButtonShineVariantPrimaryToneClassName="button-group-13"
                buttonDivClassName="button-group-14"
                buttonLabelContent1="Configure Notifications"
                className="button-group-12"
                gap="tight"
                visible={false}
              />
            </div>
          </div>
          <div className="card-2">
            <div className="order-quota">
              <div className="heading-9">
                <div className="frame-12">
                  <div className="order-quota-pending-2">Order Sync Successful!</div>
                </div>
                <div className="your-order-quota-is-wrapper">
                  <p className="your-order-quota-is-2">
                    Your order details from the last 30 days have been successfully synced. Check them out now!
                  </p>
                </div>
              </div>
              <ButtonGroup
                buttonButtonShineVariantPrimaryToneClassName="button-group-15"
                buttonDivClassName="button-group-14"
                buttonLabelContent1="Explore Your Orders"
                className="button-group-12"
                gap="tight"
                visible={false}
              />
            </div>
          </div>
          <div className="performance-metrics">
            <div className="overlap-2">
              <p className="text-wrapper-21">Instant Dive into Your Performance Metrics</p>
              <div className="frame-13">
                <div className="card-header-3">
                  <div className="frame-14">
                    <div className="text-wrapper-22">Lifetime</div>
                  </div>
                  <div className="frame-15">
                    <div className="text-wrapper-22">Last Week</div>
                  </div>
                  <div className="frame-15">
                    <div className="text-wrapper-22">Last Month</div>
                  </div>
                  <div className="frame-15">
                    <div className="text-wrapper-22">Last Year</div>
                  </div>
                  <div className="frame-16">
                    <div className="text-wrapper-22">Customize Time Line</div>
                    <Calendar1 className="icon-instance-node" color="#4A4A4A" />
                  </div>
                </div>
              </div>
              <div className="card-wrapper">
                <Card
                  className="design-component-instance-node-2"
                  override={
                    <Shipment
                      className="shipment-instance"
                      groupClassName="shipment-2"
                      img="/img/vector-8.svg"
                      overlapGroupClassName="shipment-3"
                      vector="/img/vector-5.svg"
                      vector1="/img/vector-9.svg"
                    />
                  }
                />
              </div>
              <Card className="card-instance" override={<TpViews className="TP-views-instance" />} />
              <div className="facts-wrapper">
                <Facts
                  buttonGroupGapTightClassName="facts-3"
                  className="facts-instance"
                  headingClassName="facts-2"
                  text={
                    <>
                      There are 8 shipments that have been in out for delivery for more than 3 days.
                      <br />
                      <br />
                      There are 5 shipments in exception right now
                      <br />
                      <br />
                      The maximum chargebacks are from Miami.
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="functionality">
          <div className="one-one-wrapper">
            <OneOne
              className="design-component-instance-node-2"
              text={
                <>
                  Unlock personalized guidance! Book a one-on-one <br />
                  onboarding call to streamline your experience.
                </>
              }
            />
          </div>
          <p className="text-wrapper-23">Discover the Heart of Our Functionality</p>
          <div className="integrations-wrapper">
            <Integrations
              className="design-component-instance-node-3"
              headingClassName="integrations-instance"
              text="Discover a variety of popular integrations tailored for your convenience."
            />
          </div>
          <div className="tracking-page-styles-wrapper">
            <TrackingPageStyles
              className="design-component-instance-node-3"
              divClassName="tracking-page-styles-3"
              rectangleClassName="tracking-page-styles-instance"
              rectangleClassNameOverride="tracking-page-styles-2"
              textFieldInputTextValueContent="FF9898"
              textFieldInputTextValueContent1="571010"
              textFieldInputTextValueContent2="FFEAEA"
            />
          </div>
          <div className="HTML-wrapper">
            <Html className="design-component-instance-node-3" />
          </div>
        </div>
        <div className="top-nav">
          <div className="navigation-contents">
            <div className="div-8">
              <div className="text">
                <div className="text-wrapper-24">Home</div>
              </div>
              <img className="line" alt="Line" src="/img/line-1.svg" />
            </div>
            <div className="div-8">
              <div className="text">
                <div className="text-wrapper-24">Orders</div>
              </div>
            </div>
            <div className="div-8">
              <div className="text">
                <div className="text-wrapper-24">Integrations</div>
              </div>
            </div>
            <div className="div-8">
              <div className="text">
                <div className="text-wrapper-24">Tracking Page</div>
                <Chevrondown1 className="icon-instance-node" />
              </div>
            </div>
            <div className="div-8">
              <div className="text">
                <div className="text-wrapper-24">Partner with Us</div>
              </div>
            </div>
          </div>
          <div className="frame-17">
            <div className="div-8">
              <div className="text-2">
                <Search1 className="icon-instance-node" color="#4A4A4A" />
                <div className="text-wrapper-25">Search</div>
              </div>
              <img className="line-2" alt="Line" src="/img/line-1-1.svg" />
            </div>
            <div className="orders">
              <div className="text">
                <Person className="icon-instance-node" />
                <div className="text-wrapper-26">Account</div>
              </div>
            </div>
            <div className="orders">
              <div className="text">
                <Settings className="icon-instance-node" />
                <div className="text-wrapper-26">Settings</div>
              </div>
            </div>
          </div>
          <img className="line-3" alt="Line" src="/img/line-2.svg" />
        </div>
      </div>
    </div>
  );
};
