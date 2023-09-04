import React, {useEffect} from "react";
import { Instrument } from "@/types/instrumentType";
import useGetAllInstrument from "@/hooks/instrument/useGetAllInstrument";

type RegisterInstrumentProps = {
  onNext: (data: Partial<{ instrumentId: number }>) => void;
};

const RegisterInstrument: React.FC<RegisterInstrumentProps> = ({ onNext }) => {
  const instruments = useGetAllInstrument();

  const handleNext = (instruId: number) => {
    onNext({ instrumentId: instruId });
  };

  useEffect(() => {
    instruments.fetchData();
  }, []);

  if (instruments.data) {
    console.log(instruments.data);
  }

  // Group instruments by category
  const groupedInstruments: { [categoryId: number]: Instrument[] } = {};
  if (instruments.data) {
    instruments.data.forEach((instrument) => {
      const categoryId = instrument.category.id;
      if (!groupedInstruments[categoryId]) {
        groupedInstruments[categoryId] = [];
      }
      groupedInstruments[categoryId].push(instrument);
    });
  }

  return (
    <>
      <h2>Quel instrument résonne en vous ?</h2>
      <p>
        Renseignez l&apos;instrument que vous pratiquez ou souhaitez maîtriser
        afin que nous puissions vous guider sur la voie de la réussite !
      </p>
      <div>
        {Object.keys(groupedInstruments).map((categoryId) => (
            <div key={categoryId}>
              <h3>{instruments.data.find((instrument) => instrument.category.id === parseInt(categoryId, 10))?.category.name}</h3>
              {groupedInstruments[categoryId].map((instrument) => (
                  <button
                      key={instrument.id}
                      className="btn btn-purple-solid-intense"
                      onClick={() => handleNext(instrument.id)}
                  >
                    {instrument.name}
                  </button>
              ))}
            </div>
        ))}
      </div>
    </>
  );
};

export default RegisterInstrument;
