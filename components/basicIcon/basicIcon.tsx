import { FC } from "react";

interface BasicIconProps {
  name: string;
}

const BasicIcon: FC<BasicIconProps> = ({ name }) => {
  const classes = `ico ico-${name}`;
  return <span className={classes} />;
};

export default BasicIcon;
