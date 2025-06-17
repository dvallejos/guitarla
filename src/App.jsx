import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Guitar from "./components/Guitar.jsx";
import { db } from "./data/db";
import './App.css';

// Main application component: sets up product data, cart logic, and renders UI
function App() {

    // Static product data loaded into state (not expected to change)
    const [data] = useState(db);

    // Initialize cart from localStorage, or return an empty array
    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    };

    // Shopping cart state
    const [cart, setCart] = useState(initialCart);

    // Maximum and minimum quantity limits per item
    const MAX_ITEM = 5;
    const MIN_ITEM = 1;

    /**
     * Add a product to the cart.
     * If it exists, increase its quantity.
     * If not, add it with quantity = 1.
     */
    const addToCart = item => {
        const itemExists = cart.findIndex(guitar => guitar.id === item.id);
        if (itemExists >= 0) {
            if (cart[itemExists].quantity >= MAX_ITEM) return;
            const updatedCart = [...cart];
            updatedCart[itemExists].quantity++;
            setCart(updatedCart);
        } else {
            item.quantity = 1;
            setCart([...cart, item]);
        }
    };

    /**
     * Remove an item from the cart by its ID.
     */
    const removeFromCart = id =>
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id));

    /**
     * Clear the entire cart.
     */
    const deleteToCart = () => setCart([]);

    /**
     * Increase quantity of a specific item by ID,
     * without exceeding MAX_ITEM.
     */
    const increaseQuantity = id => {
        const updateCart = cart.map(item => {
            if (item.id === id && item.quantity < MAX_ITEM) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }
            return item;
        });
        setCart(updateCart);
    };

    /**
     * Decrease quantity of a specific item by ID,
     * without going below MIN_ITEM.
     */
    const decreaseCart = id => {
        const updateCart = cart.map(item => {
            if (item.id === id && item.quantity > MIN_ITEM) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            }
            return item;
        });
        setCart(updateCart);
    };

    // Sync cart state to localStorage on every change
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <>
            <Header
                cart={cart}
                deleteToCart={deleteToCart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseCart={decreaseCart}
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
