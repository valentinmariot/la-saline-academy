import Head from "next/head";
import BasicIcon from "@/components/basicIcon/basicIcon";
import styles from "./profil.module.scss";

const Profil = () => {
    return (
        <div className={styles.page_profil}>
            <Head>
                <title>Mon profil - La Saline Academy</title>
            </Head>
            <h1 className="sr-only">Mon profil</h1>

            <div className={styles.infos_profil + ' dflexcolumn'}>
                <div className={styles.titre + ' dflex w100'}>
                    <h3>Charles-Lucas Maxime</h3>
                    <a href="profil/edit" className="btn btn-purple-link hover-effect">
                        Modifier profil
                        <BasicIcon name="edit" size="s"/>
                    </a>
                </div>
                <div className={styles.infos}>
                    <div id="nb_cours">
                        4 cours
                    </div>
                    <div id="type_user" className="italic">
                        <BasicIcon name="profile" size="s"/>
                        Professeur
                    </div>
                    <div id="time" className="italic">
                        <BasicIcon name="history" size="s"/>
                        10h
                    </div>
                </div>
                <div id="points" className={styles.points + ' bold'}>
                    <BasicIcon name="poin" size="m"/>
                    7890pts
                </div>
                <div id="tag" className={styles.tags}>

                </div>
            </div>
            <hr/>
            <div>
                <h4>Reprendre vos <span className="purple">cours</span></h4>
                <p>fefa</p>
            </div>
            <hr/>
            <div>

            </div>

        </div>
    );
};

export default Profil;
