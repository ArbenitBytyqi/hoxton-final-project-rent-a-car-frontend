import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types";
import "./review.css";

export type Reviews = {
  id: number;
  userId: number;
  rating: number;
  content: string;
  createdAt: string;
};

type Props = {
  currentUser: User;
  signOut: () => void;
};

export function Review({ currentUser, signOut }: Props) {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState<Reviews[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/reviews")
      .then((resp) => resp.json())
      .then((reviewsFromServer) => setReviews(reviewsFromServer));
  }, []);

  return (
    <>
      <h1 className="review-h1">Share your experience, write a review.</h1>
      <form
        className="post-review"
        onSubmit={(event) => {
          event.preventDefault();
          let newReview = {
            content: event.target.text.value,
            userId: currentUser.id,
            rating: Number(event.target.rating.value),
            imgUrl: event.target.imgUrl.value,
            name: event.target.name.value,
          };
          fetch("http://localhost:4000/reviews", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newReview),
          }).then(() => {
            fetch("http://localhost:4000/reviews")
              .then((resp) => resp.json())
              .then((reviewsFromServer) => setReviews(reviewsFromServer));
          });
        }}
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Review Title?"
        ></input>
        <input
          type="textArea"
          name="content"
          id="text"
          placeholder="Your Review?"
          required
        ></input>
        <input
          type="number"
          name="rating"
          id="rating"
          placeholder="Rating?"
        ></input>
        <input
          type="text"
          name="imgUrl"
          id="imgUrl"
          placeholder="Image?"
        ></input>
        <button className="review-btn">POST</button>
      </form>
    </>
  );
}
