import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import useFetch from "../../hooks/useFetch";
import styles from "./styles.module.css";

type ImageSliderProps = {
  url: string;
  limit?: number;
};

type Image = {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

const ImageSlider = ({ url, limit = 5 }: ImageSliderProps) => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const { data: imageData, loading, error } = useFetch<Image[]>(url);
  const images: Image[] = imageData?.slice(0, limit) ?? []; //Ideally the api endpoint will be responsbile for limiting so request won't fetch the entire images dataset

  const handleNext = (): void => {
    setSliderIndex((prevSliderIndex) =>
      prevSliderIndex >= Math.min(limit, images.length) - 1
        ? 0
        : prevSliderIndex + 1
    );
  };

  const handlePrevious = (): void => {
    setSliderIndex((prevSliderIndex) =>
      prevSliderIndex <= 0
        ? Math.min(limit, images.length) - 1
        : prevSliderIndex - 1
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!images.length) return <p>No images found</p>;

  return (
    <div className={styles["images-container"]}>
      {images && images.length ? (
        <>
          {images.length > 1 && (
            <button className={styles["prev-btn"]} onClick={handlePrevious}>
              <FaArrowCircleLeft />
            </button>
          )}
          <img
            src={images[sliderIndex].download_url}
            alt={`Image by ${images[sliderIndex].author}`}
          />
          {images.length > 1 && (
            <button className={styles["next-btn"]} onClick={handleNext}>
              <FaArrowCircleRight />
            </button>
          )}
          <div className={styles["dot-container"]}>
            {images.length <= 10 &&
              images.length > 1 &&
              images.map((_, index) => (
                <span
                  key={index}
                  className={`${styles["slider-dots"]} ${
                    index === sliderIndex ? styles.active : ""
                  }`}
                  onClick={() => setSliderIndex(index)}
                ></span>
              ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ImageSlider;
