import * as BasicSelect from "@radix-ui/react-select";
import type * as React from "react";
import * as styles from "./select.css";

type Option = {
	label: string;
	value: string;
};

type SelectProps = {
	options: Option[];
	defaultValue?: string;
	handleChange?: (value: string) => void;
};

export const Select: React.FC<SelectProps> = ({
	options,
	defaultValue = options[0].value,
	handleChange,
}) => {
	return (
		<BasicSelect.Root defaultValue={defaultValue} onValueChange={handleChange}>
			<BasicSelect.Trigger className={styles.selectTrigger}>
				<BasicSelect.Value />
				<BasicSelect.Icon className={styles.selectIcon} />
			</BasicSelect.Trigger>
			<BasicSelect.Content className={styles.selectContent}>
				<BasicSelect.Viewport className={styles.selectViewport}>
					{options.map((option) => (
						<BasicSelect.Item
							key={option.value}
							value={option.value}
							className={styles.selectItem}
						>
							<BasicSelect.ItemText>{option.label}</BasicSelect.ItemText>
							<BasicSelect.ItemIndicator className={styles.selectItemIndicator}>
								✓
							</BasicSelect.ItemIndicator>
						</BasicSelect.Item>
					))}
				</BasicSelect.Viewport>
			</BasicSelect.Content>
		</BasicSelect.Root>
	);
};
