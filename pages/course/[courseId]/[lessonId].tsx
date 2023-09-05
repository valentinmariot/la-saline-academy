import Head from "next/head";
import Header from "@/components/header/header";
import MenuLateral from "@/components/menuLateral/menuLateral";
import styles from "@/components/menuLateral/menuLateral.module.scss";
import React, { useState, useEffect } from "react";
import BasicIcon from "@/components/basicIcon/basicIcon";
import useGetLessonById from "@/hooks/lesson/useGetLessonById";
import useGetCourseById from "@/hooks/course/useGetCourseById";
import Link from "next/link";
import { useRouter } from "next/router";
import { Course } from "@/types/coursesType";
import { Lesson } from "@/types/lessonType";

const Lesson = () => {
  const router = useRouter();
  const { lessonId } = router.query;
  const { courseId } = router.query;

  const [isMenuMoved, setMenuMoved] = useState(true);

  const handleBurgerMenuClick = () => {
    setMenuMoved(!isMenuMoved);
  };

  const lessonListing: {
    data: Lesson | null | undefined;
    error: unknown;
    isLoading: boolean;
    fetchData: (id: number) => Promise<void>;
  } = useGetLessonById();
  const [lesson, setLesson] = useState<Lesson | undefined>();

  useEffect(() => {
    lessonListing.fetchData(parseInt(lessonId as string));
  }, [lessonId]);

  useEffect(() => {
    if (lessonListing.data) {
      setLesson(lessonListing.data);
    }
  }, [lessonListing.data]);

  // Get les infos du cours lié à la leçon
  const useGetCourse = useGetCourseById();
  const [course, setCourse] = useState<Course | undefined>();
  useEffect(() => {
    useGetCourse.fetchData(parseInt(courseId as string));
    if (useGetCourse.data) {
      setCourse(useGetCourse.data);
    }
  }, [lesson?.course.id]);

  const handleNumberLesson = () => {
    if (course?.lesson) {
      for (let i = 0; i <= course?.lesson.length - 1; i++) {
        const idActualLesson = lesson?.id;
        if (idActualLesson == course?.lesson[i].id) {
          return i + 1;
        }
      }
    }
  };

  const handleGoNextLesson = (id: string) => {
    const idActualLesson = parseInt(id);
    if (course?.lesson) {
      for (let i = 0; i <= course?.lesson.length - 1; i++) {
        if (idActualLesson == course.lesson[i].id) {
          const idLessonToPush = course.lesson[i + 1].id;
          router.push(`/course/${courseId}/${idLessonToPush}`);
        }
      }
    }
  };

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
              <Link
                href={`/course/${lesson?.course.id}`}
                className="btn btn-purple-link hover-effect mr-auto"
              >
                <BasicIcon name="arrow-left" size="s" />
                <p>Retour au détails du cours</p>
              </Link>
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
                <button className="btn btn-purple-link hover-effect mr-auto">
                  <BasicIcon name="arrow-down" size="s" />
                  <p>Télécharger la partition</p>
                </button>
              </div>
              <div>{lesson?.content || ""}</div>
            </div>
            <div className="dflexcolumn">
              {handleNumberLesson() < course?.lesson.length ? (
                <button
                  onClick={() => handleGoNextLesson(lessonId as string)}
                  className="btn btn-purple-link hover-effect ml-auto"
                >
                  <p>Leçon suivante</p>
                  <BasicIcon name="arrow-right" size="s" />
                </button>
              ) : null}
              <div className="dflex ml-auto">
                <BasicIcon name="checklist-circle" size="s" />
                <p>
                  Leçon {handleNumberLesson()}/{course?.lesson.length} -{" "}
                  {lesson?.course.name || ""}
                </p>
              </div>
              <p className="ml-auto">- {lesson?.course.name || ""}</p>
              <p className="ml-auto">date </p>
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
