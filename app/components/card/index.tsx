import * as Separator from "@radix-ui/react-separator";
import type React from "react";
import { FaHeart } from "react-icons/fa";
import TagList from "../tags";
import Rating from "./Rating";
import * as styles from "./card.css";

type CardProps = {
  title: string;
  date: string;
  description: string;
  review: number;
  likes: number;
  tags: string[];
  originalTitle: string;
  originalLanguage: string;
  imageUrl: string;
};

const Card: React.FC<CardProps> = ({
  title,
  date,
  description,
  review,
  likes,
  tags,
  originalTitle,
  originalLanguage,
  imageUrl,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.date}>{date}</p>
          <p className={styles.description}>{description}</p>
          <div className={styles.reviewSection}>
            <div className={styles.stars}>
              <Rating value={review} readOnly />
            </div>
            <div className={styles.favorite}>
              <FaHeart />
              <span>{likes}</span>
            </div>
          </div>
          <Separator.Root
            className={styles.separator}
            decorative
            orientation="horizontal"
          />
          <p>{originalTitle}</p>
          {/* <p>{originalLanguage}</p> */}
          <TagList
            type="category"
            tags={["New", "Popular", originalLanguage]}
          />
          <TagList type="genre" tags={tags} />
        </div>
      </div>

      {/* 右側の画像 */}
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={imageUrl} className={styles.image} />
      </div>
    </div>
  );
};

export default Card;
