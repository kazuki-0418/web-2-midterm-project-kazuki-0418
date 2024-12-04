import type React from "react";
import * as styles from "./tags.css";

// タグの種類をリテラル型で定義
type TagType = "genre" | "category";

type TagProps = {
  type: TagType;
  tags: string[];
};

const TagList: React.FC<TagProps> = ({ type, tags }) => {
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
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;
