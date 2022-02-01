export default function calculate(loanAmount, loanAPR, loanTerm) {

  const amount = loanAmount;
  const term = loanTerm * 12; //convert to months
  const rate = loanAPR/1200;
  console.log(term);
  
  const totalMonthlyPayment = getEMI(amount, term, rate);
  const table = getAmortizationTable(amount, rate, term, totalMonthlyPayment);
  let totalInterestGenerated = 0;
  let totalLoanAmount = 0;
  table.map(ele => {
    totalInterestGenerated += parseFloat(ele.interest);
    totalLoanAmount += parseFloat(ele.emi);
  });

  const summary = {totalMonthlyPayment, table, totalInterestGenerated, totalLoanAmount};
  return summary;
}

const getEMI = (amount, totalPayments, rate) => {
  
  const r1 = Math.pow((1+rate), totalPayments);
  const num = rate * r1;
  const den = r1 - 1;

  const emi = (amount * (num / den));
  return emi;
}

const getAmortizationTable = (amount, rate, totalPayments, monthlyPayment) => {
  let oldbalance = amount;
  let newbalance = amount;
  let totalInterest = 0;
  let totalLoanAmount = 0;
  let monthly = monthlyPayment;
  const table = [];
  for (let index = 1; index <= totalPayments; index++){
    const loop = index;
    const interest = (newbalance*rate);
    totalInterest += interest;
    
    if(index < totalPayments) {
      monthly = monthlyPayment - interest;
      oldbalance = newbalance
      newbalance = oldbalance - monthly;
    }
    else {
      // console.log(balance, monthly, interest);
      monthly = (oldbalance - monthly) + interest;
      oldbalance = newbalance;
      newbalance = 0;
    }
    totalLoanAmount += monthly;
    const row = {
      loop,
      oldbalance: oldbalance.toFixed(2),
      newbalance: newbalance.toFixed(2),
      principle: monthly.toFixed(2),
      emi: monthlyPayment.toFixed(2),
      interest: interest.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalLoanAmount: totalLoanAmount.toFixed(2),
    }

    table.push(row);
  }
  console.log(table);
  return table;
}

const getRPN = (r, p, n) => r*p*n;

const getRatePower = (r, n) => {
  const r1 = r+1;
  const n1 = -1*n;
  return Math.pow(r1, n1);
}