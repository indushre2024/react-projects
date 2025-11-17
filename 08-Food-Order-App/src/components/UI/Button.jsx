export default function Button({children, textBtn, classes='', ...props}){
    const className = `${classes} ${textBtn?'text-button':'button'}`;
    // if(props.className) className  = `${className} props`
    return (
        <button className={className} {...props}>{children}</button>
    );
}