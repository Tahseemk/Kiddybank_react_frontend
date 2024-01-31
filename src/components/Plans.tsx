import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ShortTermPlan from "./ShortTermPlan";
import MidTermPlan from "./MidTermPlan";
import WomenSavingPlan from "./WomanSavingPlan";

function Plans() {
  return (
    <div className="main--tab justify-content-md-center">
      <Tabs
        defaultActiveKey="shortTermPlan"
        id="justify-tab-example"
        className="custom-tabs mt-4"
        justify
      >
        <Tab eventKey="shortTermPlan" title="Short Term Plan">
          <ShortTermPlan />
        </Tab>
        <Tab eventKey="midTermPlan" title="Mid Term Plan">
          <MidTermPlan />
        </Tab>
        {/* <Tab eventKey="contact" title="Long Term Plan">
          Long Term Plan
        </Tab> */}
        <Tab eventKey="womenTermPlan" title=" Women Term Plan">
          <WomenSavingPlan />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Plans;
