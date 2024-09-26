import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import "./Signup.scss";
import { useSignup } from "./hooks/useSignup";

export const Signup = () => {
  const { onSubmit, handleChange, signup, loading } = useSignup();
  return (
    <div className="sign-up-main-container">
      <div className="sign-up-container">
        <h1 className="sign-up-header">
          SignUp to
          <span> Live Chat</span>
        </h1>

        <form
          className="flex column justify-center align-center g20"
          onSubmit={onSubmit}
        >
          <Input
            label="Enter User Name"
            name="username"
            onChange={handleChange}
            value={signup.username}
            type="username"
            required
          />
          <Input
            label="Enter Email"
            name="email"
            onChange={handleChange}
            value={signup.email}
            type="email"
            required
          />
          <Input
            label="Enter Password"
            name="password"
            onChange={handleChange}
            value={signup.password}
            type="password"
            required
          />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            value={signup.confirmPassword}
            type="password"
            required
          />
          <FormControl className="sign-up-gender-radio-container">
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="gender"
              value={signup.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
          <LoadingButton
            className="sign-up-submit-button"
            loading={loading}
            type="submit"
            variant="outlined"
          >
            Sign Up
          </LoadingButton>
        </form>
        <div className="sign-up-semi-text">
          <span>Already have an account? </span>
          <Link to={"/login"} className="sign-up-semi-text-link">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};
