import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ListingCours from "@/components/cours/ListingCours";
import Template from "@/components/template/template";
import Tag from "@/components/tag/tag";

const Home = () => {
  const session = useSession();

  if (session.status === "authenticated") {
    return (
      <Template title="Accueil">
        <div className="section_tag">
          <Tag name="violon" href="" />
          <Tag name="guitare" href="" />
          <Tag name="zazz" href="" color="orange" />
        </div>
        <hr />
        <div className="section">
          <div className="head_cours dflex">
            <h4>
              Reprendre <span className="purple">vos cours</span>
            </h4>
            <a href="" className="btn btn-gray-link hover-effect">
              Voir tout
            </a>
          </div>
          <div className="grid_cours">
            <ListingCours slice={4} />
          </div>
        </div>
        <hr />
        <div className="section">
          <div className="head_cours dflex">
            <h4>
              Nos recommandations basé sur{" "}
              <span className="purple">vos préférences</span>
            </h4>
          </div>
          <div className="grid_cours">
            <ListingCours slice={4} />
          </div>
        </div>
        <hr />
        <div className="section">
          <div className="head_cours dflex">
            <h4>
              Mise en ligne <span className="purple">récemment</span>
            </h4>
          </div>
          <div className="grid_cours">
            <ListingCours slice={4} />
          </div>
        </div>
        <hr />
        <div className="section">
          <div className="head_cours dflex">
            <h4>
              Les plus <span className="purple">visionnées</span>
            </h4>
          </div>
          <div className="grid_cours">
            <ListingCours />
          </div>
        </div>
      </Template>
    );
  } else if (session.status === "unauthenticated") {
    return (
      <div className="dflexcolumn">
        <h1>Landing page</h1>
        <Link
          href="/authentification/login"
          className="btn btn-purple-link hover-effect"
        >
          Se connecter
        </Link>
        <Link
          href="/authentification/register"
          className="btn btn-purple-solid-intense"
        >
          Inscription
        </Link>
      </div>
    );
  }
};

export default Home;
