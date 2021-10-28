import React from "react";
import {
  LoginContainer,
  MainContainer,
  InputContainer,
  Input,
  ButtonContainer,
  Button,
  LoginWith,
  ForgotPassword,
} from "./style";
import { Logo } from "../../Layout/Header/style";
import ImgLogo from "../../../assets/images/logo_trans.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <LoginContainer>
      <MainContainer>
        <Link to="/">
          <Logo className="d-flex align-items-center justify-content-center mt-4">
            <img src={ImgLogo} alt="" width="50%" />{" "}
          </Logo>
        </Link>
        <InputContainer>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </InputContainer>
        <ButtonContainer>
          <Link to="/">
            <Button>Login</Button>
          </Link>
        </ButtonContainer>
        <ForgotPassword>
          <Link to="/forgot-password">Forgot Password?</Link>
        </ForgotPassword>
        <LoginWith className="mb-5">
          <Link to="/signup">Signup</Link>
        </LoginWith>
      </MainContainer>
    </LoginContainer>
  );
}

export default Login;
