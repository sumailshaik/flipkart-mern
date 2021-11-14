import React, { useContext } from 'react'
import styled from 'styled-components'
import { gotoLogin } from '../context/Actions';
import { DataLayer } from '../context/Context';

const Container = styled.div`
    height: 530px;
    width: 680px;
    background-color:white;
    border-radius: 5px;
    display:flex;
`;

const Left = styled.div`
    width: 40%;
    height: 100%;
    background-color: #2874f0;
    color: white; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
`;

const Wrapper = styled.div`
`;

const Title = styled.h3`
    margin-left: 30px;
    font-size: 30px;
`;

const Desc = styled.p`
    margin-top: 20px;
    margin-left: 30px;
    padding-right: 60px;
    font-size: 20px;
    font-weight: 300;
`;

const Image = styled.img`
    height: 150px;
    width: 100%;
    object-fit: cover;
`;

const Right = styled.div`
    width: 60%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const Form = styled.form`
    margin: 70px 30px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height: 55%;

`;

const Input = styled.input`
    padding: 5px;
`;

const Terms = styled.p`
    color: #878787;
    font-size: 12px;
    font-weight: 400;
`;

const Span = styled.span`
    color: #2874f0;
    

`;

const Button = styled.button`
    height: 50px;
    background: ${props => props.white ? "white" : "#fb641b"};
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    border: none;
    color: ${props => props.white? "#2874f0" : "#fff"};
    font-size: 15px;
    font-weight: 500;
`;


const Signup = () => {
    const {dispatch} = useContext(DataLayer)
    return (
        <Container>
            <Left>
                <Wrapper>
                    <Title>Looks like you're new here!</Title>
                    <Desc>Sign up with your email to get started</Desc>
                </Wrapper>
                <Image src="https://cdn.grabon.in/gograbon/giftbycard/images/category/1532443115748/flipkart-gift-card.jpg"/>
            </Left>
            <Right>
                <Form>
                    <Input type="email" placeholder="Enter Email"/>
                    <Input type="password" placeholder="Enter Password"/>
                    <Input type="password" placeholder="Re-enter Password"/>
                    <Terms>By continuing, you agree to Flipkart's <Span>Terms of Use</Span> and <Span>Privacy Policy.</Span></Terms>
                    <Button>CONTINUE</Button>
                    <Button white onClick = {()=> dispatch(gotoLogin())}>Existing User? Log in</Button>
                </Form>
            </Right>
        </Container>
    )
}

export default Signup;
