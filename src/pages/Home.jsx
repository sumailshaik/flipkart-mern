import Header from '../Components/Header'
import Categories from  '../Components/Categories'
import Slideshow from '../Components/Slideshow'
import Feed from '../Components/Feed'
import styled from 'styled-components'

const Container = styled.div`
`;

const Home = () => {
    return (
        <Container >
            <Header/>
            <Categories/>
            <Slideshow />
            <Feed/>
        </Container>
    )
}

export default Home;
