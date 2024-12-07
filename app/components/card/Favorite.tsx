import React from "react";
import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";
import * as styles from "./favorite.css";

type FavoriteProps = {
  likes: number;
  size: "small" | "medium" | "large";
};

const sizeMap = {
  small: "16px",
  medium: "24px",
  large: "32px",
};

export const Favorite = ({ likes, size = "small" }: FavoriteProps) => {
  return (
    <div className={styles.favorite} style={{ fontSize: sizeMap[size] }}>
      <FaHeart />
      <span>{likes}</span>
    </div>
  );
};
