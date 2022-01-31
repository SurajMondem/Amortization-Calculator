import {
  simpleData
} from '../../Mocks/simple_data';
import calculate from '../../Logic/index';


export default function Inputs() {

  const result = calculate(simpleData.amount, simpleData.loanTerm, simpleData.internetRate);

  console.log(result);


  return (
    <div className="input-box col-6">input</div>
  )
};
