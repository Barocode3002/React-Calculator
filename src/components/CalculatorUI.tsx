// The Calculator UI

import { useState } from 'react';
import { HiOutlineBackspace } from "react-icons/hi";

const CalculatorUI = () => {
  // State management for calculator display and equation
  const [display, setDisplay] = useState('');
  const [equation, setEquation] = useState('');
  const [clearButtonText, setClearButtonText] = useState('AC');

  // Handle number button clicks
  const handleNumber = (number: string) => {
    if (display === '0' && number !== '.') {
      setDisplay(number);
    } else if (number === '.' && display.includes('.')) {
      // Do nothing if a decimal point already exists
      return;
    } else {
      setDisplay(display + number);
    }
    // Change clear button to C when user starts typing
    if (clearButtonText === 'AC') {
      setClearButtonText('C');
    }
  };

  // Handle operator button clicks
  const handleOperator = (operator: string) => {
    // If an operator is already in the equation, replace it
    if (equation.includes(' ')) {
      setEquation(display + ' ' + operator + ' ');
    } else {
      setEquation(display + ' ' + operator + ' ');
      setDisplay('0');
    }
    // Change clear button to C when user adds operator
    if (clearButtonText === 'AC') {
      setClearButtonText('C');
    }
  };

  // Handle The Percentage Button: When user chooses No. (x) % it will be converted to a decimal
  const handlePercentage = () => {
    const currentValue = parseFloat(display);
    if (!isNaN(currentValue)) {
      const percentageResult = currentValue / 100;
      setDisplay(percentageResult.toString());
      setEquation('');
    }
    // Change clear button to C when user uses percentage
    if (clearButtonText === 'AC') {
      setClearButtonText('C');
    }
  }

  // Handle equals button click
  const handleEqual = () => {
    try {
      if (equation && display) {
        // Replace '^' with '**' for proper calculation
        const safeEquation = equation.replace(/\^/g, '**') + display;
        const result = eval(safeEquation);
        setDisplay(result.toString());
        setEquation('');
      }
    } catch {
      setDisplay('Error');
      setEquation('');
    }
    // Change clear button to C when user calculates result
    if (clearButtonText === 'AC') {
      setClearButtonText('C');
    }
  };

  // Handle clear button click
  const handleClear = () => {
    if (clearButtonText === 'C') {
      // Clear current display only
      setDisplay('0');
      setClearButtonText('AC');
    } else if (clearButtonText === 'AC') {
      // Clear everything
      setDisplay('0');
      setEquation('');
      setClearButtonText('AC');
    }
  };

  // Handle Backspace button click: undo when a problem happened
  const handleBackspace = () => {
    if (display.length > 1) {
      // If display has more than one character, remove last character
      setDisplay(display.slice(0, -1));
    } else if (display === '0' && equation) {
      // If display is 0 and equation exists, remove the last operator and revert to the previous number
      const newEquation = equation.trim().slice(0, -1).trim();
      const equationParts = newEquation.split(' ');
      
      if (equationParts.length > 1) {
        setDisplay(equationParts[equationParts.length - 1]);
        setEquation(newEquation.slice(0, newEquation.lastIndexOf(' ')));
      } else {
        setDisplay(newEquation);
        setEquation('');
      }
    } else {
      // If display has only one character, reset to 0
      setDisplay('0');
    }
    
    // Change clear button to C when user uses backspace
    if (clearButtonText === 'AC') {
      setClearButtonText('C');
    }
  };

  // Base button styles - extracted for reusability
  const baseButtonStyles = "text-white border-none rounded-xl p-5 text-lg font-bold cursor-pointer transition-all duration-200 hover:scale-105";

  // Button type styles
  const buttonStyles = {
    number: `${baseButtonStyles} bg-gray-700 hover:bg-gray-600`,
    operator: `${baseButtonStyles} bg-orange-500 hover:bg-orange-600`,
    clear: `${baseButtonStyles} bg-red-500 hover:bg-red-600`,
    equal: `${baseButtonStyles} bg-green-500 hover:bg-green-600`,
    zero: `${baseButtonStyles} bg-gray-700 hover:bg-gray-600 col-span-2`
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-5">
      <div className="bg-gray-900 rounded-3xl p-5 shadow-2xl w-80">
        
        {/* Calculator Display */}
        <div className="bg-gray-800 rounded-xl p-5 mb-5 text-right min-h-20 relative">
          <div className="text-gray-400 text-sm mb-1 min-h-5">{equation}</div>
          <div className="text-white text-3xl font-bold">{display}</div>
          <button 
            onClick={handleBackspace} 
            className="absolute top-2 left-2 text-gray-400 hover:text-white transition-colors duration-200 p-2"
          >
            <HiOutlineBackspace size={20} />
          </button>
        </div>

        {/* Calculator Buttons Grid */}
        <div className="grid grid-cols-4 gap-2.5">
          
          {/* Row 1: Clear, Percentage, Exponent, Division */}
          <button onClick={handleClear} className={buttonStyles.clear}>
            {clearButtonText}
          </button>
          <button onClick={handlePercentage} className={buttonStyles.operator}>
            %
          </button>
          <button onClick={() => handleOperator('**')} className={buttonStyles.operator}>
            ^
          </button>
          <button onClick={() => handleOperator('/')} className={buttonStyles.operator}>
            ÷
          </button>

          {/* Row 2: Numbers 7, 8, 9 and Multiplication */}
          <button onClick={() => handleNumber('7')} className={buttonStyles.number}>
            7
          </button>
          <button onClick={() => handleNumber('8')} className={buttonStyles.number}>
            8
          </button>
          <button onClick={() => handleNumber('9')} className={buttonStyles.number}>
            9
          </button>
          <button onClick={() => handleOperator('*')} className={buttonStyles.operator}>
            ×
          </button>

          {/* Row 3: Numbers 4, 5, 6 and Subtraction */}
          <button onClick={() => handleNumber('4')} className={buttonStyles.number}>
            4
          </button>
          <button onClick={() => handleNumber('5')} className={buttonStyles.number}>
            5
          </button>
          <button onClick={() => handleNumber('6')} className={buttonStyles.number}>
            6
          </button>
          <button onClick={() => handleOperator('-')} className={buttonStyles.operator}>
            −
          </button>

          {/* Row 4: Numbers 1, 2, 3 and Addition */}
          <button onClick={() => handleNumber('1')} className={buttonStyles.number}>
            1
          </button>
          <button onClick={() => handleNumber('2')} className={buttonStyles.number}>
            2
          </button>
          <button onClick={() => handleNumber('3')} className={buttonStyles.number}>
            3
          </button>
          <button onClick={() => handleOperator('+')} className={buttonStyles.operator}>
            +
          </button>

          {/* Row 5: Zero (spans 2 columns), Decimal, Equals */}
          <button onClick={() => handleNumber('0')} className={buttonStyles.zero}>
            0
          </button>
          <button onClick={() => handleNumber('.')} className={buttonStyles.number}>
            .
          </button>
          <button onClick={handleEqual} className={buttonStyles.equal}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorUI;
