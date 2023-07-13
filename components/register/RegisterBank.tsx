import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import CheckoutForm from "@/components/register/CheckoutForm";
import { UserData } from "@/types/user";

type RegisterBankProps = {
  onNext: () => void;
  userData: UserData;
};

const RegisterBank: React.FC<RegisterBankProps> = ({ onNext, userData }) => {
  const stripePromise: Stripe = loadStripe(
    "pk_live_51NSgeDCBW2HkdWiRIq9GzCx9Wku9fERuShbJ74p5uRo5NmtRlxvBID1RkwZ9k6B4MbTazAZCRlBlzsIm2eRK0JDO00rqcOW4ka"
  );

  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    const fetchClientSecret = async () => {
      let response;
      try {
        if (userData.planId === 2) {
          response = await fetch(
            "https://groupe5.hetic-projects.arcplex.tech/stripe/premium"
          );
        } else if (userData.planId === 3) {
          response = await fetch(
            "https://groupe5.hetic-projects.arcplex.tech/stripe/vip"
          );
        }
        if (response.ok) {
          const data = await response.json();
          const { client_secret } = data;
          setClientSecret(client_secret);
        } else {
          throw new Error("Failed to fetch client secret");
        }
      } catch (error) {
        console.error(error);
        // Handle error case
      }
    };

    fetchClientSecret();
  }, []);

  // Render loading state while fetching client secret
  if (clientSecret === null) {
    return <div>Loading...</div>;
  }

  // Render your component with the obtained client secret
  const options = {
    clientSecret: clientSecret,
  };

  // Determine the display value based on the planId
  let displayValue = "$13";
  if (userData.planId === 2) {
    displayValue = "$13";
  } else if (userData.planId === 3) {
    displayValue = "$17";
  }

  return (
    <>
      <h2>Informations bancaires</h2>
      <p>Vous avez sélectionné l’offre premium à {displayValue}/mois</p>
      <p>
        Ce formulaire ne devrait pas prendre plus de 2 minutes à compléter alors
        c’est parti pour un onboarding rapide :
      </p>
      <div>
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
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
