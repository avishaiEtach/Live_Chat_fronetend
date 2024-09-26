import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersServices } from "../../../services/users.services";
import { useAuthContext } from "../../../context/AuthContext";
import toast from "react-hot-toast";

interface Signup {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: "male" | "female";
}

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [signup, setSignUp] = useState<Signup>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "male",
  });
  const navigate = useNavigate();
  const { setAuthUser } = useAuthContext();

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = ev.target;
    setSignUp((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleInputErrors = () => {
    const { password, confirmPassword } = signup;
    if (password !== confirmPassword) {
      toast.error("Password do not match");
      return true;
    }

    return false;
  };

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (handleInputErrors()) {
      return;
    }
    setLoading(true);
    try {
      const user = await usersServices.signup(signup);
      localStorage.setItem("user", JSON.stringify(user));
      setAuthUser(user);
      navigate("/");
    } catch (err: any) {
      toast.error(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  return { onSubmit, handleChange, signup, loading };
};
