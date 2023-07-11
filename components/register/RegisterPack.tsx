import React from "react";

type RegisterBasicProps = {
  onNext: () => void;
};

const RegisterPack: React.FC<RegisterBasicProps> = ({ onNext }) => {
  return (
    <>
      <h2>Choisisser votre pack</h2>
      <p>Il est venu le moment de choisir votre pack expérience</p>
      <div>
        <p>Pack Freemium</p>
        <p>Ce pack permet d&apos;accéder :</p>
        <ul>
          <li>à quelques formations gratuites</li>
        </ul>
        <button className="btn btn-purple-solid-intense" onClick={onNext}>
          Choisir
        </button>
      </div>
      <div>
        <p>Pack Premium</p>
        <p>Ce pack permet d&apos;accéder :</p>
        <ul>
          <li>à toutes les formations disponibles</li>
          <li>au quick-notes</li>
          <li>au forum</li>
        </ul>
        <button className="btn btn-purple-solid-intense" onClick={onNext}>
          Choisir
        </button>
      </div>
      <div>
        <p>Pack VIP</p>
        <p>Ce pack permet d&apos;accéder :</p>
        <ul>
          <li>à toutes nos features</li>
        </ul>
        <button className="btn btn-purple-solid-intense" onClick={onNext}>
          Choisir
        </button>
      </div>
    </>
  );
};

export default RegisterPack;
