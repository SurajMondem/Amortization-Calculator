export default function calculate(loanAmount, loanTerm, loanAPR) {

  const amount = loanAmount;
  const term = loanTerm * 12; //convert to months
  const rate = loanAPR/1200;

  const rpn = getRPN(rate, amount, term);
  const ratePower = getRatePower(rate, term);

  const totalLoanCost = rpn/(1-ratePower);
  const totalInterestGenerated = totalLoanCost - amount;
  const totalMonthlyPayment = totalLoanCost/term; 

  console.log('total Loan cost', totalLoanCost);
  console.log('total Interest', totalInterestGenerated);
  console.log('total Monthly Payment', totalMonthlyPayment);

  
}

/*
  breaking formula into smaller pieces

  -> r*p*n = rpn
  -> (1+r)^-n = ratepower

 */


const getRPN = (r, p, n) => r*p*n;

const getRatePower = (r, n) => {
  const r1 = r+1;
  const n1 = -1*n;
  return Math.pow(r1, n1);
}

