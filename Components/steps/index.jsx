
const tableHeaders = ['Month','Previous Balance', 'Principle', 'Interest', 'EMI','New Balance'];

export default function Steps({ table = [] }) {
  return (
    <div className="steps-box col-12">
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => {
              return (
                <th key={index}>
                {header}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
        {
          table && table.map(({loop, newbalance, oldbalance, emi, principle, interest}, index) => {
            return (
              <tr key={index}>
                <td>{loop}</td>
                <td>{oldbalance}</td>
                <td>{principle}</td>
                <td>{interest}</td>
                <td>{parseFloat(principle)+parseFloat(interest)}</td>
                <td>{newbalance}</td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  )
};