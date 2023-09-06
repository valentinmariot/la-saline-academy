import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Home = () => {
  const session = useSession();

  if (session.status === "authenticated") {
    return (
      <div className="dflexcolumn">
        <h3>Les Cours</h3>
        <Link href="/course" className="btn btn-purple-link hover-effect">
          Cours
        </Link>
        <h3>Profil</h3>
        <Link href="/profil" className="btn btn-purple-link hover-effect">
          profil
        </Link>
      </div>
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
