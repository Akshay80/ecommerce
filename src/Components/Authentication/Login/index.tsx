import React from 'react'
import {LoginContainer, MainContainer, InputContainer, Input, ButtonContainer, Button, LoginWith, IconsContainer, Icon, ForgotPassword} from './style'
import { Logo } from '../../Layout/Header/style'
import ImgLogo from '../../../assets/Images/logo_trans.png'
import { Link } from "react-router-dom";


function Login() {
    return (
        <LoginContainer>
        <MainContainer>
        <Link to="/">
            <Logo className="d-flex align-items-center justify-content-center mt-4"> 
              <img src={ImgLogo} alt="" width="50%"/> </Logo></Link>
        <InputContainer>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </InputContainer>
        <ButtonContainer>
         <Link to="/">
          <Button>Login</Button></Link>
        </ButtonContainer>
        <ForgotPassword>Forgot Password ?</ForgotPassword>
        <LoginWith className="mb-5">
        <Link to="/signup">
          Or Signup</Link></LoginWith>
        {/* <IconsContainer>
          <Icon color={FacebookBackground}>
            <FaFacebookF />
          </Icon>
          <Icon color={InstagramBackground}>
            <FaInstagram />
          </Icon>
          <Icon color={TwitterBackground}>
            <FaTwitter />
          </Icon>
        </IconsContainer> */}
        
      </MainContainer>
      </LoginContainer>
    )
}

export default Login
