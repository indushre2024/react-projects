import { formatter } from "./util/investment";

export default function ResultRow({year,interest,valueEndOfYear, annualInvestment,prevInterest}){
    const totalInterest = interest+prevInterest;
    return(
        <tr key={year}>
            <td>{year}</td>
            <td>{formatter.format(valueEndOfYear)}</td>
            <td>{formatter.format(interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(valueEndOfYear-totalInterest)}</td>
        </tr>
    );
}