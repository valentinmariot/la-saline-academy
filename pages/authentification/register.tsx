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
  });
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = (data: Partial<UserData>) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      ...data,
    }));
    setFormStep((prevFormStep) => prevFormStep + 1);
  };
  const bankSubmit = () => {
    setFormStep((prevFormStep) => prevFormStep + 1);
  };

  useEffect(() => {
    if (register.data) {
      console.log(register.data);
    } else if (register.error) {
      console.log(register.error);
    }
  }, [register.data, register.error]);

  console.log(userData);

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
            <RegisterBank onNext={bankSubmit} userData={userData} />
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
