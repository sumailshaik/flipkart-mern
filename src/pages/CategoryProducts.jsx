import styled from "styled-components"
import Product from "../Components/Product";

const Container = styled.div`
    display:flex;
    
`;

const Wrapper = styled.div`
    display:flex;
    flex: 4;
    flex-wrap: wrap;
    justify-content : space-around;
`;

const Adver = styled.div`
    flex:1;
    height: 500px;
    margin: 20px;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit:cover;
`;

const CategoryProducts = () => {
    return (
        <Container>
            
            <Wrapper>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </Wrapper>

            <Adver>        
                <Image src="https://i.pinimg.com/originals/b1/a1/ec/b1a1ec19f494b9aaafbf965274c59b11.jpg" alt=""/>
            </Adver>
        </Container>
    )
}

export default CategoryProducts;
