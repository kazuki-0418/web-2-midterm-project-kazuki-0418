import type React from "react";
import { FaStar } from "react-icons/fa";
import { vars } from "../../css/theme.css";

type RatingProps = {
	value: number; // 現在の評価値
	max?: number; // 最大星数（デフォルト5）
	readOnly?: boolean; // 読み取り専用モード
	size?: "small" | "medium" | "large"; // 星のサイズ
};

const starSize = {
	small: "24px",
	medium: "32px",
	large: "48px",
};

const Rating: React.FC<RatingProps> = ({
	value,
	max = 5,
	readOnly = false,
	size = "small",
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
							fontSize: starSize[size],
						}}
						// onClick={() => handleRatingClick(star)}
					>
						<FaStar
							style={{
								color: isFullStar ? vars.color.star : vars.color.lightGray,
								zIndex: 1,
							}}
						/>
						{isHalfStar && (
							<FaStar
								style={{
									color: vars.color.star,
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
