import { FC } from "react";
import Tag from "../tag/tag";
import Link from "next/link";

import styles from "./card.module.scss";
import BasicIcon from "@/components/basicIcon/basicIcon";

interface CardProps {
    image: string;
    title: string;
    href: string;
    author: string;
    desc: string;
    tagLink: string;
    time?: string;
    language?: string;
    point?: string;
    isNew?: boolean;
    tagName?: string;
    tagColor?: "purple" | "orange";
}

const Card: FC<CardProps> = ({
    image,
    title,
    href= "#",
    author,
    time,
    language,
    point,
    desc,
    isNew= false,
    tagName,
    tagColor = "purple",
    tagLink,
}) => {
    return (
        <div className={styles.card_cours + ' border'}>
            <Link className={styles.link} href={href}></Link>
            {isNew &&
                <span className={styles.new}>
                     <Tag name="Nouveaux" href="#" size="xs" color="new"/>
                </span>
            }
            {image &&
                <figure>
                    <img src={image} alt={title}/>
                </figure>
            }
            <div className={styles.card_content}>
                <div className={styles.top}>
                    {title && <h5 className={styles.title}>{title}</h5>}
                    {author && <p>Par <span className="purple">{author}</span></p>}
                    <div className={styles.infos}>
                        {time &&
                            <p>{time}h</p>
                        }
                        {language &&
                            <div>
                                <BasicIcon name="chat-solo" size="s"/>
                                {language}
                            </div>
                        }
                        {point &&
                            <div>
                                <BasicIcon name="poin" size="s"/>
                                {point}pts
                            </div>
                        }
                    </div>
                </div>
                {desc && <p className={styles.desc}>{desc}</p>}
                {tagName && <Tag name={tagName} href={tagLink} size="xs" color={tagColor}/>}
            </div>

        </div>
    );
};

export default Card;
