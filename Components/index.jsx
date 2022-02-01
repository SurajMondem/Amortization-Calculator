import { useState, useEffect } from "react";
import Inputs from "./inputs";
import Outputs from "./outputs";
import Steps from "./steps";
import {
  simpleData
} from '../Mocks/simple_data';
import calculate from '../Logic/index';

export default function App() {

  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [term, setTerm] = useState(0);
  const [result, setResult] = useState({});

  useEffect(() => {
    if( principle > 0 && rate > 0 && term > 0){
      setResult(calculate(principle, rate, term))
    }
  }, [principle, rate, term])

  const {
    totalInterestGenerated,
    totalLoanAmount,
    totalMonthlyPayment,
    table,
  } = result;

  return (
    <div className="main-container container-fluid">
      <div className="row">
        <Inputs 
          setPrinciple={setPrinciple}
          setRate={setRate}
          setTerm={setTerm}
          principle={principle}
          rate={rate}
          term={term}
        />
        <Outputs
          totalInterestGenerated={totalInterestGenerated}
          totalLoanAmount={totalLoanAmount}
          totalMonthlyPayment={totalMonthlyPayment}
        />
        <Steps 
          table={table}
        />
      </div>
    </div>
  )
}