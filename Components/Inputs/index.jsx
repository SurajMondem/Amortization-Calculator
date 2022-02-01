import { useRef } from "react";
import { convertToCurrencyFormat } from "../../Logic/Utils";


export default function Inputs({
  setPrinciple,
  setRate,
  setTerm,
  principle,
  rate,
  term,
}) {

  const principleValue = useRef();
  const rateValue = useRef();
  const termValue = useRef();
  
  const handleOnSubmit = (e) => {
    if(e) e.preventDefault();

    const principle = parseInt(principleValue.current.value);
    const rate = parseFloat(rateValue.current.value);
    const term = parseInt(termValue.current.value);

    setPrinciple(principle >= 0 ? principle: 0);
    setRate(rate >= 0 ? rate : 0);
    setTerm(term >= 0 ? term : 0);

    principleValue.current.value = '';
    rateValue.current.value = '';
    termValue.current.value = '';
  }


  return (
    <div className="input-box col-6">
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="principle" ref={principleValue}/>
        <input type="text" placeholder="rate" ref={rateValue} />
        <input type="text" placeholder="term" ref={termValue} />
        <input type="submit" value="Submit" />
      </form>

      <div className="value-entered">
        <h6 className="principle">Principle: {convertToCurrencyFormat(principle)}</h6>
        <h6 className="principle">Rate: {rate}%</h6>
        <h6 className="principle">Term: {term}yrs</h6>
      </div>
    </div>
  )
};
