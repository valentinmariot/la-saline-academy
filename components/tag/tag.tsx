import { FC } from "react";
import BasicIcon from "../basicIcon/basicIcon";
import Link from "next/link";

import styles from "./tag.module.scss";

interface TagProps {
  name: string;
  href: string;
  color?: "purple" | "orange" | "new";
  size?: "xs" | "s";
  icon?: string;
}

const Tag: FC<TagProps> = ({
  name,
  color = "purple",
  size = "s",
  href,
  icon,
}) => {
  return (
    <Link
      className={`${styles.tag}
        ${styles[`tag_${color}`]}
        ${styles[`tag_${size}`]}
    `}
      href={href}
    >
      {name}
      {icon && <BasicIcon name={icon} size={size} />}
    </Link>
  );
};

export default Tag;
