import React, { useState } from "react";
import InputContainer from "@/components/inputContainer/inputContainer";
import { UserData } from "@/types/user";

type RegisterInstrumentProps = {
  onNext: (data: Partial<UserData>) => void;
};

const RegisterInstrument: React.FC<RegisterInstrumentProps> = ({ onNext }) => {
  const [instrument, setInstrument] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInstrument(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNext({ instrument });
  };

  return (
    <>
      <h2>Quel instrument résonne en vous ?</h2>
      <p>
        Renseignez l&apos;instrument que vous pratiquez ou souhaitez maîtriser
        afin que nous puissions vous guider sur la voie de la réussite !
      </p>
      <form id="searchbar" onSubmit={handleSubmit}>
        <InputContainer
          id="search"
          placeholder="Rechercher"
          label="Rechercher un instrument"
          labelFor="search"
          type="text"
          required
          value={instrument}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-purple-solid-intense">
          C&apos;est parti !
        </button>
      </form>
    </>
  );
};

export default RegisterInstrument;
