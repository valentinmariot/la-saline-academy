import useRegister from "@/hooks/authentification/useRegister";
import React, { useEffect, useState } from "react";
import { UserData } from "@/types/user";
import InputContainer from "@/components/inputContainer/inputContainer";
import Head from "next/head";
import styles from "@/styles/_pages/login.module.scss";
import Link from "next/link";
import Image from "next/image";

const Register = () => {
  const register = useRegister();
  const [userData, setUserData] = useState<UserData>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    roleId: 1,
    planId: 1,
  });

  const handleRegister = async (e: any) => {
    e.preventDefault();
    await register.fetchData(userData);
  };

  useEffect(() => {
    if (register.data) {
      console.log(register.data);
    } else if (register.error) {
      console.log(register.error);
    }
  }, [register.data, register.error]);
  return (
    <>
      <Head>
        <title>Inscription - La Saline Academy</title>
      </Head>
      <main className={styles.login_page}>
        <div className={styles.login_page_container}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo_saline-academy.svg"
              alt="Logo de La Saline Academy"
              width={155}
              height={46}
            />
          </Link>
          <div className="modalLogin border">
            <form className="modalLogin_container">
              <div className="modalLogin--head">
                <h1 className="h2">Bienvenue !</h1>
                <h2 className="h5">
                  Avant de commencer à naviguer sur la plateforme, on a besoin
                  d’un peu plus d’informations.
                </h2>
                <h3 className="h5">
                  Ce formulaire ne devrait pas prendre plus de 3 minutes à
                  compléter alors c’est parti pour un onboarding rapide :
                </h3>
              </div>

              <div className="grid2">
                <InputContainer
                  required
                  id="lastname"
                  type="text"
                  label="Nom"
                  placeholder="Votre nom"
                  onChange={(e) =>
                    setUserData({ ...userData, lastname: e.target.value })
                  }
                />
                <InputContainer
                  required
                  id="firstname"
                  type="text"
                  label="Prénom"
                  placeholder="Votre prénom"
                  onChange={(e) =>
                    setUserData({ ...userData, firstname: e.target.value })
                  }
                />
              </div>

              <div className="grid2">
                <InputContainer
                  required
                  id="email"
                  type="email"
                  pattern=".+@globex\.com"
                  label="E-mail"
                  placeholder="Votre email"
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
                <InputContainer
                  required
                  id="password"
                  type="password"
                  label="Mot de passe"
                  placeholder="Votre mot de passe"
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
              </div>

              <button
                onClick={handleRegister}
                className="btn btn-purple-solid-intense"
              >
                Inscription
              </button>

              <p className="text_center">
                Votre adresse e-mail ne sera utilisée pour rien d’autre, promis
                !
              </p>

              <p className="text_center">
                Vous avez déjà un compte ?{" "}
                <Link
                  href="/authentification/login"
                  className="btn-purple-link hover-effect"
                >
                  Connectez-vous !
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
