import {useRef} from 'react';
import { useImperativeHandle } from 'react';

export default function Modal({children, ref}){
    const dialog = useRef();

    useImperativeHandle(ref,()=>{
        return {
            openDialog(){
                dialog.current.showModal();
            }
        }
    })

    return (
            <dialog ref={dialog} className="fixed inset-0 top-1/3 left-1/2 p-3 rounded-md bg-neutral-200 backdrop:bg-neutral-600 backdrop:opacity-90">
                {children}
                <form method="dialog" className="flex justify-center">
                    <button className="mt-4 px-3 py-1 font-bold text-medium font-sans text-neutral-200 bg-neutral-700 rounded-lg">Okay</button>
                </form>
            </dialog>
    );
}