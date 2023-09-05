import Head from "next/head";
import Header from "@/components/header/header";
import MenuLateral from "@/components/menuLateral/menuLateral";
import styles from "@/components/menuLateral/menuLateral.module.scss";
import React, { useState, useEffect } from "react";
import BasicIcon from "@/components/basicIcon/basicIcon";
import useGetLessonById from "@/hooks/lesson/useGetLessonById";
import Link from "next/link";

interface Lesson {
  content: string;
  point: number;
  order: number;
  createdAt: Date | undefined;
  video: {
    link: string;
  };
  course: {
    name: string;
  };
}

const Lesson = () => {
  const [isMenuMoved, setMenuMoved] = useState(true);

  const handleBurgerMenuClick = () => {
    setMenuMoved(!isMenuMoved);
  };

  const lessonListing = useGetLessonById();
  const [lesson, setLesson] = useState<Lesson>();

  useEffect(() => {
    lessonListing.fetchData(1);
  }, []);

  useEffect(() => {
    if (lessonListing.data) {
      setLesson(lessonListing.data);
      console.log(lesson);
    }
  }, [lessonListing.data]);

  return (
    <>
      <Head>
        <title>Accueil - La Saline Academy</title>
      </Head>
      <Header onBurgerMenuClick={handleBurgerMenuClick} />
      <main>
        <MenuLateral isMenuMoved={isMenuMoved} />
        <div
          className={
            "container " +
            `${isMenuMoved ? styles.menuMoved : "smallContainer"}`
          }
        >
          <div className="grid2">
            <div className="dflexcolumn">
              <div className="btn btn-purple-link hover-effect mr-auto">
                <BasicIcon name="arrow-left" size="s" />
                <p>Retour au détails du cours</p>
              </div>
              <div>
                <iframe
                  width="960"
                  height="515"
                  src={lesson?.video.link}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="dflex">
                <div className="btn btn-purple-link hover-effect mr-auto">
                  <BasicIcon name="arrow-down" size="s" />
                  <p>Télécharger la partition</p>
                </div>
              </div>
              <div>{lesson?.content || ""}</div>
            </div>
            <div className="dflexcolumn">
              <div className="btn btn-purple-link hover-effect ml-auto">
                <p>Leçon suivante</p>
                <BasicIcon name="arrow-right" size="s" />
              </div>
              <div className="dflex ml-auto">
                <BasicIcon name="checklist-circle" size="s" />
                <p>Leçon 1/6 - {lesson?.course.name || ""}</p>
              </div>
              <p className="ml-auto">- {lesson?.course.name || ""}</p>
              <p className="ml-auto">{lesson?.createdAt}</p>
              <div className="dflex btn-purple-link hover-effect ml-auto">
                <BasicIcon name="reply" size="s" />
                <p>Partager</p>
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
                    Ma superbe note liée à la leçon sur l’introduction au
                    solfège
                  </p>
                </Link>

                <hr />

                <Link href="/" className="quickNoteModale--blockLecon">
                  <h4 className="quickNoteModale--blockLecon--titre">
                    Leçon 2: Introduction au solfège
                  </h4>
                  <p>
                    Ma superbe note liée à la leçon sur l’introduction au
                    solfège
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Lesson;
