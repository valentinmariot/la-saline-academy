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

  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (fieldName: string, value: string) => {
    if (buttonClicked) {
      if (fieldName === "firstname" && value.trim() === "") {
        return "Veuillez entrer votre prénom.";
      }
      if (fieldName === "lastname" && value.trim() === "") {
        return "Veuillez entrer votre nom.";
      }
      if (fieldName === "email" && !isEmailValid(value)) {
        return "Veuillez entrer une adresse e-mail valide.";
      }
      if (fieldName === "password" && value.trim() === "") {
        return "Veuillez entrer un mot de passe.";
      }
    }
    return ""; // No validation error
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [fieldName]: value,
    }));
  };

  const handleNext = () => {
    setButtonClicked(true);
    if (isFormValid()) {
      const data: Partial<UserData> = {
        firstname: formValues.firstname,
        lastname: formValues.lastname,
        email: formValues.email,
        password: formValues.password,
      };
      onNext(data);
    }
  };

  const isFormValid = () => {
    const { firstname, lastname, email, password } = formValues;
    return (
        firstname.trim() !== "" &&
        lastname.trim() !== "" &&
        isEmailValid(email) &&
        password.trim() !== ""
    );
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
            error={validateField("lastname", formValues.lastname)}
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
            error={validateField("firstname", formValues.firstname)}
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
            error={validateField("email", formValues.email)}
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
            error={validateField("password", formValues.password)}
        />
      </div>
      <button className="btn btn-purple-solid-intense" onClick={handleNext}>
        Suite
      </button>
    </>
  );
};

export default RegisterBasic;
