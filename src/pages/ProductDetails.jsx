import { LocalOffer, Star } from "@material-ui/icons";
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import styled from "styled-components"

const Container = styled.div`
    display:flex;
    background-color:white;
`;

const Left = styled.div`
    flex: 1;
    height: 480px;
    padding: 20px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Right = styled.div`
    flex: 2;
    
`;

const Wrapper = styled.div`
    padding: 20px 20px;
`;

const Title = styled.span`
    color: #878787;
    font-size: 16px;
    display: block;
    font-weight: 500;
`;

const Desc = styled.p`
    font-size: 18px;
`;

const PriceSection = styled.div`
    display:flex;
    align-items: center;
    margin: 20px 0 10px 0px;
`;

const Price = styled.p`
    padding-right:10px;
    font-size: 28px;
`;

const OldPrice = styled.p`
    font-size: 16px;
    margin-left: 12px;
    color: #878787;
`;

const Percentage = styled.p`
    color: #26a541;
    margin-left: 12px;
    font-size: 16px;
    font-weight: 500;
`;

const RatingSection = styled.div`
    display:flex;
    align-items: center;
`;

const RatingTag = styled.div`
    display:flex;
    align-items: center;
    color:white;
    font-size: 16px;
    background-color: #26a541;
    width:55px;
    height:27px;
    justify-content:center;
    border-radius: 15px;
`;

const RatingReview = styled.p`
    font-weight: 500;
    color: #878787;
`;

const AssuredImg = styled.img`
    height:25px;
`;
const OfferTitle = styled.h4`
    margin: 10px 0;
`;
const OfferList = styled.ul``;
const Offer = styled.div`
    display:flex;
    align-items: center;
`;
const Text = styled.p`
    margin:5px 10px;
`;
const TC = styled.p``;

const Button = styled.button`
    height: 50px;
    background: #ff9f00;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 500;
    padding: 0px 40px;
    margin:30px 0px;
    display:flex;
    align-items:center;
    justify-content:center;
`;


const ProductDetails = () => {
    return (
        <Container>
            <Left>
                <Image src="https://rukminim1.flixcart.com/image/800/960/kingqkw0-0/shoe/6/0/t/11g-677-campus-blk-red-original-imafyejxfspqzq54.jpeg?q=50"/>
            </Left>
            <Right>
                <Wrapper>
                    <Title>CAMPUS</Title>
                    <Desc>NORTH PLUS Running Shoes For Men  (Black)</Desc>
                    <PriceSection>
                        <Price><strong>₹ 474</strong></Price>
                        <OldPrice><del>₹ 999</del></OldPrice>
                        <Percentage>52%off</Percentage>
                    </PriceSection>
                    <RatingSection>
                        <RatingTag>
                            <p style= { {bold: 700, paddingLeft:"5px"} }>4.2</p>
                            <Star htmlColor="white"/>
                        </RatingTag>
                        <RatingReview>17,211 ratings and 2,312 reviews</RatingReview>
                        <AssuredImg src="https://www.adgully.com/img/800/68264_fl.png.jpg"/>
                    </RatingSection>
                    <OfferTitle>Available offers</OfferTitle>
                    <OfferList>
                        <Offer>
                            <LocalOffer htmlColor="#26a541"/>
                            <Text><bold>Bank Offer</bold>5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Text>
                            <TC>T&C</TC>
                        </Offer>
                        <Offer>
                            <LocalOffer htmlColor="#26a541"/>
                            <Text><bold>Bank Offer</bold>15% Instant discount on first Pay Later order of ₹500 and above</Text>
                            <TC>T&C</TC>
                        </Offer>
                    </OfferList>
                    <Button><ShoppingCartRoundedIcon style={{ color: "white", paddingRight: "10px" }} />ADD TO CART</Button>
                </Wrapper>
            </Right>
        </Container>
    )
}

export default ProductDetails;
