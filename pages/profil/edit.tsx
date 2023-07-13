import styles from "styles/_pages/profil.module.scss";
import Head from "next/head";
import Template from "@/components/template/template";

const EditProfil = () => {
  return (
      <Template title="Paramètre profil">
          <div className={styles.page_editProfil}>
              <h1 className="sr-only">Modifier mon profil</h1>

              <h3>edit</h3>
          </div>
      </Template>
  );
};

export default EditProfil;
