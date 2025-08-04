// The CalculatorUI

import { useState } from 'react';

const CalculatorUI = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (number: string) => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator: string) => {
    setEquation(display + ' ' + operator + ' ');
    setDisplay('0');
  };

  const handleEqual = () => {
    const result = eval(equation + display);
    setDisplay(result.toString());
    setEquation('');
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-5">
      <div className="bg-gray-900 rounded-3xl p-5 shadow-2xl w-80">
        <div className="bg-gray-800 rounded-xl p-5 mb-5 text-right min-h-20">
          <div className="text-gray-400 text-sm mb-1 min-h-5">{equation}</div>
          <div className="text-white text-3xl font-bold">{display}</div>
        </div>
        <div className="grid grid-cols-4 gap-2.5">
          <button 
            onClick={handleClear} 
            className="bg-red-500 text-white border-none rounded-xl p-5 text-lg font-bold cursor-pointer transition-all duration-200 hover:bg-red-600 hover:scale-105"
          >
            C
          </button>
          <button 
            onClick={() => handleOperator('/')} 
            className="bg-orange-500 text-white border-none rounded-xl p-5 text-lg font-bold cursor-pointer transition-all duration-200 hover:bg-orange-600 hover:scale-105"
          >
            ÷
          </button>
          <button 
            onClick={() => handleNumber('7')} 
            className="bg-gray-700 text-white border-none rounded-xl p-5 text-lg font-bold cursor-pointer transition-all duration-200 hover:bg-gray-600 hover:scale-105"
          >
            7
          </button>
          <button 
            onClick={() => handleNumber('8')} 
            className="bg-gray-700 text-white border-none rounded-xl p-5 text-lg font-bold cursor-pointer transition-all duration-200 hover:bg-gray-600 hover:scale-105"
          >
            8
          </button>
          <button 
            onClick={() => handleNumber('9')} 
            className="bg-gray-700 text-white border-none rounded-xl p-5 text-lg font-bold cursor-pointer transition-all duration-200 hover:bg-gray-600 hover:scale-105"
          >
            9
          </button>
          <button 
            onClick={() => handleOperator('*')} 
            className="bg-orange-500 text-white border-none rounded-xl p-5 text-lg font-bold cursor-pointer transition-all duration-200 hover:bg-orange-600 hover:scale-105"
          >
            ×
          </button>
          <button 
            onClick={() => handleNumber('4')} 
            className="bg-gray-700 text-white border-none rounded-xl p-5 text-lg font-bold cursor-pointer transition-all duration-200 hover:bg-gray-600 hover:scale-105"
          >
            4
          </button>
          <button 
            onClick={() => handleNumber('5')} 
            className="bg-gray-700 text-white border-none rounded-xl p-5 text-lg font-bold cursor-pointer transition-all duration-200 hover:bg-gray-600 hover:scale-105"
          >
            5
          </button>
          <button 
            onClick={() => handleNumber('6')} 
            className="bg-gray-700 text-white border-none rounded-xl p-5 text-lg font-bold cursor-pointer transition-all duration-200 hover:bg-gray-600 hover:scale-105"
          >
            6
          </button>
          <button 
            onClick={() => handleOperator('-')} 
            className="bg-orange-500 text-white border-none rounded-xl p-5 text-lg font-bold cursor-pointer transition-all duration-200 hover:bg-orange-600 hover:scale-105"
          >
            −
          </button>
          <button 
            onClick={() => handleNumber('1')} 
            className="bg-gray-700 text-white border-none rounded-xl p-5 text-lg font-bold cursor-pointer transition-all duration-200 hover:bg-gray-600 hover:scale-105"
          >
            1
          </button>
          <button 
            onClick={() => handleNumber('2')} 
            className="bg-gray-700 text-white border-none rounded-xl p-5 text-lg font-bold cursor-pointer transition-all duration-200 hover:bg-gray-600 hover:scale-105"
          >
            2
          </button>
          <button 
            onClick={() => handleNumber('3')} 
            className="bg-gray-700 text-white border-none rounded-xl p-5 text-lg font-bold cursor-pointer transition-all duration-200 hover:bg-gray-600 hover:scale-105"
          >
            3
          </button>
          <button 
            onClick={() => handleOperator('+')} 
            className="bg-orange-500 text-white border-none rounded-xl p-5 text-lg font-bold cursor-pointer transition-all duration-200 hover:bg-orange-600 hover:scale-105"
          >
            +
          </button>
          <button 
            onClick={() => handleNumber('0')} 
            className="bg-gray-700 text-white border-none rounded-xl p-5 text-lg font-bold cursor-pointer transition-all duration-200 hover:bg-gray-600 hover:scale-105 col-span-2"
          >
            0
          </button>
          <button 
            onClick={() => handleNumber('.')} 
            className="bg-gray-700 text-white border-none rounded-xl p-5 text-lg font-bold cursor-pointer transition-all duration-200 hover:bg-gray-600 hover:scale-105"
          >
            .
          </button>
          <button 
            onClick={handleEqual} 
            className="bg-green-500 text-white border-none rounded-xl p-5 text-lg font-bold cursor-pointer transition-all duration-200 hover:bg-green-600 hover:scale-105"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorUI;
