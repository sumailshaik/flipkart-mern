import styled from "styled-components"
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 300px;
    width:200px;
    margin: 20px 0px;
    background-color:white;
    cursor: pointer;
    &:hover{
        transition: transform .2s ease-in-out; 
        transform: scale(1.05);
    }
`;

const Image = styled.img`
    height:200px;
    object-fit:cover;
`;
const Bottom = styled.div`
    margin-top: 10px;
    padding-left: 10px;
`;
const Title = styled.h5`
    color: gray;
`;
const Middle = styled.div`
    display:flex;
    align-items: center;
`;
const ShortDesc = styled.p``;
const AssuredImg = styled.img`
    height:15px;
`;
const PriceSection = styled.div`
    display:flex;
    align-items: center;
`;
const Price = styled.p`
    padding-right:10px;
`;
const OldPrice = styled.p`
    padding-right:10px;
    color: gray;
`;
const Percentage = styled.p``;

const Product = () => {
    return (
        <Link to="/product/productid" style = {{textDecoration:"none"}}>
            <Container>
                <Image src="https://rukminim1.flixcart.com/image/800/960/kl5hh8w0/shoe/l/5/y/9-ly5261-layasa-multicolor-original-imagycg7ysd8y4ss.jpeg?q=50" alt=""/>
                <Bottom>
                    <Title>Layasa</Title>
                    <Middle>
                        <ShortDesc>Running Shoes</ShortDesc>
                        <AssuredImg src="https://www.adgully.com/img/800/68264_fl.png.jpg"/>
                    </Middle>
                    <PriceSection>
                        <Price><strong>₹ 474</strong></Price>
                        <OldPrice><del>₹ 999</del></OldPrice>
                        <Percentage>52%off</Percentage>
                    </PriceSection>
                </Bottom>
            </Container>
        </Link>
    )
}

export default Product
