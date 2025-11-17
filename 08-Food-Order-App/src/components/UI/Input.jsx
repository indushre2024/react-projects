export default function Input({label, id,isRequired, ...props}){
    return (
        <div className="control">
            <label htmlFor={id}>{label}</label>
            <input {...props} required={isRequired}/>
        </div>
    );
}