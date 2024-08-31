import { useState } from "react";
import Button from './Button';

function Calculator() {
    const [displayValue, setDisplayValue ] = useState('0');
    
    return(
        <div>
            <div>{displayValue}</div>
            {/* Aqui irán los botones de la calculadora */}
            <Button value="1" onClick={() => setDisplayValue(displayValue + '1')}></Button>
            <Button value="+" onClick={() => console.log('Logica para la suma')}></Button>
        </div>
    );
}

export default Calculator;