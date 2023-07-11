import styles from "./profil.module.scss";
import Head from "next/head";

const EditProfil = () => {
    return (
        <>
            <Head>
                <title>Modifier mon profil - La Saline Academy</title>
            </Head>
            <h1 className="sr-only">Modifier mon profil</h1>

            <div className={styles.page_editProfil}>
                <h3>edit</h3>
            </div>
        </>
    );
};

export default EditProfil;