import { convertToCurrencyFormat } from "../../Logic/Utils"


export default function Outputs({
  totalInterestGenerated = '',
  totalLoanAmount = '',
  totalMonthlyPayment = '',
}) {
  return (
    <div className="output-box col-6">
      <h3 className="total-loan-amount">
        Total Loan Amount: {convertToCurrencyFormat(totalLoanAmount)}
      </h3>
      <h3 className="total-interest">
        Total Interest Generated: {convertToCurrencyFormat(totalInterestGenerated)}
      </h3>
      <h3 className="monthly-payment">
        Monthly Amount: {convertToCurrencyFormat(totalMonthlyPayment)}
      </h3>
    </div>
  )
};
