import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "../components/Slider/Slider";
import CarItem from "../components/UI/CarItem";
import CommonSection from "../components/UI/CommonSection";
import { Cars } from "../types";

function CarListing() {
  const [cars, setCars] = useState<Cars[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/cars")
      .then((resp) => resp.json())
      .then((carsFromServer) => setCars(carsFromServer));
  }, []);

  return (
    <Slider title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {cars.map((car) => (
              <>
                <CarItem item={car} key={car.id} />
              </>
            ))}
          </Row>
        </Container>
      </section>
    </Slider>
  );
}

export default CarListing;
