import React from "react";
import InputContainer from "@/components/inputContainer/inputContainer";
import Link from "next/link";

type RegisterBankProps = {
  onNext: () => void;
};

const RegisterBank: React.FC<RegisterBankProps> = ({ onNext }) => {
  const handleInputChange = (fieldName: string, value: string) => {
    // Implement your logic to handle input changes if necessary
    return fieldName + value;
  };

  return (
    <>
      <h2>Informations bancaires</h2>
      <p>Vous avez sélectionné l’offre premium à $8/mois</p>
      <p>
        Ce formulaire ne devrait pas prendre plus de 2 minutes à compléter alors
        c’est parti pour un onboarding rapide :
      </p>
      <div>
        <div>
          <InputContainer
            id="card-number"
            label="Numéro de carte bancaire"
            labelFor="card-number"
            placeholder="**** **** **** ****"
            type="number"
            required
            value={""} // Replace with the value from your state or leave it empty if not needed
            onChange={(e) => handleInputChange("card-number", e.target.value)}
          />
        </div>
        <div>
          <InputContainer
            id="card-owner"
            label="Nom du titulaire"
            labelFor="card-owner"
            placeholder="Votre nom"
            type="text"
            required
            value={""} // Replace with the value from your state or leave it empty if not needed
            onChange={(e) => handleInputChange("card-owner", e.target.value)}
          />
          <InputContainer
            id="card-expiration"
            label="Date expiration"
            labelFor="card-expiration"
            placeholder="--/--"
            type="number"
            required
            value={""} // Replace with the value from your state or leave it empty if not needed
            onChange={(e) =>
              handleInputChange("card-expiration", e.target.value)
            }
          />
          <InputContainer
            id="card-cvc"
            label="CVC"
            labelFor="card-cvc"
            placeholder="***"
            type="number"
            required
            value={""} // Replace with the value from your state or leave it empty if not needed
            onChange={(e) => handleInputChange("card-cvc", e.target.value)}
          />
        </div>
      </div>
      <button className="btn btn-purple-solid-intense" onClick={onNext}>
        Finaliser mon inscription
      </button>
      <p>
        Vos informations bancaire ne sont pas enregistrées par notre application
        et ne seront pas divulguées.
      </p>
      <p>
        Vous avez déjà un compte ?
        <Link href="/authentification/login" className="logo">
          Vous connecter
        </Link>
      </p>
    </>
  );
};

export default RegisterBank;
