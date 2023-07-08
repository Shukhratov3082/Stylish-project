
import Home from './components/Home'
import About from './components/About'
import Code from './components/Code'
import Header from './components/header';
import FootNavBar from './components/FootNavBar';
import styled from 'styled-components';


function App() {
  return (
    <Wrapper>
      <Header />
      <Home />
      <About />
      <Code />
      <FootNavBar />
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
scroll-snap-type: y mandatory;
  
`
