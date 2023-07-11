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
  const handleRegister = async (e: any) => {
    e.preventDefault();
    await register.fetchData(userData);
  };

  useEffect(() => {
    if (register.data) {
      console.log(register.data);
    } else if (register.error) {
      console.log(register.error);
    }
  }, [register.data, register.error]);
  return (
    <>
      <form>
        <input
          onChange={(e) =>
            setUserData({ ...userData, firstname: e.target.value })
          }
        />
        <input
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
        />
        <input
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <button onClick={handleRegister}>send</button>
      </form>
      <div>
        <div
          style={formStep === 0 ? { display: "block" } : { display: "none" }}
        >
          <RegisterBasic onNext={nextFormStep} />
        </div>
        <div
          style={formStep === 1 ? { display: "block" } : { display: "none" }}
        >
          <RegisterPack onNext={nextFormStep} />
        </div>
        <div
          style={formStep === 2 ? { display: "block" } : { display: "none" }}
        >
          <RegisterBank onNext={nextFormStep} />
        </div>
        <div
          style={formStep === 3 ? { display: "block" } : { display: "none" }}
        >
          <RegisterInstrument onNext={nextFormStep} />
        </div>
      </div>
    </>
  );
};

export default Register;
