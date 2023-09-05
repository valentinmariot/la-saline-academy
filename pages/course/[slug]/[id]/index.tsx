import Template from "../../../../components/template/template";
import styles from "../../../../styles/_pages/cours.module.scss";
import BasicIcon from "@/components/basicIcon/basicIcon";
import clipboardCopy from "clipboard-copy";
import Tag from "@/components/tag/tag";
import Link from "next/link";

const Course = () => {
  const copyURLToClipboard = () => {
    clipboardCopy(window.location.href);
    alert("Le lien du cours a été copié dans le presse-papiers.");
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <Template title="Cours">
      <h1 className="sr-only">Prendre en main le solvège</h1>
      <div className={styles.page_cours + " dflexcolumn gap16 "}>
        <div className={styles.header_cours}>
          <figure className={styles.banniere}>
            <img
              src="https://sf1.diapasonmag.fr/wp-content/uploads/diapason/2021/10/les-musiciens-orchestre-doivent-ils-adopter-une-tenue-vestimentaire-plus-cool.jpg"
              alt=""
            />
          </figure>
          <div className={styles.title}>
            <div className="dflex wrap gap16">
              <div className={styles.title_left + " dflex gap8 "}>
                <BasicIcon
                  name="checklist-circle"
                  className="orange"
                  size="m"
                />
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
              className={
                styles.btnFermer + " btn btn-purple-link hover-effect "
              }
            >
              Fermer
              <BasicIcon name="close-circle" size="m" />
            </button>
          </div>
          <b className={styles.author + " dflex gap8 nowrap"}>
            Par{" "}
            <Link href="/profil" className="btn btn-purple-link hover-effect">
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
            <Tag name="Solfège" href="/" />
            <Tag name="Bases" href="/" />
          </div>
        </div>
        <hr />
        <div className="grid2 gap16">
          <div className="gap16 dflexcolumn">
            <p className={styles.description}>
              Découvrez art de lire et comprendre la musique avec notre cours de
              solfège en six leçons. Du mystère des notes et des clés à
              linterprétation des rythmes, des silences et des altérations, nous
              vous guidons à travers le labyrinthe du langage musical. Que vous
              soyez un musicien en herbe ou un virtuose en devenir, notre cours
              est conçu pour vous aider à déchiffrer les partitions et à
              enrichir votre expérience musicale. Rejoignez-nous et transformez
              les symboles et les signes sur le papier en mélodies et harmonies
              expressives.
            </p>
            <ul className={styles.listeLecons}>
              <li>
                <Link href="/">
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
                <Link href="/">
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
                <Link href="/">
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
                <Link href="/">
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
                <Link href="/">
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
                <Link href="/">
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

            <hr />

            <Link href="/" className="quickNoteModale--blockLecon">
              <h4 className="quickNoteModale--blockLecon--titre">
                Leçon 1: Introduction au solfège
              </h4>
              <p>
                Ma superbe note liée à la leçon sur l’introduction au solfège
              </p>
            </Link>

            <hr />

            <Link href="/" className="quickNoteModale--blockLecon">
              <h4 className="quickNoteModale--blockLecon--titre">
                Leçon 2: Introduction au solfège
              </h4>
              <p>
                Ma superbe note liée à la leçon sur l’introduction au solfège
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Course;
