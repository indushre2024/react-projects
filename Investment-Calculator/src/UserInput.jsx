import InputGroup from "./InputGroup";

const inputArray = [{label:'initial investment',name:'initialInvestment'},
    {label:'annual investment',name:'annualInvestment'},
    {label:'expected return',name:'expectedReturn'},
    {label:'duration',name:'duration'}];

export default function UserInput({inputValues, handleInputChange}){
    return (
        <div id="user-input" className="input-group">
            {inputArray.map((row,id)=><InputGroup key={id} label={row.label} htmlFor={row.name}
             type = 'number' inputValues={inputValues} changeHandler={handleInputChange}></InputGroup>)}
        </div>
    );
}