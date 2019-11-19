import React from "react";
import Card from "@material-ui/core/Card";

const ViewJob = ({ check }) => {
  console.log(check[0]);
  if (check[0].heading !== "Click on a job post to view more details.") {
    return (
      <React.Fragment>
        <Card>
          {check.map(c => (
            <div className="container">
              <h4 style={{ color: "blue" }}>{c.heading}</h4>
              <hr />
              <h4>Requirements</h4>
              <p>{c.requirements}</p>
              <hr />
              <h4>Observation</h4>
              <em>{c.observation}</em>
            </div>
          ))}
        </Card>
      </React.Fragment>
    );
  } else {
    return <h4 style={{ color: "blue" }}>{check[0].heading}</h4>;
  }
};

export default ViewJob;
