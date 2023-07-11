import {FC, useState} from "react";
import Tag from "../tag/tag";
import Link from "next/link";

import styles from "./cardnote.module.scss";
import BasicIcon from "@/components/basicIcon/basicIcon";

interface CardNoteProps {
    title: string;
    desc: string;
    href: string;
    checkBox?: boolean;
}

const CardNote: FC<CardNoteProps> = ({
     title,
     desc,
    href,
    checkBox,
 }) => {

    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className={`${styles.cardNote} border ${isChecked ? styles.cardNoteCheck : ""}`}>
            <div className={styles.cardNoteHead}>
                {title && <h5 className={styles.title}>Cours : {title}</h5>}
                {checkBox &&
                    <button className="purple" onClick={() => setIsChecked(!isChecked)}>
                        <BasicIcon name={isChecked ? "checklist-square" : "unchecked-square"} size="s"/>
                    </button>
                }
            </div>
            {desc && <p className={`${styles.desc} gray`}>{desc}</p>}
            {href &&
                <Link href={href} className="btn btn-purple-link hover-effect ml-auto">
                    Voir toute la note
                    <BasicIcon name="arrow-right" size="s"/>
                </Link>
            }
        </div>
    );
};

export default CardNote;
