import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";

export default function MealItem({item}){
    const {items, addItem} = useContext(CartContext);
    const itemInCart = items.find((i)=>{ return i.id === item.id});

    function addItemToCart(){
        addItem(item);
    }

    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${item.image}`} alt={item.title} />
                <h3>{item.title}</h3>
                <span><p className="meal-item-price">{item.price}</p></span>
                <div className="meal-item-description">{item.description}</div>
                <div className="meal-item-actions">
                    <Button textBtn={false} onClick = {addItemToCart}>{itemInCart?`Add More (${itemInCart.count})`:'Add to Cart'}</Button>
                </div>
            </article>
            
        </li>
    );
}