import React, { useEffect, useState } from "react";
import MainSlider from "../components/UI/MainSlider";
import Slider from "../components/Slider/Slider";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import CarItem from "../components/UI/CarItem";
import { Cars } from "../types";

type Props = {
  signOut: () => void;
};

function Home({ signOut }: Props) {
  const [cars, setCars] = useState<Cars[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/cars")
      .then((resp) => resp.json())
      .then((carsFromServer) => setCars(carsFromServer));
  }, []);

  return (
    <>
      <Slider title="Home">
        {/* Slider Section */}
        <section className="p-0 hero__slider-section">
          <MainSlider />
          <div className="hero__form">
            <Container>
              <Row className="form__row">
                <Col lg="4" md="4">
                  <div className="find__cars-left">
                    <h2>Find your best car here</h2>
                  </div>
                </Col>

                <Col lg="8" md="8" sm="12">
                  <FindCarForm />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </Slider>

      {/* About section */}
      <AboutSection />

      {/* Services section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* Car item section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {cars.map((car) => (
              <>
                <CarItem item={car} key={car.id} />
              </>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
