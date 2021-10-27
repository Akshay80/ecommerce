import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 30px;
  background: #fff;
  border-top: 1px solid lightgray;
 
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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
  }
`;

export const Title = styled.p`
  font-size: 20px;
  color: #362f3b; 
  margin-bottom: 20px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 16px;
  color: black;
  text-align: justify;
`;