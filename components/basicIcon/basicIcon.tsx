import { FC } from "react";

interface BasicIconProps {
  name: string;
  size?: "xs" | "s" | "m" | "l" | "xl";
}

const BasicIcon: FC<BasicIconProps> = ({ name, size = "m" }) => {
  const classes = `ico ico-${name} ico-${size}`;
  return <span className={classes} />;
};

export default BasicIcon;
