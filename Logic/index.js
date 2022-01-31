export default function calculate(loanAmount, loanTerm, loanAPR) {

  const amount = loanAmount;
  const term = loanTerm * 12; //convert to months
  const rate = loanAPR/1200;

  
  const totalMonthlyPayment = getEMI(rate, amount, term);
  const table = getAmortizationTable(amount, rate, totalMonthlyPayment);

  const summary = {totalMonthlyPayment, table};
  console.log('total Monthly Payment', totalMonthlyPayment);
  console.log(table);

  return summary;
}

const getEMI = (rate, amount, term) => {
  const rpn = getRPN(rate, amount, term);
  const ratePower = getRatePower(rate, term);
  const totalLoanCost = Math.round(rpn/(1-ratePower));
  return Math.round(totalLoanCost/term);
}

const getAmortizationTable = (amount, rate, totalMonthlyPayment) => {
  let balance = amount;
  const table = [];
  table.push({emi: 0, principle: 0, interest: 0, balance});
  while (balance > 0) {
    const emi = Math.round(totalMonthlyPayment);
    const interest = Math.round(balance*rate);
    const principle = Math.round(emi - interest);
    balance = balance - principle;
    const row = {emi, principle, interest, balance};
    table.push(row);
  }
  
  return table;
}

const getRPN = (r, p, n) => r*p*n;

const getRatePower = (r, n) => {
  const r1 = r+1;
  const n1 = -1*n;
  return Math.pow(r1, n1);
}