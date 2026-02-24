"use client";

import { useState } from "react";
import styles from "./ReviewCarousel.module.css";
import type { Review } from "../../inventory/ReviewList";

type ReviewProp = {
  reviews: Review[];
};

function ReviewCarousel({ reviews }: ReviewProp) {
  const [index, setIndex] = useState(0);

  if (!reviews || reviews.length === 0) {
    return null
  }

  const review = reviews[index];

  return (
    <div className={styles["carousel"]}>
       <button onClick={() => setIndex((prev) => prev === 0 ? reviews.length - 1 : prev - 1)}> ‹ </button>

      <div className={styles["review-card"]}>
        <p className={styles["stars"]}>
          {"★".repeat(review.rating)}
          {"☆".repeat(5 - review.rating)}
        </p>
        <p>"{review.text}"</p>
        <h4>— {review.name}</h4>
      </div>

      <button
        onClick={() =>
          setIndex((prev) => (prev + 1) % reviews.length)}> › </button>
    </div>
  );
}

export default ReviewCarousel;