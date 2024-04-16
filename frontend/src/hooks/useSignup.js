import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function containsNumber(str) {
  for (let char of str) {
    if (!isNaN(parseInt(char))) {
      return true;
    }
  }
  return false;
}

function handleInputError({
  fullName,
  userName,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("please fill all field");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("password do not match");
    return false;
  }
  if (containsNumber(fullName)) {
    toast.error("Name contain number");
    return false;
  }
  if (fullName)
    if (password.length < 6) {
      toast.error("password must be at least 6 characters ");
      return false;
    }
  return true;
}
const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();
  const signup = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputError({
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
    });
    if (!success) {
      return;
    }
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};
export default useSignup;
