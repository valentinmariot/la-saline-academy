// Register component
import useRegister from "@/hooks/authentification/useRegister";
import { useEffect, useState } from "react";
import { UserData } from "@/types/user";
import RegisterBasic from "@/components/register/RegisterBasic";
import RegisterPack from "@/components/register/RegisterPack";
import RegisterBank from "@/components/register/RegisterBank";
import RegisterInstrument from "@/components/register/RegisterInstrument";

const Register = () => {
  const register = useRegister();
  const [userData, setUserData] = useState<UserData>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    roleId: 1,
    planId: 1,
    instrumentId: undefined,
  });
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = (data: Partial<UserData>) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      ...data,
    }));
    setFormStep((prevFormStep) => prevFormStep + 1);
  };

  useEffect(() => {
    const createUser = async () => {
      try {
        await register.fetchData(userData);
        // Handle successful user creation
        console.log("User created successfully!");
      } catch (error) {
        // Handle error during user creation
        console.error("Error creating user:", error);
      }
    };

    if (formStep === 3 || (formStep === 2 && userData.planId === 1)) {
      createUser();
    }
  }, [formStep, register, userData]);

  return (
    <>
      <div>
        {formStep === 0 && (
          <div>
            <RegisterBasic onNext={nextFormStep} />
          </div>
        )}
        {formStep === 1 && (
          <div>
            <RegisterPack onNext={nextFormStep} />
          </div>
        )}
        {formStep === 2 && userData.planId !== 1 && (
          <div>
            <RegisterBank onNext={nextFormStep} userData={userData} />
          </div>
        )}
        {formStep === 3 ||
          (formStep === 2 && userData.planId === 1 && (
            <div>
              <RegisterInstrument onNext={nextFormStep} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Register;
