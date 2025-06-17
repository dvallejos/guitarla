
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Guitar from "./components/Guitar.jsx";

import { useCart } from './hooks/useCart';
import './App.css';

// Main application component: sets up product data, cart logic, and renders UI
function App() {
    const {
        data,
        cart,
        addToCart,
        removeFromCart,
        decreaseCart,
        increaseQuantity,
        deleteToCart,
        isEmpty,
        cartTotal
    } = useCart();

    return (
        <>
            <Header
                cart={cart}
                deleteToCart={deleteToCart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseCart={decreaseCart}
                isEmpty={isEmpty}
                cartTotal={cartTotal}
            />
            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>
                <div className="row mt-5">
                    {data.map(guitar => (
                        <Guitar
                            key={guitar.id}
                            guitar={guitar}
                            cart={cart}
                            addToCart={addToCart}
                            increaseQuantity={increaseQuantity}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
