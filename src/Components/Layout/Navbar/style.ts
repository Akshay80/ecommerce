import styled from 'styled-components';

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  padding-right: 40px;
  li {
    padding-left:30px;
    font-size: large;
    font-weight: 700;
      &:hover {
    cursor: pointer;
    color: green;
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