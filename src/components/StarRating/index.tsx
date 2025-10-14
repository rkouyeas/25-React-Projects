import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./styles.module.css";

type StarRatingProps = {
  numberOfStars?: number;
};

const StarRating = ({ numberOfStars = 5 }: StarRatingProps) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleClick = (index: number): void => {
    setRating((prevRating) => (prevRating === index ? 0 : index));
  };

  const handleMouseEnter = (index: number): void => {
    setHover(index);
  };

  const handleMouseLeave = (): void => {
    setHover(0);
  };

  return (
    <div className={styles["star-container"]}>
      {[...Array(numberOfStars)].map((_, index) => {
        index += 1; //Moves from base-0 to base-1 indexing

        //Div with padding for smooth transition between stars
        return (
          <div
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <FaStar
              className={`${styles.star} ${
                (hover || rating) >= index ? styles.fill : ""
              }`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
