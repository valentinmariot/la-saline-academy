import React, { useState } from "react";
import InputContainer from "../inputContainer/inputContainer";
import { UserData } from "@/types/user";

type RegisterBasicProps = {
  onNext: (data: Partial<UserData>) => void;
};

const RegisterBasic: React.FC<RegisterBasicProps> = ({ onNext }) => {
  const [formValues, setFormValues] = useState<Partial<UserData>>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (fieldName: string, value: string) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [fieldName]: value,
    }));
  };

  const handleNext = () => {
    onNext(formValues);
  };

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
          value={formValues.lastname}
          onChange={(e) => handleInputChange("lastname", e.target.value)}
        />
        <InputContainer
          id="firstname"
          label="Prénom"
          labelFor="firstname"
          placeholder="Votre prénom"
          type="text"
          required
          value={formValues.firstname}
          onChange={(e) => handleInputChange("firstname", e.target.value)}
        />
        <InputContainer
          id="email"
          label="E-mail"
          labelFor="email"
          placeholder="votre@email.fr"
          type="email"
          required
          value={formValues.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        <InputContainer
          id="password"
          label="Mot de passe"
          labelFor="password"
          placeholder="Votre mot de passe"
          type="password"
          required
          value={formValues.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
        />
      </div>
      <button className="btn btn-purple-solid-intense" onClick={handleNext}>
        Suite
      </button>
    </>
  );
};

export default RegisterBasic;
