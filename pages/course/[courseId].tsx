import Template from "@/components/template/template";
import styles from "@/styles/_pages/cours.module.scss";
import BasicIcon from "@/components/basicIcon/basicIcon";
import clipboardCopy from "clipboard-copy";
import Tag from "@/components/tag/tag";
import Link from "next/link";
import { useRouter } from "next/router";
import useGetCourseById from "@/hooks/course/useGetCourseById";
import { useEffect, useState } from "react";
import { Course } from "@/types/coursesType";

const Course = () => {
  const router = useRouter();
  const { courseId } = router.query;
  let countPoints = 0;

  const copyURLToClipboard = () => {
    clipboardCopy(window.location.href);
    alert("Le lien du cours a été copié dans le presse-papiers.");
  };

  const goBack = () => {
    window.history.back();
  };

  const handlePointsCourse = (tabCourse: Course | undefined) => {
    if (tabCourse) {
      for (let i = 0; i < tabCourse.lesson.length; i++) {
        countPoints += tabCourse.lesson[i].points;
      }
      return countPoints;
    }
  };

  const oneCourse: {
    data: Course | null | undefined;
    error: unknown;
    isLoading: boolean;
    fetchData: (id: number) => Promise<void>;
  } = useGetCourseById();

  const [course, setCourse] = useState<Course>();

  useEffect(() => {
    oneCourse.fetchData(parseInt(courseId as string));
  }, [courseId]);

  useEffect(() => {
    if (oneCourse.data) {
      setCourse(oneCourse.data);
    }
  }, [oneCourse.data]);

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
                <h2 className="h3">{course?.name}</h2>
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
            <div id="nb_cours">{course?.lesson.length} leçons</div>
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
            {handlePointsCourse(course)}pts
          </div>
          <div id="tag" className="section_tag">
            <Tag name="Solfège" href="/" />
            <Tag name="Bases" href="/" />
          </div>
        </div>
        <hr />
        <div className="grid2 gap16">
          <div className="gap16 dflexcolumn">
            <p className={styles.description}>{course?.description}</p>
            <ul className={styles.listeLecons}>
              {course?.lesson.map((oneLesson, index) => (
                <li key={oneLesson.id}>
                  <Link href={`/course/${course?.id}/${oneLesson.id}`}>
                    <BasicIcon
                      className="green"
                      name="checklist-circle"
                      size="s"
                    />
                    <p className="">{index}: nom leçon</p>
                    <span className={styles.duree}>(1h)</span>
                  </Link>
                </li>
              ))}
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
