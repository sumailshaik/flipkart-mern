import styled from "styled-components";
import { Add, Remove} from "@material-ui/icons";

const Container = styled.div`
    padding: 20px
`;
const Wrapper = styled.div`
    display:flex;
    border-bottom: 1px solid #f0f0f0;;
`;
const Left = styled.div`
    margin-right: 30px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
`;
const Image = styled.img`
    height: 100px;
    object-fit: cover;
`;
const Options = styled.div`
    margin: 20px 0px;
    display:flex;
    align-items: center;
`;
const Option = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    border: 1px solid #c2c2c2;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 2px;
`;

const Rect = styled.div`
    width: 40px;
    height: 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 2px;
    margin: 0px 5px;
    border: 1px solid #c2c2c2;
`;

const Count = styled.p``;

const Right = styled.div``;
const Title = styled.p``;
const Desc = styled.p`
    color: #878787;
    font-size: 14px;
`;
const Section = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    display:flex;
    align-items: center;
`;
const Seller = styled.p`
    margin-right: 10px;
    color: #878787;
    font-size: 14px;
`;
const AssuredImg = styled.img`
    height: 20px;
`;
const Price = styled.div`
    display:flex;
    align-items: center;
`;
const Real = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #212121;
    margin-right: 8px;
`;
const Discount = styled.p`
    color: #878787;
    font-size: 14px;
`;
const RemoveBtn = styled.div`
    margin:15px 0px;
    font-size: 16px;
    font-weight: 500;
`;


const CartItem = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Image src="https://rukminim1.flixcart.com/image/224/224/kulk9zk0/mobile/a/y/r/s7plus-iairfps7plus-iair-original-imag7zrhuz2zdgcg.jpeg?q=90"/>
                    <Options>
                        <Option>
                            <Count>-</Count>
                        </Option>
                        <Rect>
                            <Count>1</Count>
                        </Rect>
                        <Option>
                            <Count>+</Count>
                        </Option>
                </Options>
                </Left>
                <Right>
                    <Title>IAIR Basic Feature Dual Sim Mobile Phone with 2800mA</Title>
                    <Desc>Aqua Green Twin Shade</Desc>
                    <Section>
                        <Seller>Seller:IAir Technologies</Seller>
                        <AssuredImg src="https://www.adgully.com/img/800/68264_fl.png.jpg"/>
                    </Section>
                    
                    <Price>
                        <Real>₹1,289</Real>
                        <Discount><del>₹150</del></Discount>
                    </Price>
                    <RemoveBtn>REMOVE</RemoveBtn>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default CartItem
