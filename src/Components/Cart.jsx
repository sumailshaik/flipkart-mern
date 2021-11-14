import styled from "styled-components"
import CartItem from "./CartItem";

const Container = styled.div`
    display:flex;
    width: 100%;
    backgound-color: transparent;
    
`;

const Left = styled.div`
    flex: 2;
    display:flex;
    margin-top: 30px;
    margin-left: 10px;
    margin-right: 10px; 
    background-color:white;
    flex-direction:column;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
`;

const ItemList = styled.div``;

const Title = styled.div`
    border-bottom: 1px solid #f0f0f0;; 
    padding: 20px;
`;

const PlaceOrder = styled.div`

    display:flex;
    justify-content: flex-end;
`;

const Button = styled.button`
    height: 50px;
    background: #fb641b;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    border: none;
    color: #fff; 
    font-size: 15px;
    font-weight: 500;
    padding: 0px 70px;
    margin-bottom: 20px;
    margin-right: 20px;
`;

const Right = styled.div`
    margin-top: 30px;
    margin-left: 10px;
    margin-right: 10px; 
    flex: 1;
    display:flex;
    flex-direction: column;
    height: 310px;
    background-color:white;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
`
const Top = styled.h4`
    padding: 15px 20px;
    border-bottom: 1px solid #f0f0f0;
    color: #878787;
`;
const Bottom = styled.div`
    padding: 0 20px;
`;
const Option = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`;
const Tag = styled.p``;

const Price = styled.p``;

const Green = styled.span`
    color: #388e3c;
`;

const Amount = styled.div`
    font-weight: 500;
    font-size: 20px;
`;

const Hr = styled.hr`
    border: 1px dashed #f0f0f0;
`;

const Saved = styled.p`
    padding-top: 20px;
    font-weight: 500;
`;

const Cart = () => {
    return (
        <Container>
            <Left>
                <Title><strong>My Cart (2)</strong></Title>
                <ItemList>
                    <CartItem/>
                    <CartItem/>
                </ItemList>
                <PlaceOrder>
                    <Button>PLACE ORDER</Button>
                </PlaceOrder>
            </Left>
            <Right>
                <Top>PRICE DETAILS</Top>
                <Bottom>
                    <Option>
                        <Tag>Price (2 items)</Tag>
                        <Price>₹6,287</Price>
                    </Option>
                    <Option>
                        <Tag>Discount</Tag>
                        <Price><Green>− ₹3,843</Green></Price>
                    </Option>
                    <Option>
                        <Tag>Delivery Charges</Tag>
                        <Price><Green>FREE</Green></Price>
                    </Option>
                    <Hr/>
                    <Amount>
                        <Option>
                            <Tag>Total Amount</Tag>
                            <Price>₹2,444</Price>
                        </Option>
                    </Amount>
                    <Hr/>
                    <Saved><Green>You will save ₹3,843 on this order</Green></Saved>
                </Bottom>
            </Right>
        </Container>
    )
}

export default Cart
