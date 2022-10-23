import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "../components/Slider/Slider";
import CommonSection from "../components/UI/CommonSection";
import { Reviews } from "./Review";
import "./displayReviews.css";
import { Link } from "react-router-dom";
import { User } from "../types";

type Props = {
  currentUser: User;
};

export function DisplayReviews({ currentUser }: Props) {
  const [reviews, setReviews] = useState<Reviews[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/reviews")
      .then((resp) => resp.json())
      .then((reviewsFromServer) => setReviews(reviewsFromServer));
  }, []);

  return (
    <Slider title="Reviews">
      <CommonSection title="Reviews" />
      <div className="main-div">
        {reviews.map((review: any) => (
          <div className="main-reviews-div">
            <Col lg="4" md="6" sm="6" className="mb-5">
              <div className="blog__item">
                <img src={review.imgUrl} alt="" className="w-100" />
                <div className="blog__info p-3">
                  <h6 className="review-title">Title:</h6>
                  <h4 to={`/blogs/${review.name}`} className="blog__title">
                    {review.name}
                  </h4>
                  <p></p>
                  <h6 className="review-description">Description:</h6>
                  <p className="section__description mt-3">{review.content}</p>
                  <button
                    className="delete-review-button"
                    onClick={() => {
                      fetch(`http://localhost:4000/reviews/${review.id}`, {
                        method: "DELETE",
                      })
                        .then((resp) => resp.json())
                        .then(() => location.reload());
                    }}
                  >
                    {" "}
                    DELETE{" "}
                  </button>
                </div>
              </div>
            </Col>
          </div>
        ))}
      </div>
    </Slider>
  );
}
