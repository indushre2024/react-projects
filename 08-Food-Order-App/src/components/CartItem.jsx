// import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";

export default function CartItem({item}){
    const {removeItem, addItem} = useContext(CartContext);
    return (
        <li>
            <div className="cart-item">
                <p>{item.name}-{item.count} x {item.price}</p>
                <div className="cart-item-actions">
                    <button onClick = {()=>removeItem(item)}>-</button>
                    <span>{item.count}</span>
                    <button onClick = {()=>{addItem(item)}}>+</button>
                </div>
            </div>
        </li>
    );
}