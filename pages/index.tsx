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
              <Link href="/" className={stylesLp.logo}>
                  <Image
                      src="/logo_saline-academy.svg"
                      alt="Logo de La Saline Academy"
                      width={155}
                      height={46}
                  />
              </Link>
              <nav className={stylesLp.nav}>
                <Link href="#formations" className="btn btn-gray-link">
                    Académie
                </Link>
                  <Link href="#offres" className="btn btn-gray-link">
                      Offres
                  </Link>
                  <Link href="#contact" className="btn btn-gray-link">
                      Contact
                  </Link>
              </nav>
              <div className="dflex nowrap gap32">
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
                      S'enregistrer
                  </Link>
              </div>
          </header>
          <div id="hero" className={stylesLp.hero + " gap32 "}>
            <h1 className="text_center">Libérez votre musique avec <br/>
                La Saline Academy</h1>
              <p className="gray">Découvrez, apprenez, jouez.</p>
          </div>
          <div className={stylesLp.main}>
              <div id="formations" className={stylesLp.block}>
                <div className="lp_container">
                    <div className={stylesLp.blockHead}>
                        <h2 className="text_center">Formations</h2>
                        <p className="text_center">Des cours à la hauteur de nos prestations pour toutes vos attentes</p>
                        <Link
                            href="/authentification/register"
                            className="btn btn-purple-solid-intense"
                        >
                            <BasicIcon name="thumbnail-view" />
                            Découvrir le catalogue
                        </Link>
                    </div>
                    <div>

                    </div>
                </div>
              </div>
              <div id="offres" className={stylesLp.block}>
                  <div className="lp_container">
                      <div className={stylesLp.blockHead}>
                          <h2 className="text_center">Commencer l’expérience</h2>
                          <p className="text_center">Choisissez parmi nos 3 offres disponibles</p>
                      </div>
                      <div className="grid3">
                          <div className="card_pack-lp">
                              <div>
                                  <h3 className="h4 card_pack--title">
                                      Pack <span className="purple">Freemium</span>
                                  </h3>
                                  <p>
                                      Ce pack permet d’accéder :
                                      <br/>• à une minorité des formations disponibles
                                  </p>
                              </div>
                              <div>
                                  <Link href="/authentification/register" id="choisir" className="btn btn-purple-solid">
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
                                      <br/>• au maximum des formations disponibles
                                      <br/>• quick note
                                  </p>
                              </div>
                              <div>
                                  <Link href="/authentification/register" id="choisir" className="btn btn-purple-solid">
                                      <BasicIcon name="circle-arrow-right" />
                                      Choisir
                                  </Link>
                              </div>
                          </div>
                          <div className="card_pack-lp">
                              <div>
                                  <h3 className="h4 card_pack--title">
                                      Pack <span className="purple">VIP</span>
                                  </h3>
                                  <p>
                                      Ce pack sera bientôt disponible
                                  </p>
                              </div>
                              <div>
                                  <Link href="/authentification/register" id="choisir" className="btn btn-purple-solid">
                                      <BasicIcon name="circle-arrow-right" />
                                      Choisir
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
                  <div>

                  </div>
              </div>
              <footer>

              </footer>
          </div>
      </div>
    );
  }
};

export default Home;
