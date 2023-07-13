import React, { useState } from "react";
import InputContainer from "@/components/inputContainer/inputContainer";
import { UserData } from "@/types/user";
import { Instrument } from "@/types/instrumentType";

type RegisterInstrumentProps = {
  onNext: (data: Partial<UserData>) => void;
  instrumentsData: Instrument[]; // Add this prop to receive the instrument data
};

const RegisterInstrument: React.FC<RegisterInstrumentProps> = ({
  onNext,
  instrumentsData,
}) => {
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const [searchResults, setSearchResults] = useState<Instrument[]>([]);
  const keywords =
    instrumentsData?.map((instrument: Instrument) => instrument.name) || [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase(); // Convert search value to lowercase

    setSelectedKeyword(e.target.value);
    const filteredResults = keywords.filter((instrument) =>
      instrument.toLowerCase().includes(searchValue)
    );
    const limitedResults = filteredResults.slice(0, 7); // Limit to 7 results
    setSearchResults(limitedResults);
  };

  const handleInstrumentClick = (instrumentId: number) => {
    setSelectedKeyword("");
    // Log the instrumentId or perform any other action with the instrument data
    onNext({ instrumentId });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission if needed
  };

  return (
    <>
      <h2>Quel instrument résonne en vous ?</h2>
      <p>
        Renseignez l&apos;instrument que vous pratiquez ou souhaitez maîtriser
        afin que nous puissions vous guider sur la voie de la réussite !
      </p>
      <div>
        <form id="searchbar" onSubmit={handleSubmit}>
          <InputContainer
            id="search"
            placeholder="Rechercher"
            label="Rechercher un instrument"
            labelFor="search"
            type="text"
            required
            value={selectedKeyword}
            onChange={handleInputChange}
          />
          <ul>
            {searchResults.map((result) => (
              <li
                key={result.id}
                onClick={() => handleInstrumentClick(result.id)}
              >
                {result.name}
              </li>
            ))}
          </ul>
          <button type="submit" className="btn btn-purple-solid-intense">
            C&apos;est parti !
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterInstrument;
