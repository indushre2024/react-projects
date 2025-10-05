export default function InputGroup({label, type='text', htmlFor, inputValues, changeHandler}){
    return (
        <div>
            <label htmlFor={htmlFor}>{label}</label>
            <input type={type} name={htmlFor} id={htmlFor} value={inputValues[htmlFor]} onChange={(e)=>changeHandler(htmlFor, parseInt(e.target.value))} />
        </div>
    );
}