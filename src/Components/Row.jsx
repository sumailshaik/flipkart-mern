import RowProduct from "./RowProduct";
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import styled from 'styled-components';

const Container = styled.div`
    background-color: white;
    box-shadow:0 4px 16px 0 rgba(0,0,0,.2);
    width: 97%;
    flex:1;
    margin: 11px 0;
    box-sizing: border-box;
    overflow: hidden;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,.2);
    padding: 11px;
`;

const TopBtn = styled.button`
    background: #2874f0;
    color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    border: none;
    padding: 11px 18px;
`;

const Bottom = styled.div`
    position:relative;
`;

const ProductsSection = styled.div`
    display:flex;
`;

const BottomBtn = styled.button`
    position: absolute;
    right: 0px;
    top: 79px;
    background-color: white;
    border: 1px white solid;
    border-radius: 6px 0px 0px 6px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .11);
    height: 104px;
    width:47px
`;

function Row({title}) {
    return (
        <Container>
            <Top>
                <h2>{title}</h2>
                <TopBtn>VIEW ALL</TopBtn>
            </Top>
            
            <Bottom>
                
                <ProductsSection>
                    <RowProduct/>
                    <RowProduct/>
                    <RowProduct/>
                    <RowProduct/>
                    <RowProduct/>
                    <RowProduct/>
                    <RowProduct/>
                    <RowProduct/>
                    <RowProduct/>
                    <RowProduct/>
                    <RowProduct/>
                    <RowProduct/>
                </ProductsSection>
                <BottomBtn><ArrowForwardIosOutlinedIcon/></BottomBtn>
            </Bottom>
        </Container>
    )
}

export default Row
