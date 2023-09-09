import { signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import InputContainer from "@/components/inputContainer/inputContainer";
import { useRouter } from "next/router";
import useGetAllUsers from "@/hooks/user/useGetAllUsers";
import styles from "@/styles/_pages/login.module.scss";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const user = useGetAllUsers();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    const res: any = await signIn("credentials", {
      redirect: false,
      email: userInfo.email,
      password: userInfo.password,
      callbackUrl: `${window.location.origin}`,
    });
    if (res.status === 200) {
      router.push("/");
    }
  };
  useEffect(() => {
    user.fetchData();
  }, []);

  const handleChangeEmail = (e: any) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };
  const handleChangePassword = (e: any) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  return (
    <>
      <Head>
        <title>Connection - La Saline Academy</title>
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
                <h1 className="h2">Se connecter</h1>
                <h2 className="h5">Ravis de vous revoir !</h2>
              </div>

              <InputContainer
                id="1"
                type="email"
                pattern=".+@globex\.com"
                label="E-mail"
                placeholder="Votre email"
                onChange={(e: any) => handleChangeEmail(e)}
              />
              <InputContainer
                id="2"
                type="password"
                label="Mot de passe"
                placeholder="Votre mot de passe"
                onChange={(e: any) => handleChangePassword(e)}
              />
              <button
                className="btn btn-purple-solid-intense"
                onClick={handleLogin}
              >
                Se connecter
              </button>
              <p className="text_center">
                Vous n’avez pas de compte ?{" "}
                <Link
                  href="/authentification/register"
                  className="btn-purple-link hover-effect"
                >
                  Inscrivez-vous !
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
export default Login;
