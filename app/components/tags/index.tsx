import type React from "react";
import * as styles from "./tags.css";

// タグの種類をリテラル型で定義
type TagType = "genre" | "category";

const sizeMap = {
  small: "10px",
  medium: "20px",
  large: "28px",
};

type TagProps = {
  type: TagType;
  tags: string[];
  size?: "small" | "medium" | "large";
};

const TagList: React.FC<TagProps> = ({ type, tags, size = "small" }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        margin: "10px 0 8px",
      }}
    >
      {tags.map((tag) => (
        <span
          key={tag}
          className={`${styles.tagBase} ${styles.tagVariants[type]}`}
          style={{
            fontSize: sizeMap[size],
            padding: size === "large" ? "16px" : "8px",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;
