import React from "react";
import { Link } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import { Input } from "../../components/Input/Input";
import { useLogin } from "./hooks/useLogin";
import "./Login.scss";

export const Login = () => {
  const { onSubmit, handleChange, login, loading } = useLogin();
  return (
    <div className="login-main-container">
      <div className="login-container">
        <h1 className="login-header">
          Login to
          <span> Live Chat</span>
        </h1>

        <form
          className="flex column justify-center align-center g20"
          onSubmit={onSubmit}
        >
          <Input
            label="Enter Email"
            name="email"
            onChange={handleChange}
            value={login.email}
            type="email"
            required
          />
          <Input
            label="Enter Password"
            name="password"
            onChange={handleChange}
            value={login.password}
            type="password"
            required
          />
          <LoadingButton
            className="login-submit-button"
            loading={loading}
            type="submit"
            variant="outlined"
          >
            Login
          </LoadingButton>
        </form>
        <div className="login-semi-text">
          <span>Don't have an account? </span>
          <Link to={"/signup"} className="login-semi-text-link">
            Sing Up
          </Link>
        </div>
      </div>
    </div>
  );
};
