import Navigation from './components/Navigation';
import Container from 'react-bootstrap/Container';
import Home from './views/Home';

export default function App(){

    return (
        <>
            <Navigation/>
            <Container>
              <Home/>
            </Container>
        </>
    )
}