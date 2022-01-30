import {
  simpleData
} from '../../Mocks/simple_data';
import calculate from '../../Logic/index';


export default function Inputs() {

  calculate(simpleData.amount, simpleData.loanTerm, simpleData.internetRate);

  return (
    <div className="input-box col-6">input</div>
  )
};
