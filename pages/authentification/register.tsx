import useRegister from "@/hooks/authentification/useRegister";
import { useEffect, useState } from "react";
import { UserData } from "@/types/user";

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
    </>
  );
};

export default Register;
