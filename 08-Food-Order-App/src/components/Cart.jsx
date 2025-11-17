import CartContext from '../store/CartContext';
import {useContext} from 'react';
import CartItem from './CartItem';
import Button from './UI/Button';
import ModalContext from '../store/modalContext';
import CheckOut from './Checkout';


export default function Cart(){
    const {modalState, closeCart, openCheckoutForm} = useContext(ModalContext);
    const {items } = useContext(CartContext);
    const totalPrice = items.reduce((a,b)=>{
        return a + (b.price * b.count)
    },0)

    return (
        <>
            {modalState.isCheckoutopen && 
                <CheckOut total={totalPrice} items={items}></CheckOut>
            }
            <div className="cart">
                <h2>Your Cart</h2>
                <ul>
                    {items.length>0 && items.map((item)=>{
                        return <CartItem key = {item.id} item={item}/>
                    })}
                </ul>
                <div className="cart-total">
                    ${totalPrice}
                </div>
                <div className="modal-actions">
                    <Button textBtn onClick = {closeCart}>Close</Button>
                    <Button disabled={items?.length<=0} onClick ={openCheckoutForm}>Go to Checkout</Button>
                </div>
                
            </div>
        </>
        
    );
}