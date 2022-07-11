import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Code from './components/Code'
import Header from './components/header';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route element={<Home/>} path='/' />
      <Route element={<About/>} path='/About' />
      <Route element={<Code/>} path='/Code' />
    </Routes>
    </>
  );
}

export default App;
