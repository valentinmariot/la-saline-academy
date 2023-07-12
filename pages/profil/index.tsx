import Head from "next/head";
import BasicIcon from "@/components/basicIcon/basicIcon";
import styles from "styles/_pages/profil.module.scss";
import Tag from "@/components/tag/tag";
import Card from "@/components/card/card";
import Link from "next/link";
import CardNote from "@/components/cardNote/cardNote";
import { useState } from "react";

const Profil = () => {
  const [showAllCardsNote, setShowAllCardsNote] = useState(false);

  //TODO : fetch Notes from data
  const cardsNote = [
    {
      title: "Prendre en main le solfège",
      desc: "Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège ",
      href: "cours/detail",
    },
    {
      title: "Prendre en main le solfège",
      desc: "Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège ",
      href: "cours/detail",
    },
    {
      title: "Prendre en main le solfège",
      desc: "Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège ",
      href: "cours/detail",
    },
    {
      title: "Prendre en main le solfège",
      desc: "Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège ",
      href: "cours/detail",
    },
    {
      title: "Prendre en main le solfège",
      desc: "Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège ",
      href: "cours/detail",
    },
    {
      title: "Prendre en main le solfège",
      desc: "Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège ",
      href: "cours/detail",
    },
    {
      title: "Prendre en main le solfège",
      desc: "Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège ",
      href: "cours/detail",
    },
    {
      title: "Prendre en main le solfège",
      desc: "Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège ",
      href: "cours/detail",
    },
    {
      title: "Prendre en main le solfège",
      desc: "Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège ",
      href: "cours/detail",
    },
    {
      title: "Prendre en main le solfège",
      desc: "Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège Ma superbe note liée à la leçon sur l’introduction au solfège ",
      href: "cours/detail",
    },
  ];

  const visibleCardsNote = showAllCardsNote ? cardsNote : cardsNote.slice(0, 4);
  const handleToggleCardsNote = () => {
    setShowAllCardsNote(!showAllCardsNote);
  };

  return (
    <div className={styles.page_profil}>
      <Head>
        <title>Mon profil - La Saline Academy</title>
      </Head>
      <h1 className="sr-only">Mon profil</h1>

      <div className={styles.infos_profil + " dflexcolumn"}>
        <div className={styles.titre + " dflex w100"}>
          <h3>Charles-Lucas Maxime</h3>
          <Link href="profil/edit" className="btn btn-purple-link hover-effect">
            Modifier profil
            <BasicIcon name="edit" size="s" />
          </Link>
        </div>
        <div className={styles.infos}>
          <div id="nb_cours">4 cours</div>
          <div id="type_user" className="italic">
            <BasicIcon name="profile" size="s" />
            Professeur
          </div>
          <div id="time" className="italic">
            <BasicIcon name="history" size="s" />
            10h
          </div>
        </div>
        <div id="points" className={styles.points + " bold"}>
          <BasicIcon name="poin" size="m" />
          7890pts
        </div>
        <div id="tag" className={styles.tags}>
          <Tag name="violon" href="" />
          <Tag name="guitare" href="" />
          <Tag name="zazz" href="" color="orange" />
        </div>
      </div>
      <hr />
      <div>
        <div className={styles.head_cours + " dflex"}>
          <h4>
            Reprendre vos <span className="purple">cours</span>
          </h4>
          <a href="" className="btn btn-gray-link hover-effect">
            Voir tout
          </a>
        </div>
        <div className="grid4">
          <Card
            author="Charles-Lucas Maxime"
            image=""
            time="30"
            point="230"
            language="Français"
            desc="Découvrez l'art de lire et comprendre la musique avec notre cours de solfège en six leçons. Du mystère des notes et des clés à l'interprétation des rythmes, des silences et des altérations, nous vous guidons à travers le labyrinthe du langage musical. Que vous soyez un musicien en herbe ou un virtuose en devenir, notre cours est conçu pour vous aider à déchiffrer les partitions et à enrichir votre expérience musicale. Rejoignez-nous et transformez les symboles et les signes sur le papier en mélodies et harmonies expressives."
            href="cours/detail"
            tagLink="#"
            isNew
            tagName="Violon"
            title="Prendre en main le solfège"
          />
          <Card
            author="Charles-Lucas Maxime"
            image=""
            time="30"
            point="230"
            language="Français"
            desc="Découvrez l'art de lire et comprendre la musique avec notre cours de solfège en six leçons. Du mystère des notes et des clés à l'interprétation des rythmes, des silences et des altérations, nous vous guidons à travers le labyrinthe du langage musical. Que vous soyez un musicien en herbe ou un virtuose en devenir, notre cours est conçu pour vous aider à déchiffrer les partitions et à enrichir votre expérience musicale. Rejoignez-nous et transformez les symboles et les signes sur le papier en mélodies et harmonies expressives."
            href="cours/detail"
            tagLink="#"
            title="Prendre en main le solfège"
          />
          <Card
            author="Charles-Lucas Maxime"
            time="30"
            image=""
            point="230"
            language="Français"
            desc="Découvrez l'art de lire et comprendre la musique avec notre cours de solfège en six leçons. Du mystère des notes et des clés à l'interprétation des rythmes, des silences et des altérations, nous vous guidons à travers le labyrinthe du langage musical. Que vous soyez un musicien en herbe ou un virtuose en devenir, notre cours est conçu pour vous aider à déchiffrer les partitions et à enrichir votre expérience musicale. Rejoignez-nous et transformez les symboles et les signes sur le papier en mélodies et harmonies expressives."
            href="cours/detail"
            tagLink="#"
            title="Prendre en main le solfège"
          />
          <Card
            author="Charles-Lucas Maxime"
            time="30"
            image=""
            point="230"
            language="Français"
            desc="Découvrez l'art de lire et comprendre la musique avec notre cours de solfège en six leçons. Du mystère des notes et des clés à l'interprétation des rythmes, des silences et des altérations, nous vous guidons à travers le labyrinthe du langage musical. Que vous soyez un musicien en herbe ou un virtuose en devenir, notre cours est conçu pour vous aider à déchiffrer les partitions et à enrichir votre expérience musicale. Rejoignez-nous et transformez les symboles et les signes sur le papier en mélodies et harmonies expressives."
            href="cours/detail"
            tagLink="#"
            title="Prendre en main le solfège"
          />
        </div>
      </div>
      <hr />
      <div>
        <h4>
          <BasicIcon name="edit" size="m" /> Quick notes
        </h4>
        <div className={styles.listing_notes + " grid2"}>
          {visibleCardsNote.map((cardNote, index) => (
            <CardNote
              key={index}
              title={cardNote.title}
              desc={cardNote.desc}
              href={cardNote.href}
            />
          ))}
        </div>
        <button
          className="btn btn-purple-link hover-effect ml-auto"
          onClick={handleToggleCardsNote}
        >
          {showAllCardsNote ? "Afficher moins" : "Afficher plus"}
          <BasicIcon
            name={showAllCardsNote ? "circle-arrow-up" : "circle-arrow-down"}
            size="s"
          />
        </button>
      </div>
    </div>
  );
};

export default Profil;
