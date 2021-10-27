import React from 'react'
import {AuthContainer, MainContainer, InputContainer, Input, ButtonContainer, Button, LoginWith, IconsContainer, Icon} from './style'
import { Logo } from '../../Layout/Header/style'
import ImgLogo from '../../../assets/Images/logo_trans.png'
import { Link } from "react-router-dom";


function Signup() {
    return (
        <AuthContainer>
        <MainContainer>
        <Link to="/">
            <Logo className="d-flex align-items-center justify-content-center mt-4"> 
              <img src={ImgLogo} alt="" width="50%"/> </Logo></Link>
        <InputContainer>
        <Input type="text" placeholder="Full Name" />
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
        </InputContainer>
        <ButtonContainer>
            <Link to="/">
          <Button>Signup</Button></Link>
        </ButtonContainer>
        <LoginWith>
            <Link to="/login">Login</Link></LoginWith>
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
      </AuthContainer>
    )
}

export default Signup
