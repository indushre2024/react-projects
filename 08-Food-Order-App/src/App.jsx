import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { ModalContextProvider } from "./store/modalContext";

function App() {
  return (
    <ModalContextProvider>
    <CartContextProvider>
      <Header/>
      <Meals/>
    </CartContextProvider>
    </ModalContextProvider>
  );
}

export default App;
