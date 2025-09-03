import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import './App.css'

function App() {
  return (
    <>
      
      <BrowserRouter> 
      <Routes>
     <Route path={"/"} exact element={<HomePage />} /> 
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
