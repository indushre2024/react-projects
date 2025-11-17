import { createContext } from "react";
import { useState } from "react";

const ModalContext = createContext({modalState:{},
openCart: ()=>{},
closeCart: ()=>{}});
export default ModalContext;

export function ModalContextProvider({children}){
    const [modalState, setModalState] = useState({isCartOpen:false, isCheckoutopen:false})

    function openCart(){
        setModalState(prevstate=>{
            return {...prevstate, isCartOpen:true}
        })
    }

    function closeCart(){
        setModalState(prevstate=>{
            return {...prevstate, isCartOpen:false}
        })
    }

    function openCheckoutForm(){
        closeCart();
        setModalState(prevstate=>{
            return {...prevstate, isCheckoutopen:true}
        })
    }

    function closeCheckoutForm(){
        setModalState(prevstate=>{
            return {...prevstate, isCheckoutopen:false}
        })
    }
    
    const modalCtx = {
        modalState,
        openCart,
        closeCart,
        openCheckoutForm,
        closeCheckoutForm
    }
    return (
        <ModalContext value = {modalCtx}>
            {children}
        </ModalContext>
    );
}