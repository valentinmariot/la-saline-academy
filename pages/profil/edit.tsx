import styles from "styles/_pages/profil.module.scss";
import Template from "@/components/template/template";

const EditProfil = () => {
  return (
    <Template title="Paramètre profil">
      <div className={styles.page_editProfil}>
        <h1 className="sr-only">Modifier mon profil</h1>

        <div></div>
        <div className="hr_vertical"></div>
        <div></div>
      </div>
    </Template>
  );
};

export default EditProfil;
