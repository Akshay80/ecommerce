import styled from "styled-components";

export const Container = styled.div`
width: 100%;


`
export const ContainerWrapper = styled.div`
background-color: lightgray;
`

export const ContactWrapper = styled.div`
padding-right: 20px;
display: flex;
flex-direction: column;
border-right: 1px solid gray;
`

export const FormWrapper = styled.div`
display: flex;
padding-left: 80px;
flex-direction: column;`


export const StyledButton = styled.button`
    background: white;
    border: 1px solid green; 
    color: green; 
    padding: 1em;
    height: 40px;
    text-transform: uppercase; 
    width: 20%;
    justify-content: center;
    display: flex;
    align-items: center;

    
    &:hover, &:focus {
        background: green;
        color: white; 
        outline: 0; 
    }
    `; 

export const Form = styled.form`
display: grid; 
grid-template-columns: 1fr 1fr; 
grid-gap: 20px; 
`;

export const Input = styled.input`
border: 1px solid green; 
padding: 1em; 
margin-top: 5px;
width: 100%; 
height: 40px;
`;

export const Label = styled.label`
    display: block; 
`; 

export const Textarea = styled.textarea`
border: 1px solid green; 
padding: 1em; 
margin-top: 5px;
width:  100%; 
`;

export const StyledTitle = styled.div`
color: #B8161F;
font: 70px; 
text-align: center; 
@media (min-width: 700px) {
    text-align: left; 
}
`; 