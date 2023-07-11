import React from "react";
import InputContainer from "../inputContainer/inputContainer";

type RegisterBasicProps = {
  onNext: () => void;
};

const RegisterBasic: React.FC<RegisterBasicProps> = ({ onNext }) => {
  return (
    <>
      <div>
        <h2>Bienvenue !</h2>
        <p>
          Avant de commencer à naviguer sur la plateforme, on a besoin d’un peu
          plus d’informations.
        </p>
        <p>
          Ce formulaire ne devrait pas prendre plus de 3 minutes à compléter
          alors c’est parti pour un onboarding rapide :
        </p>
      </div>
      <div>
        <InputContainer
          id="lastname"
          label="Nom"
          labelFor="lastname"
          placeholder="Votre nom"
          type="text"
          required
        />
        <InputContainer
          id="firstname"
          label="Prénom"
          labelFor="firstname"
          placeholder="Votre prénom"
          type="text"
          required
        />
        <InputContainer
          id="email"
          label="E-mail"
          labelFor="email"
          placeholder="votre@email.fr"
          type="email"
          required
        />
        <InputContainer
          id="password"
          label="Mot de passe"
          labelFor="password"
          placeholder="Votre mot de passe"
          type="password"
          required
        />
      </div>
      <button className="btn btn-purple-solid-intense" onClick={onNext}>
        Suite
      </button>
    </>
  );
};

export default RegisterBasic;
