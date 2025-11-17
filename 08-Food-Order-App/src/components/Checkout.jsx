import Input from "./UI/Input";
import Button from "./UI/Button";
import ModalContext from "../store/modalContext";
import { useContext, useState } from "react";
import Modal from './UI/Modal';
import CartContext from "../store/CartContext";

export default function CheckOut({total,items}){
    const {clearCart} = useContext(CartContext);
    const {modalState, closeCheckoutForm} = useContext(ModalContext);
    const [error, setError] = useState(null);
    const [sendingData, setSendingData] = useState(false);
    const [orderSuccess, setOrderSucces] = useState(false);

    async function submitOrder(customerData,items){
        try{
            const res = await fetch('http://localhost:3000/ordersss', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({order})
            })
            if(!res.ok){
                throw new Error("Something went wrong! Couldn't submit the order");
            }
        }
        catch(e){
            setError({message:e.message || "Someting went Wrong"});
        }
        finally{
            setSendingData(false);
        }
    }

    function handleOrderSuccess(){
        closeCheckoutForm();
        setOrderSucces(false);
    }

    async function handleFormSubmit(formData){
        setSendingData(true);
        setError(null);
        const dataObject = Object.fromEntries(formData.entries());
        const order = {customer:{...dataObject}, items}
        try{
            const res = await fetch('http://localhost:3000/orders', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({order})
            })
            if(!res.ok){
                throw new Error("Something went wrong! Couldn't submit the order");
            }
            setOrderSucces(true);
            clearCart();
        }
        catch(e){
            console.log("Setting error");
            setError({message:e.message || "Someting went Wrong"});
        }
        finally{
            setSendingData(false);
        }     
    }

    const succesMessage = <div>
        <p>Your Order placed successfully, you will get the receipt through mail!!</p>
        <button className="button" onClick = {handleOrderSuccess}>Okay</button>
    </div>

    
    return (
        <>
            <Modal open={modalState.isCheckoutopen}>
                {orderSuccess && succesMessage}
                {!orderSuccess && 
                <form action = {handleFormSubmit}>
                    <h2>Checkout</h2>
                    <p>Total Amount: ${total}</p>
                    <Input label='Full Name' type='text' id = 'name' name='name' isRequired ></Input>
                    <Input label='E-Mail Address' name='email' type='email' id='email' isRequired></Input>
                    <Input type = 'text' label = 'Street' name = 'street' id ='street' isRequired={true}></Input>
                    <div className="control-row">
                        <Input type='text' name='postal-code' id = 'postal-code' label='Postal Code'></Input>
                        <Input type ='text' name='city' label='City' id='city' isRequired={true}></Input>
                    </div>

                    {error && <div className="error">
                        {error.message || "Couldn't process the request try after some time"}</div>}

                    <div className="modal-actions">
                        <Button textBtn onClick = {closeCheckoutForm}>Close</Button>
                        <Button disabled={sendingData}>Submit Order</Button>
                    </div>
                </form>
                }
            </Modal>
        
        </>
    );
}