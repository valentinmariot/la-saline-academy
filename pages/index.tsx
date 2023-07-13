import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ListingCours from "@/components/cours/ListingCours";
import Template from "@/components/template/template";

const Home = () => {
  const session = useSession();

  if (session.status === "authenticated") {
    return (
      <Template title="Accueil">
        <ListingCours />
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
