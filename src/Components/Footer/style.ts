import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  box-shadow: 0px 1px 10px grey;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: black;
  margin-bottom: 10px;
  font-size: 16px;
  text-decoration: none;
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  color: #362f3b; 
  /* margin-top: 20px; */
  margin-bottom: 20px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 16px;
  color: black;
  text-align: justify;
`;