import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import { useContext } from 'react';
import Modal from './UI/Modal';
import Cart from './Cart';
import ModalContext from '../store/modalContext';

export default function Header(){
    const {modalState,openCart,closeCart} = useContext(ModalContext);
    const {items} = useContext(CartContext);
    // console.log(items);
    const itemCount = items.reduce((a,b)=>{
        return a+b.count;
    },0)

    return (
        <>
        <Modal open = {modalState.isCartOpen} onClose = {closeCart}>
            <Cart></Cart>
        </Modal>
        <header id = "main-header">
            <div id="title">
                <img src={logo} alt="Food Order Logo" />
                <h1>reactfood</h1>
            </div>
            <Button textBtn={true} onClick = {openCart}>Cart ({itemCount})</Button>
        </header>
        </>
        
    );
}