import { type FC, useState } from "react";
import * as styles from "./carousel.css";

type CarouselProps = {
  images: string[];
};

export const Carousel: FC<CarouselProps> = ({ images }) => {
  // 選択中の画像を管理するstate
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className={styles.container}>
      <div className={styles.mainImageContainer}>
        <img
          src={
            selectedImage
              ? `https://image.tmdb.org/t/p/w500${selectedImage}`
              : "https://via.placeholder.com/500"
          }
          alt="Selected"
          className={styles.mainImage}
        />
      </div>
      {/* 下部のサムネイルカルーセル */}
      <div className={styles.thumbnailContainer}>
        {images.length > 1 &&
          images.map((image) => (
            <button
              type="button"
              key={image}
              onClick={() => setSelectedImage(image)}
            >
              <img
                key={image}
                src={
                  image
                    ? `https://image.tmdb.org/t/p/w500${image}`
                    : "https://via.placeholder.com/500"
                }
                alt={`Thumbnail ${image}`}
                className={
                  selectedImage === image
                    ? `${styles.thumbnail} ${styles.selectedThumbnail}`
                    : styles.thumbnail
                }
              />
            </button>
          ))}
      </div>
    </div>
  );
};
