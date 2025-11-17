import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

export default function Modal({children, open, ...props}){
    const modalref = useRef();
    useEffect(()=>{
        if(open){
            modalref.current.showModal();
        }
        return ()=>{
            if(modalref.current){
                modalref.current.close();
            }
        }
    },[open])

    return (
        createPortal(
        <dialog {...props} ref={modalref} className="modal">
            {children}
        </dialog>, document.getElementById('modal'))
    );

}