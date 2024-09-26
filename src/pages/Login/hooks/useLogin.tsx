import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersServices } from "../../../services/users.services";
import { useAuthContext } from "../../../context/AuthContext";
import toast from "react-hot-toast";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setAuthUser } = useAuthContext();

  const handleChange = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = ev.target;
    setLogin((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setLoading(true);
    try {
      const user = await usersServices.login(login);
      localStorage.setItem("user", JSON.stringify(user));
      setAuthUser(user);
      navigate("/");
    } catch (err: any) {
      toast.error(err.response.data);
    } finally {
      setLoading(false);
    }
  };
  return { onSubmit, handleChange, login, loading };
};
