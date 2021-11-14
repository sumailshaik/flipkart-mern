import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    margin:20px;
`;

const Image = styled.img`
    cursor: pointer;
    transition: transform 100ms ease-in;
    &:hover{
        transform: scale(1.07);
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.p`
    font-weight: 599;
    padding-top: 13px;
`;

const Offer = styled.p`
    color:green;
    font-weight: 409;
    padding-top:6px;
`;

const SubTitle = styled.p`
    padding: 6px 0;
    color:gray;   
`;

function RowProduct({img, title, offer, subtitle}) {
     
    return (
        <Link to="/product/productid" style={{textDecoration: "none"}}>
            <Container>
                <Image src="https://rukminim1.flixcart.com/image/150/150/kcc9q4w0/headphone/4/n/y/235v2-fast-charging-boat-original-imafthhggkgu3nze.jpeg?q=70" alt=""/>
                <Info>
                    <Title>Cool Headphones</Title>
                    <Offer>Extra 5% off</Offer>
                    <SubTitle>Discover it now!</SubTitle>
                </Info>
            </Container>
        </Link>
    )
}

export default RowProduct;
