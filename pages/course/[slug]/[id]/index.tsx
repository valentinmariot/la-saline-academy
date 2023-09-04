import Template from "../../../../components/template/template";
import styles from "../../../../styles/_pages/cours.module.scss";
import BasicIcon from "@/components/basicIcon/basicIcon";
import React from "react";
import clipboardCopy from "clipboard-copy";
import Tag from "@/components/tag/tag";
import Link from "next/link";

const Course = () => {
  const copyURLToClipboard = () => {
    clipboardCopy(window.location.href);
    alert("Le lien du cours a été copié dans le presse-papiers.");
  };

  const goBack = () => {
    window.history.back(); // Revenir à la page précédente
  };

  return (
    <Template title="Cours">
      <h1 className="sr-only">Prendre en main le solvège</h1>
      <div className={styles.page_cours + " dflexcolumn gap16 "}>
        <div className={styles.header_cours}>
          <div className={styles.title}>
            <div className="dflex wrap gap16">
              <div className="dflex gap8">
                <span className="btn btn-gray-link">
                  <BasicIcon name="checklist-circle" size="l" />
                </span>
                <h2 className="h3">Prendre en main le solvège</h2>
              </div>
              <button
                onClick={copyURLToClipboard}
                className="btn btn-purple-link hover-effect"
              >
                <BasicIcon name="forward" size="m" />
              </button>
            </div>
            <button
              onClick={goBack}
              className="btn btn-purple-link hover-effect"
            >
              Fermer
              <BasicIcon name="close-circle" size="m" />
            </button>
          </div>
          <b className="dflex gap8 nowrap">
            Par{" "}
            <Link href="" className="btn btn-purple-link hover-effect">
              Charles-Lucas Maxime
            </Link>
          </b>
          <div className={styles.infos}>
            <div id="nb_cours">6 leçons</div>
            <div id="language" className="italic">
              <BasicIcon name="chat-solo" size="s" />
              Français
            </div>
            <div id="time" className="italic">
              <BasicIcon name="history" size="s" />
              10h
            </div>
          </div>
          <div id="points" className={styles.points + " bold"}>
            <BasicIcon name="poin" size="m" />
            360pts
          </div>
          <div id="tag" className="section_tag">
            <Tag name="Solfège" href="" />
            <Tag name="Bases" href="" />
          </div>
        </div>
        <hr />
        <div className="grid2 gap16">
          <div className="gap16 dflexcolumn">
            <p className={styles.description}>
              Découvrez l'art de lire et comprendre la musique avec notre cours
              de solfège en six leçons. Du mystère des notes et des clés à
              l'interprétation des rythmes, des silences et des altérations,
              nous vous guidons à travers le labyrinthe du langage musical. Que
              vous soyez un musicien en herbe ou un virtuose en devenir, notre
              cours est conçu pour vous aider à déchiffrer les partitions et à
              enrichir votre expérience musicale. Rejoignez-nous et transformez
              les symboles et les signes sur le papier en mélodies et harmonies
              expressives.
            </p>
            <ul className={styles.listeLecons}>
              <li>
                <Link href="">
                  <BasicIcon
                    className="green"
                    name="checklist-circle"
                    size="s"
                  />
                  <p className="">Leçon 1: Introduction au solfège</p>
                  <span className={styles.duree}>(1h)</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <BasicIcon
                    className="green"
                    name="checklist-circle"
                    size="s"
                  />
                  <p className="">Leçon 2: Introduction au solfège</p>
                  <span className={styles.duree}>(1h)</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <BasicIcon
                    className="gray"
                    name="checklist-circle"
                    size="s"
                  />
                  <p className="">Leçon 3: Introduction au solfège</p>
                  <span className={styles.duree}>(1h)</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <BasicIcon
                    className="opacity0"
                    name="checklist-circle"
                    size="s"
                  />
                  <p className="">Leçon 4: Introduction au solfège</p>
                  <span className={styles.duree}>(1h)</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <BasicIcon
                    className="opacity0"
                    name="checklist-circle"
                    size="s"
                  />
                  <p className="">Leçon 5: Introduction au solfège</p>
                  <span className={styles.duree}>(1h)</span>
                </Link>
              </li>
              <li>
                <Link href="">
                  <BasicIcon
                    className="opacity0"
                    name="checklist-circle"
                    size="s"
                  />
                  <p className="">Leçon 6: Introduction au solfège</p>
                  <span className={styles.duree}>(1h)</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="quickNoteModale border">
            <h3 className="quickNoteModale--title">
              <BasicIcon name="edit" size="m" /> Quick note :
            </h3>
            <p>
              Ceci est le contenu de la note globale afin que l’utilisateur
              puisse noter des informations sur le cours qu’il a commencé à
              visionner
              <br />
              <br /> Astuces :
              <br />• faire ceci
              <br />• faire cela
            </p>
            <hr />
            <h4 className="h5">Leçon 1: Introduction au solfège</h4>
            <p>Ma superbe note liée à la leçon sur l’introduction au solfège</p>
            <hr />
            <h4 className="h5">Leçon 2: Introduction au solfège</h4>
            <p>Ma superbe note liée à la leçon sur l’introduction au solfège</p>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Course;
