import { useState, useEffect,useMemo } from "react";
import { db } from "../data/db";

/**
 * Custom hook to manage shopping cart state and logic.
 *
 * Handles:
 * - Initializing cart from localStorage
 * - Adding, removing, increasing, and decreasing items
 * - Cart total calculation
 * - Sync with localStorage
 *
 * @returns {Object} cart state and helper functions:
 * - data: product catalog
 * - cart: current cart items
 * - addToCart(): add or update item in cart
 * - removeFromCart(): remove item by ID
 * - increaseQuantity(): increment item quantity
 * - decreaseCart(): decrement item quantity
 * - deleteToCart(): clear entire cart
 * - isEmpty: true if cart has no items
 * - cartTotal: total price of all items
 */
export function useCart(){
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

    // Check if cart is empty (recalculated only when 'cart' changes)
    const isEmpty = useMemo(() => cart.length === 0, [cart]);

    // Calculate total price of the cart (recalculated only when 'cart' changes)
    const cartTotal = useMemo(() =>
            cart.reduce((total, item) => total + (item.quantity * item.price), 0),
        [cart]
    );

    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        decreaseCart,
        increaseQuantity,
        deleteToCart,
        isEmpty,
        cartTotal
    }
}