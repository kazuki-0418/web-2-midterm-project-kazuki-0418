import * as Separator from "@radix-ui/react-separator";
import { NavigationMenu, SeparatorRoot, Text } from "./header.css";

export const NavigationMenuComponent = () => (
  <div className={NavigationMenu}>
    <div className={Text}>Home</div>
    <Separator.Root
      className={SeparatorRoot}
      decorative
      orientation="vertical"
    />
    <div className={Text}>About</div>
  </div>
);
