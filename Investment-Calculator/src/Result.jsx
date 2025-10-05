const COLUMNs = ['Year', 'Investment Value', 'Interest(Year)', 'Total Interest', 'Invested Capital']

import {calculateInvestmentResults, formatter} from "./util/investment";
import ResultRow from "./ResultRow";

function computeResults(values){
    const results = calculateInvestmentResults(values);
    return results;
}

export default function Result({inputValues}){
    const results = computeResults(inputValues);
    return (
        <div id="result">
            <table>
                <thead>
                    <tr>
                        {COLUMNs.map((val,id)=><th key={id}>{val}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {results.map((row,id)=><ResultRow key={id} {...row} prevInterest={id==0?0:results[id-1].interest}/>)}
                </tbody>
            </table>
        </div>
    );
}