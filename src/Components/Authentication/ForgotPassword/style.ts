import styled from "styled-components";

export const AuthContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const MainContainer = styled.div`
 margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;

  /* @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  } */
`;

export const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
  margin-top: 20px;
`;

export const SendOTP = styled.p`
  color: red;
  cursor: pointer;
  border: 1px solid red;
  padding: 0.3rem 1rem;
  border-radius: 2rem;

`;

export const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWith = styled.p`
  cursor: pointer;
  color: blue;
  margin-bottom: 50px;
`;

export const ForgotPassword = styled.p`
  cursor: pointer;
  color: Blue;
`;

export const Input = styled.input`
margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 40px;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: 500;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: gray;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  background: linear-gradient(to right, green 0%, lightgreen 100%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 100%;
  /* height: 2rem; */
  padding: 0.5rem 1.5rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;