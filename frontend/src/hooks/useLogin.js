import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function handleInputError({ username, password }) {
  if (!username || !password) {
    toast.error("please fill all field");
    return false;
  }
  return true;
}

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    const success = handleInputError({
      username,
      password,
    });
    if (!success) {
      return;
    }
    setLoading(true); // Set loading state before the async operation starts
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
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
      setLoading(false); // Set loading state after the async operation completes
    }
  };

  return { loading, login };
};

export default useLogin;
