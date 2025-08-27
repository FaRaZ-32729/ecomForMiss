import { createContext, useEffect, useState } from "react";
import axios from "axios";

const URL = import.meta.env.VITE_Node_Api_Url;

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [newCollections, setNewCollections] = useState([]);
    const [cartItems, setCartItems] = useState({});

    // Fetch Products From DB
    const fetchProducts = async () => {
        try {
            const res = await axios.get(`${URL}/products`);
            console.log(res)
            const products = res.data.allProducts;

            setNewCollections(products);

            // Initialize cartItems with all product IDs set to 0
            const initialCart = {};
            products.forEach(product => {
                initialCart[product._id] = 0;
            });
            setCartItems(initialCart);

        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Add to Cart
    const addToCart = (itemId) => {
        setCartItems(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    // Remove from Cart
    const removeFromCart = (itemId) => {
        setCartItems(prev => ({
            ...prev,
            [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0
        }));
    };

    // Get Total Amount
    const getTotalAmount = () => {
        let totalAmount = 0;
        for (let itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const product = newCollections.find(product => product._id === itemId);
                if (product) {
                    totalAmount += cartItems[itemId] * product.price;
                }
            }
        }
        return totalAmount;
    };

    // Get Total Items in Cart
    const getTotalItems = () => {
        return Object.values(cartItems).reduce((sum, count) => sum + count, 0);
    };

    const contextValue = {
        newCollections,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalAmount,
        getTotalItems
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
