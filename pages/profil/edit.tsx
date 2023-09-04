import styles from "styles/_pages/profil.module.scss";
import Template from "@/components/template/template";
import BasicIcon from "../../components/basicIcon/basicIcon";
import InputContainer from "../../components/inputContainer/inputContainer";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import TagManager from "@/components/tagManager/tagManager";
import CardNote from "../../components/cardNote/cardNote";

const EditProfil = () => {
  // Todo : deconnetion
  const handleSignOut = () => {
    signOut();
  };

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId: React.SetStateAction<string>) => {
    setActiveTab(tabId);
  };

  const [showAllCardsNote, setShowAllCardsNote] = useState(false);

  //TODO : fetch Notes from data
  const cardsNote = [
    {
      title: "Prendre en main le solfège",
      desc: "Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège ",
      href: "cours/detail",
    },
  ];

  const visibleCardsNote = showAllCardsNote ? cardsNote : cardsNote.slice(0, 6);
  const handleToggleCardsNote = () => {
    setShowAllCardsNote(!showAllCardsNote);
  };
  return (
    <Template title="Paramètre profil">
      <div className={styles.page_editProfil}>
        <h1 className="sr-only">Modifier mon profil</h1>
        <div className={styles.tab_left}>
          <div>
            <button
              id="tab1"
              className={`button_profil ${
                activeTab === "tab1" ? "button_profil__active" : ""
              }`}
              onClick={() => handleTabClick("tab1")}
            >
              <BasicIcon name="profile" />
              Infos perso
            </button>
            <button
              id="tab2"
              className={`button_profil ${
                activeTab === "tab2" ? "button_profil__active" : ""
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              <BasicIcon name="edit" />
              Quick notes
            </button>
            <button
              id="tab3"
              className={`button_profil button_profil__destructive ${
                activeTab === "tab3" ? "button_profil__active" : ""
              }`}
              onClick={() => handleTabClick("tab3")}
            >
              <BasicIcon name="logout" />
              Déconnexion
            </button>
          </div>
        </div>
        <hr className={styles.hr_vertical + " hr_vertical"}></hr>

        <div className={styles.right}>
          {activeTab === "tab1" && (
            <form className={styles.param_page}>
              <div className={styles.param_title}>
                <BasicIcon name="profile" size="l" />
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

              <div className={styles.grid3 + " grid3 "}>
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

              <hr />

              <div className="dflexcolumn gap16">
                <h3 className="h4">Liste instruments</h3>
                <TagManager />
              </div>

              <hr />

              <div className="dflexcolumn gap16">
                <h3 className="h4">Changement de pack</h3>
                <div className="grid3 gap24"></div>
              </div>

              <hr />

              <button className="btn btn-purple-solid">
                Enregistrer les modifications
              </button>
            </form>
          )}

          {activeTab === "tab2" && (
            <div className={styles.param_page}>
              <div className={styles.param_page__header}>
                <div className={styles.param_title}>
                  <BasicIcon name="edit" size="l" />
                  <h2 className="h3">Quick notes</h2>
                </div>
                <div className="dflex gap16 wrap">
                  {/*Todo : exporter les notes*/}
                  <button className="btn btn-purple-link hover-effect">
                    <BasicIcon name="upload" size="s" />
                    Exporter
                  </button>
                  {/*Todo : supprimer les notes*/}
                  <button className="btn btn-red-link hover-effect hover-effect--red">
                    <BasicIcon name="delete" size="s" />
                    Supprimer
                  </button>
                  {/*Todo : select all notes*/}
                  <button className="btn btn-purple-link hover-effect">
                    <BasicIcon name="checklist-square" size="s" />
                    Tout sélectionner
                  </button>
                </div>
              </div>
              <div className={styles.listing_notes + " grid2"}>
                {visibleCardsNote.map((cardNote, index) => (
                  <CardNote
                    key={index}
                    title={cardNote.title}
                    desc={cardNote.desc}
                    href={cardNote.href}
                    checkBox
                  />
                ))}
              </div>
              <button
                className="btn btn-purple-link hover-effect ml-auto"
                onClick={handleToggleCardsNote}
              >
                {showAllCardsNote ? "Afficher moins" : "Afficher plus"}
                <BasicIcon
                  name={
                    showAllCardsNote ? "circle-arrow-up" : "circle-arrow-down"
                  }
                  size="s"
                />
              </button>
            </div>
          )}

          {activeTab === "tab3" && (
            <div className={styles.param_page}>
              <div className={styles.param_title}>
                <BasicIcon name="logout" size="l" />
                <h2 className="h3">Déconnexion</h2>
              </div>

              <p>Êtes-vous certain de vous déconnecter ?</p>

              <button onClick={handleSignOut} className="btn btn-red-solid">
                <BasicIcon name="logout" />
                Me déconnecter
              </button>
            </div>
          )}
        </div>
      </div>
    </Template>
  );
};

export default EditProfil;
