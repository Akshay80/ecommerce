import React from 'react'
import styled from 'styled-components'
import { Container } from '../../Components/Footer/style'
import { css } from 'styled-components'
import {ContainerWrapper, ContactWrapper, FormWrapper, Input, Label, Form,  Textarea, StyledButton } from './style'


const WrapperGrid = styled.div`
    ${props => props && css`
        grid-column: 1 / 3;
    `}
`;


function Contact() {
    return (
        <Container>
            <ContainerWrapper className="row d-md-flex mb-5">
                <ContactWrapper className="col-3">
                        <h1>Contact Us</h1>
                        <p>Address: A-4, Sahastradhara Rd, Doon IT Park, Danda Lakhond, Dehradun, Uttarakhand 248001</p>
                        <p>Contact Number   : 0135-2608366</p>
                        <p>Email : info@cynoteck.com</p>
                </ContactWrapper>

                <FormWrapper className="col-9">
                <div>
        <h3>Have any Querry? Send us an Email.</h3>
        <Form>
            <WrapperGrid>
                <Label>Name</Label>
                <Input type="text" name="name" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Email Address</Label>
                <Input type="email" name="email" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Phone Number</Label>
                <Input type="text" name="phone" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Message</Label>
                <Textarea name="message"></Textarea>
            </WrapperGrid>
            <WrapperGrid className="d-flex  justify-content-center">
                <StyledButton>Submit</StyledButton>
            </WrapperGrid>
        </Form>
    </div>
                </FormWrapper>
            </ContainerWrapper>
        </Container>
    )
}

export default Contact
