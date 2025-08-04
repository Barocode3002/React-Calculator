
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import CalculatorUI from './components/CalculatorUI'
import NavBarUI from './components/NavBarUI'
import logo from './assets/react-calculator-logo.svg'


const HomePage = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/calculator');
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <img src={logo} alt="logo" className='w-50px h-50px items-center justify-center'/>
      <h1 className='text-3xl font-bold text-center mt-10'>Welcome to React Calculator</h1>
      <button 
        onClick={handleClick} 
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-none px-6 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:from-blue-600 hover:to-purple-700 mt-1.5"
      >
        Go to Calculator
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div>
      
      <NavBarUI />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorUI />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
