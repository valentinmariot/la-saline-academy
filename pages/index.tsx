import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ListingCours from "@/components/cours/ListingCours";
import Template from "@/components/template/template";
import Tag from "@/components/tag/tag";
import stylesLp from "@/styles/_pages/lp.module.scss";
import Image from "next/image";
import BasicIcon from "@/components/basicIcon/basicIcon";

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
      <div className={stylesLp.lp}>
        <header className={stylesLp.header + " lp_container "}>
          <Link href="/" className={stylesLp.logo + " mr-auto "}>
            <Image
              src="/logo_saline-academy.svg"
              alt="Logo de La Saline Academy"
              width={155}
              height={46}
            />
          </Link>
          <nav className={stylesLp.nav}>
            <Link href="#formations" className="btn btn-gray-link">
              Formations
            </Link>
            <Link href="#offres" className="btn btn-gray-link">
              Offres
            </Link>
            <Link href="#contact" className="btn btn-gray-link">
              Contact
            </Link>
          </nav>
          <div className="dflex nowrap gap32 ml-auto">
            <Link
              href="/authentification/login"
              className="btn btn-gray-link hover-effect"
            >
              Connexion
            </Link>
            <Link
              href="/authentification/register"
              className="btn btn-purple-solid-intense"
            >
              Enregistrement
            </Link>
          </div>
        </header>
        <div id="hero" className={stylesLp.hero + " gap32 "}>
          <h1 className="text_center">
            Libérez votre musique avec <br />
            La Saline Academy
          </h1>
          <p className="gray">Découvrez, apprenez, jouez.</p>
        </div>
        <div className={stylesLp.main}>
          <div id="formations" className={stylesLp.block}>
            <div className="lp_container">
              <div className={stylesLp.blockHead}>
                <h2 className="text_center">Formations</h2>
                <p className="text_center">
                  Des cours à la hauteur de nos prestations pour toutes vos
                  attentes
                </p>
                <Link
                  href="/authentification/register"
                  className="btn btn-purple-solid-intense"
                >
                  <BasicIcon name="thumbnail-view" />
                  Découvrir le catalogue
                </Link>
              </div>
              <div className="dflexcolumn gap24">
                <div className="grid2 gap24">
                  <div className="card_pack-lp">
                    <div>
                      <h3 className="h4 card_pack--title">
                        Apprenez plus vite avec{" "}
                        <span className="purple">Quick Notes</span>
                      </h3>
                      <p>
                        La fonctionnalité qui vous permet de retenir l’essentiel
                        pour vous. Disponible sur toutes les leçons et cours.
                      </p>
                    </div>
                    <div className="ml-auto purple-icon">
                      <BasicIcon name="edit" size="4xl" />
                    </div>
                  </div>
                  <div className="card_pack-lp">
                    <div>
                      <h3 className="h4 card_pack--title">
                        Participer aux{" "}
                        <span className="purple">Challenges</span>
                      </h3>
                      <p>
                        Soyez le premier à réalisez les challenges hebdomadaire
                        pour gagner des points et des accès à des cours
                        exclusif.
                      </p>
                    </div>
                    <div className="ml-auto purple-icon">
                      <BasicIcon name="processed" size="4xl" />
                    </div>
                  </div>
                </div>
                <div id="bento" className="grid3 gap24">
                  <div className="card_pack-lp">
                    <div>
                      <h3 className="h4 card_pack--title">
                        Partager & Communiquer sur le{" "}
                        <span className="purple">Forum</span>
                      </h3>
                      <p>
                        Soyez le premier à réalisez les challenges hebdomadaire
                        pour gagner des points et des accès à des cours
                        exclusif.
                      </p>
                    </div>
                    <div className="ml-auto purple-icon">
                      <BasicIcon name="forward" size="4xl" />
                    </div>
                  </div>
                  <div className="card_pack-lp">
                    <div>
                      <h3 className="h4 card_pack--title">
                        Formations délivrer par des{" "}
                        <span className="purple">Professionnels</span>
                      </h3>
                      <p>
                        Soyez le premier à réalisez les challenges hebdomadaire
                        pour gagner des points et des accès à des cours
                        exclusif.
                      </p>
                    </div>
                    <div className="ml-auto purple-icon">
                      <BasicIcon name="badge" size="4xl" />
                    </div>
                  </div>
                  <div className="card_pack-lp">
                    <div>
                      <h3 className="h4 card_pack--title">
                        Suiver votre avancer{" "}
                        <span className="purple">Pas à Pas</span>
                      </h3>
                      <p>
                        Soyez le premier à réalisez les challenges hebdomadaire
                        pour gagner des points et des accès à des cours
                        exclusif.
                      </p>
                    </div>
                    <div className="ml-auto purple-icon">
                      <BasicIcon name="poin" size="4xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="offres" className={stylesLp.block}>
            <div className="lp_container">
              <div className={stylesLp.blockHead}>
                <h2 className="text_center">Commencer l’expérience</h2>
                <p className="text_center">
                  Choisissez parmi nos 2 offres disponibles
                </p>
              </div>
              <div className="grid3">
                <div className="card_pack-lp">
                  <div>
                    <h3 className="h4 card_pack--title">
                      Pack <span className="purple">Freemium</span>
                    </h3>
                    <p>
                      Ce pack permet d’accéder :
                      <br />• à une minorité des formations disponibles
                    </p>
                  </div>
                  <div>
                    <Link
                      href="/authentification/register"
                      id="choisir"
                      className="btn btn-purple-solid"
                    >
                      <BasicIcon name="circle-arrow-right" />
                      Choisir
                    </Link>
                  </div>
                </div>
                <div className="card_pack-lp">
                  <div>
                    <h3 className="h4 card_pack--title">
                      Pack <span className="purple">Premium</span>
                    </h3>
                    <p>
                      Ce pack permet d’accéder :
                      <br />• au maximum des formations disponibles
                      <br />• quick note
                    </p>
                  </div>
                  <div>
                    <Link
                      href="/authentification/register"
                      id="choisir"
                      className="btn btn-purple-solid"
                    >
                      <BasicIcon name="circle-arrow-right" />
                      Choisir
                    </Link>
                  </div>
                </div>
                <div className="card_pack-lp disabled">
                  <div>
                    <h3 className="h4 card_pack--title">
                      Pack <span className="purple">VIP</span>
                    </h3>
                    <p>Ce pack sera bientôt disponible</p>
                  </div>
                  <div>
                    <Link
                      href="/authentification/register"
                      id="choisir"
                      className="btn btn-purple-solid"
                    >
                      Arrive bientôt
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="contact" className={stylesLp.block}>
            <div className={stylesLp.blockHead}>
              <h2 className="text_center">La Saline Academy</h2>
              <p className="text_center">Une institue de prestige</p>
            </div>
            <div className="grid2 max-width-1100 gap32 p-l-24 p-r-24">
              <figure className="border-radius border">
                <img src="/about.webp" alt="About Saline Academy" />
              </figure>
              <div className="dflexcolumn">
                <h3 className="h4">Le projet Saline royale Academy</h3>
                <ul>
                  <li>
                    <b>
                      Créer le plus complet et le plus prestigieux catalogue{" "}
                    </b>
                    <b>
                      international de master class filmées de musique classique
                      et baroque.
                    </b>
                  </li>
                  <br />
                  <li>
                    Offrir une chance aux jeunes musiciens du monde entier de{" "}
                    <b>
                      réaliser leur rêve et d’ouvrir leur carrière à
                      l’international en suivant les enseignements des plus
                      grands Maîtres de musique
                    </b>{" "}
                    lors des&nbsp;<em>Saline royale Academy</em>&nbsp;à la
                    Saline royale d’Arc-et-Senans (France), et{" "}
                    <b>
                      en accédant 24H/24, sans contrainte ni limite, à
                      l’excellence de l’enseignement musical on-line
                    </b>
                    .
                  </li>
                  <br />
                  <li>
                    <b>
                      Sauvegarder, en haute définition, le patrimoine
                      exceptionnel que représentent la richesse et la diversité
                      des enseignements et des techniques des plus grands
                      Maîtres
                    </b>
                    , face à l’uniformisation des jeux et des styles.
                  </li>
                </ul>
                <p>
                  L’offre de services digitale est constituée d’un accès par
                  abonnement à des contenus exclusifs destinés aux étudiants,
                  professeurs et institutions musicales.
                </p>
              </div>
            </div>
          </div>
          <footer className={stylesLp.footer}>
            <Link href="/" className={stylesLp.logo + " mr-auto "}>
              <Image
                src="/logo_saline-academy.svg"
                alt="Logo de La Saline Academy"
                width={155}
                height={46}
              />
            </Link>
            <nav className="dflexcolumn">
              <Link href="/offres" className="hover-effect">
                Offres
              </Link>
              <Link href="/contact" className="hover-effect">
                Nous contacter
              </Link>
              <Link href="/mentions-legales" className="hover-effect">
                Mentions légales
              </Link>
              <Link href="/conditions_generales" className="hover-effect">
                Conditions générales
              </Link>
            </nav>
            <nav className="dflex gap24">
              {/*TODO: lien reseaux*/}
              <a href="#" className="hover-effect" target="_blank" rel="next">
                <BasicIcon name="tiktok" size="m" />
              </a>
              <a href="#" className="hover-effect" target="_blank" rel="next">
                <BasicIcon name="youtube" size="m" />
              </a>
              <a href="#" className="hover-effect" target="_blank" rel="next">
                <BasicIcon name="twitter" size="m" />
              </a>
              <a href="#" className="hover-effect" target="_blank" rel="next">
                <BasicIcon name="instagram" size="m" />
              </a>
            </nav>
          </footer>
        </div>
      </div>
    );
  }
};

export default Home;
