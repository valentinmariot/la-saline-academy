import { FC } from "react";

interface BasicIconProps {
  name: string;
  size?: "xs" | "s" | "m" | "l" | "xl";
  className: string;
}

const BasicIcon: FC<BasicIconProps> = ({ name, size = "m", className }) => {
  const classes = `ico ico-${name} ico-${size} ${className}`;
  return <span className={classes} />;
};

export default BasicIcon;
