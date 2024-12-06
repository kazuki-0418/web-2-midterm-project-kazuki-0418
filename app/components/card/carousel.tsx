import { useState } from "react";
import * as styles from "./carousel.css";

type CarouselProps = {
  slides: React.ReactElement[];
};

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 次のスライドに移動
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // 前のスライドに移動
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {slides.map((slide, index) => (
          <div
            key={slide.toString()}
            className={`${styles.slide} ${
              index === currentIndex ? styles.activeFade : styles.inactiveFade
            }`}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <span
            key={slide.toString()}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentIndex(index)}
            onKeyUp={(e) => e.key === "Enter" && setCurrentIndex(index)}
            onKeyDown={(e) => e.key === " " && setCurrentIndex(index)}
          >
            {}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
