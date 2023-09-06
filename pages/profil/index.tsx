"use client";
import BasicIcon from "@/components/basicIcon/basicIcon";
import styles from "styles/_pages/profil.module.scss";
import Tag from "@/components/tag/tag";
import Card from "@/components/card/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import Template from "@/components/template/template";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import useGetUserMe from "@/hooks/user/useGetUserMe";
import useGetUserById from "@/hooks/user/useGetUserById";

const Profil = () => {
  // Hooks API
  const getUser = useGetUserMe();
  const getUserById = useGetUserById();

  const session = useSession();
  const router = useRouter();

  const [showAllCardsNote, setShowAllCardsNote] = useState(false);
  const [userData, setUserData] = useState({
    id: "",
    firstname: "",
    lastname: "",
    userCourse: [
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
    ],
    pointCourse: "",
    instrument: []
  });

  useEffect(() => {
    getUser.fetchData();
  }, []);

  useEffect(() => {
    if (getUser.data) {
      setUserData({ ...userData, id: getUser.data.userId });
      getUserById.fetchData(userData.id);
    }
  }, [getUser.data]);

  useEffect(() => {
    if (getUserById.data) {
      console.log(getUserById.data);
      setUserData({
        ...userData,
        firstname: getUserById.data.firstname,
        lastname: getUserById.data.lastname,
        pointCourse: getUserById.data.points_courses,
        instrument: getUserById.data.instrument

      });
      console.log(userData.userCourse, "userCourse");
    }
  }, [getUserById.data]);

  // const visibleCardsNote = showAllCardsNote
  //   ? userData.userCourse
  //   : userData.userCourse.slice(0, 4);
  const handleToggleCardsNote = () => {
    setShowAllCardsNote(!showAllCardsNote);
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      getUser.fetchData();
    } else if (session.status === "unauthenticated") {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if (getUser.data) {
      console.log(getUser.data);
    } else {
      console.log(getUser.error);
    }
  }, [getUser.data]);

  return (
    <Template title="Profil">
      <div className={styles.page_profil}>
        <h1 className="sr-only">Mon profil</h1>

        <div className={styles.infos_profil + " dflexcolumn"}>
          <div className={styles.titre + " dflex w100"}>
            <h3>{userData.firstname + " " + userData.lastname}</h3>
            <Link
              href="profil/edit"
              className="btn btn-purple-link hover-effect"
            >
              Modifier profil
              <BasicIcon name="edit" size="s" />
            </Link>
          </div>
          <div className={styles.infos}>
            <div id="nb_cours">
              {userData.userCourse.length + " " + `cours`}
            </div>
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
            {userData.pointCourse} {userData.pointCourse > 1 ? "points" : "point"}
          </div>
          <div id="tag" className="section_tag">
            {userData.instrument.map((instruments, index) => (
              <Tag key={index} name={instruments.name} href="" />
            ))}

          </div>
        </div>
        <hr />
        <div className="section">
          <div className="head_cours dflex">
            <h4>
              Reprendre vos <span className="purple">cours</span>
            </h4>
            <a href="" className="btn btn-gray-link hover-effect">
              Voir tout
            </a>
          </div>
          <div className="grid_cours">
            {userData.userCourse.map((course, index) => (
              <Card
                key={index}
                author={userData.firstname}
                image=""
                time="30"
                point="230"
                language="Français"
                desc={course.desc}
                href="cours/detail"
                tagLink="#"
                isNew
                tagName="Violon"
                title={course.title}
              />
            ))}
          </div>
        </div>
        <hr />
        <div>
          <h4>
            <BasicIcon name="edit" size="m" /> Quick notes
          </h4>
          <div className={styles.listing_notes + " grid2"}>
            {/*{visibleCardsNote.map((cardNote, index) => (*/}
            {/*  <CardNote*/}
            {/*    key={index}*/}
            {/*    title={cardNote.title}*/}
            {/*    desc={cardNote.desc}*/}
            {/*    href={cardNote.href}*/}
            {/*  />*/}
            {/*))}*/}
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
    </Template>
  );
};

export default Profil;
