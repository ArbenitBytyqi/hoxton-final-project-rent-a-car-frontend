import React from "react";
import { Col } from "reactstrap";
import "./services-list.css";

const ServicesList = () => {
  return (
    <>
      <Col lg="4" md="4" sm="6" className="mb-3">
        <div className="service__item">
          <span className="mb-3 d-inline-block">
            <i className="ri-map-pin-2-line" />
          </span>

          <h6>City Transfer</h6>
          <p className="section__description">
            Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum
            et erat. Dolor ut duo sadipscing lorem. Gubergren gub
          </p>
        </div>
        <div className="service__item">
          <span className="mb-3 d-inline-block">
            <i className="ri-roadster-line" />
          </span>

          <h6>Many Pickup Locations</h6>
          <p className="section__description">
            Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum
            et erat. Dolor ut duo sadipscing lorem. Gubergren gub
          </p>
        </div>
        <div className="service__item">
          <span className="mb-3 d-inline-block">
            <i className="ri-flight-takeoff-line" />
          </span>

          <h6>Airport Transfer</h6>
          <p className="section__description">
            Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum
            et erat. Dolor ut duo sadipscing lorem. Gubergren gub
          </p>
        </div>
      </Col>
    </>
  );
};

export default ServicesList;
