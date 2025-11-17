import { createContext, useReducer } from "react";

const CartContext = createContext({items:[]});
export default CartContext;

function cartDispatcher(prevState, ctx){
    if(ctx.action === 'ADD_ITEM'){
        const itemIndex = prevState.findIndex(item => item.id === ctx.item.id);
        const itemCount = itemIndex<0 ? 1: prevState[itemIndex]?.count +1;
        const updatedState = [...prevState];
        if(itemIndex>=0){
            updatedState[itemIndex] = {...ctx.item, count:itemCount};
        }
        else
            updatedState.push({...ctx.item, count:itemCount});
        
        return updatedState;
    }
    if(ctx.action === 'REMOVE_ITEM'){
        const itemIndex = prevState.findIndex(item => item.id === ctx.item.id);
        const itemCount = prevState[itemIndex]?.count - 1;
        const updatedState = [...prevState];
        if(itemCount>0){
            updatedState[itemIndex] = {...ctx.item, count:itemCount}
        }
        else{
            updatedState.splice(itemIndex,1);
        }
        
        return updatedState;
    }
    if(ctx.action==='CLEAR_CART'){
        return [];
    }
}

function CartContextProvider({children}){
    const [cartItems, cartItemDispatcher] = useReducer(cartDispatcher,[]);

    function addItem(item){
        cartItemDispatcher({action:'ADD_ITEM', item});
    }

    function removeItem(item){
        cartItemDispatcher({action:'REMOVE_ITEM', item});
    }

    function clearCart(){
        cartItemDispatcher({action:'CLEAR_CART'});
    }

    const contextValue = {items:cartItems,
        addItem,
        removeItem,
        clearCart
    }
    return (
        <CartContext value={contextValue}>{children}</CartContext>
    );
}

export {CartContextProvider};