import styled from 'styled-components';

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  /* padding-right: 40px; */
  li {
    padding-left:30px;
    font-size: large;
    font-weight: 500;
      &:hover {
    cursor: pointer;
    color: green;
    position: relative  ;
  }  

  }
  @media (max-width: 768px) {
    flex-flow: column;
    background-color: #0D2538;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    /* padding-top: 3.5rem; */
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`

export const Input= styled.input`
margin-right: 40px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
background-color: white;
border: 1px solid green;
&:hover {
  border: 2px solid green;
}
&::placeholder {
       color: green;
       padding-left: 10px;
   }
`