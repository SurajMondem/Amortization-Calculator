import Inputs from "./Inputs";
import Outputs from "./Outputs";

export default function App() {
  return (
    <div className="main-container container-fluid">
      <div className="row">
        <Inputs/>
        <Outputs/>
        <div className="steps-table-box col-12">Steps</div>
      </div>
    </div>
  )
}