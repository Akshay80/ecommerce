import React from 'react'
import {AuthContainer, MainContainer, InputContainer, Input, ButtonContainer, Button, SendOTP} from './style'
import { Logo } from '../../Layout/Header/style'
import ImgLogo from '../../../assets/Images/logo_trans.png'
import { Link } from "react-router-dom";

function ForgotPassword() {
    return (
        <AuthContainer>
        <MainContainer>
        <Link to="/">
            <Logo className="d-flex align-items-center justify-content-center mt-4"> 
              <img src={ImgLogo} alt="" width="50%"/> </Logo></Link>
        <InputContainer>
          <Input type="email" placeholder="Email" />
          <SendOTP>Send OTP</SendOTP>
          <Input type="text" placeholder="Type OTP" />
          <Input type="password" placeholder="New Password" />
          <Input type="password" placeholder="Confirm New Password" />
        </InputContainer>
        <ButtonContainer>
            <Link to="/login">
          <Button>Login</Button></Link>
        </ButtonContainer>
      </MainContainer>
      </AuthContainer>
    )
}

export default ForgotPassword
