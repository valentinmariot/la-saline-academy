import styles from "styles/_pages/profil.module.scss";
import Template from "@/components/template/template";
import BasicIcon from "../../components/basicIcon/basicIcon";
import InputContainer from "../../components/inputContainer/inputContainer";
import React from "react";
import Tag from "../../components/tag/tag";
import TagManager from "@/components/tagManager/tagManager";

const EditProfil = () => {
  return (
    <Template title="Paramètre profil">
      <div className={styles.page_editProfil}>
        <h1 className="sr-only">Modifier mon profil</h1>

        <div className={styles.tab_left}>
            <button className="button_profil">
                <BasicIcon name="profile"/>
                Infos perso
            </button>
            <button className="button_profil">
                <BasicIcon name="edit"/>
                Quick notes
            </button>
            <button className="button_profil button_profil__destructive">
                <BasicIcon name="logout"/>
                Déconnexion
            </button>
        </div>
        <hr className="hr_vertical"></hr>
        <div className={styles.right}>
            <form className={styles.param_page}>
                <div className={styles.param_title}>
                    <BasicIcon name="profile" size="l"/>
                    <h2 className="h3">Infos perso</h2>
                </div>

                <div className="dflex gap16">
                    <InputContainer
                        required
                        id="lastname"
                        type="text"
                        label="Nom"
                        placeholder="Votre nom"
                        onChange
                    />
                    <InputContainer
                        required
                        id="firstname"
                        type="text"
                        label="Prénom"
                        placeholder="Votre prénom"
                        onChange
                    />
                </div>

                <div className={styles.grid3 + ' grid3 '}>
                    <InputContainer
                        required
                        id="password"
                        type="password"
                        label="Mot de passe actuel"
                        placeholder="Votre mot de passe actuel"
                        onChange
                    />
                    <InputContainer
                        required
                        id="new-password"
                        type="password"
                        label="Nouveau mot de passe"
                        placeholder="Votre nouveau mot de passe"
                        onChange
                    />
                    <InputContainer
                        required
                        id="confirm-new-password"
                        type="password"
                        label="Confirmer mot de passe"
                        placeholder="Confirmer votre nouveau mot de passe"
                        onChange
                    />
                </div>

                <hr/>

                <div className="dflexcolumn gap16">
                    <h3 className="h4">Liste instruments</h3>
                    <TagManager />
                </div>

                <hr/>

                <div className="dflexcolumn gap16">
                    <h3 className="h4">Changement de pack</h3>
                    <div className="grid3 gap24">

                    </div>
                </div>

                <hr/>

                <button className="btn btn-purple-solid">
                    Enregistrer les modifications
                </button>
            </form>
        </div>
      </div>
    </Template>
  );
};

export default EditProfil;
