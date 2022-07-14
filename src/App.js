
import Home from './components/Home'
import About from './components/About'
import Code from './components/Code'
import Header from './components/header';
import FootNavBar from './components/FootNavBar';
// import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <Header/>
    
    {/* <NavBar/> */}
    <Home/>
    <About/>
    <Code/>
    <FootNavBar/>
    </>
  );
}

export default App;
