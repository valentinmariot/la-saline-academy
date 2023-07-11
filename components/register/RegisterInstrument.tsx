import React from "react";
import InputContainer from "@/components/inputContainer/inputContainer";

type RegisterBasicProps = {
  onNext: () => void;
};

const RegisterInstrument: React.FC<RegisterBasicProps> = ({ onNext }) => {
  return (
    <>
      <h2>Quel instrument résonne en vous ?</h2>
      <p>
        Renseigner le ou les instruments que vous pratiquez ou souhaitez
        maitriser afin que nous puissions vous guider sur la voie de la réussite
        !
      </p>
      <form id="searchbar">
        <InputContainer
          id="search"
          placeholder="Rechercher"
          label="Rechercher un instrument"
          labelFor="search"
          type="text"
          required
        />
      </form>
      <button className="btn btn-purple-solid-intense" onClick={onNext}>
        C&apos;est parti !
      </button>
    </>
  );
};

export default RegisterInstrument;
