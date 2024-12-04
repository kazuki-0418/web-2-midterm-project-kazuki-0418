import type React from "react";
import { FaStar } from "react-icons/fa";

type RatingProps = {
  value: number; // 現在の評価値
  max?: number; // 最大星数（デフォルト5）
  readOnly?: boolean; // 読み取り専用モード
};

const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  readOnly = false,
}) => {
  value = Math.round(value * 2) / 2 / 2;

  const stars = Array.from({ length: max }, (_, index) => index + 1);

  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {stars.map((star) => {
        // 星がハーフスターかどうかを判定
        const isHalfStar = value >= star - 0.5 && value < star;
        const isFullStar = value >= star;

        return (
          <div
            key={star}
            style={{
              position: "relative",
              cursor: readOnly ? "default" : "pointer",
              fontSize: "24px",
            }}
            // onClick={() => handleRatingClick(star)}
          >
            <FaStar
              style={{
                color: isFullStar ? "#FFD700" : "#E0E0E0",
                zIndex: 1,
              }}
            />
            {isHalfStar && (
              <FaStar
                style={{
                  color: "#FFD700",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  clipPath: "inset(0 50% 0 0)", // 半分だけ表示
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
