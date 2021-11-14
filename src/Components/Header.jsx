import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import styled from 'styled-components';
import { useContext } from 'react';
import { DataLayer } from "../context/Context"
import {openModal, gotoLogin} from "../context/Actions"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Badge } from '@material-ui/core';

const Container = styled.div`
    background-color: #2874f0;
    display:flex;
    height: 55px;
    justify-content:center;
    position: sticky;
    top:0px;
    z-index:1;
`;

const Wrapper = styled.div`
    height:100%;
    width:75%;
    display:flex;
`;

const Left = styled.div`
    display: flex;
    align-items:center;
    width: 35rem;
    margin-right:50px;
    margin-left: 20px;
`;
const Logo = styled.div`
    position: relative;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content: center;
    margin-right: 10px;
`;
const LogoImage = styled.img`
    height:20px;
`;
const Tag = styled.div`
   position: absolute;
   top: 10px;
   left:5px;
`;
const Item = styled.span`
    font-size:10px;
    font-style: italic;
    color: white;
`;

const Plus = styled.img`
    height: 10px;
`;
const Search = styled.div`
    flex:1;
    position: relative;
    height: 30px; 
`;

const Input = styled.input`
    width:98%;
    height:100%;
`;

const Right = styled.div`
    display: flex;
    width:20rem;
`;
const Option = styled.div`
    display:flex;
    align-items:center;
    margin-right:40px;
    width: 6rem;
`;

const LoginButton = styled.button`
    background-color:white;
    border-radius:0px;
    border: none;
    height: 28px;
    width: 120px;
    color: #2874f0;
    font-weight:500;
    font-size: 15px;
`;

const searchIconStyle = { 
    color: "#2874f0", 
    fontSize:"1.7rem",
    cursor: "pointer",
    position: "absolute",
    top:"0.4rem",
    right:"0rem",
}

const OptionButton = styled.button`
    background-color: #2874f0;
    border:none;
    color:white;
    font-size: 15px;
    cursor: pointer;
`;

function Header() {
    const {dispatch} = useContext(DataLayer)
    return (
        <Container>

            <Wrapper>

                <Left>
                    <Link to="/">
                        <Logo>
                            <LogoImage  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="logo" />
                            <Tag>
                                <Item>Explore</Item>
                                <Item>Plus
                                    <Plus src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt=""/>
                                </Item>
                                
                            </Tag>
                        </Logo>
                    </Link>

                    <Search>
                        <Input placeholder="Search for products, brands and more" type="text"/>
                        <SearchOutlinedIcon style={searchIconStyle}/>
                    </Search>
                </Left>

                <Right>
                    <Option>
                        <LoginButton onClick = {()=> {
                            dispatch(openModal())
                            dispatch(gotoLogin())
                        }}>
                        Login
                        </LoginButton>
                    </Option>
                    <Option>  
                        <OptionButton >More</OptionButton>
                        <ExpandMoreOutlinedIcon style={{ color: "white" }} />
                    </Option>
                    
                    <Option>
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCartRoundedIcon style={{ color: "white" }} />
                        </Badge>
                        <Link to="/cart">
                            <OptionButton >Cart</OptionButton>
                        </Link>
                    </Option>
                    
                </Right>

            </Wrapper>

        </Container>
    )
}

export default Header
