import { signIn } from "next-auth/react";
import React, { useState } from "react";
import Head from "next/head";
import InputContainer from "@/components/inputContainer/inputContainer";
import { useRouter } from "next/router";
const Login = () => {
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
    console.log(res);
  };

  const handleChangeEmail = (e: any) => {
    setUserInfo({ ...userInfo, email: e.target.value });
    console.log(userInfo);
  };
  const handleChangePassword = (e: any) => {
    setUserInfo({ ...userInfo, password: e.target.value });
    console.log(userInfo);
  };

  return (
    <>
      <Head>
        <title>Accueil - La Saline Academy</title>
      </Head>
      <main>
        <div className="container">
          <form className="content border">
            <h1 className="h2">Se connecter</h1>
            <p>Ravis de vous revoir !</p>
            <InputContainer
              id="1"
              type="email"
              label="E-mail"
              placeholder="Votre email"
              onChange={(e: any) => handleChangeEmail(e)}
            />
            <InputContainer
              id="2"
              type="text"
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
          </form>
        </div>
      </main>
    </>
  );
};
export default Login;
