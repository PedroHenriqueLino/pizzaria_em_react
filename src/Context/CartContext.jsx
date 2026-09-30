import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [result, setResult] = useState()



    function addToCart(product) {
        const cartProduct = {
            ...product,
            cartId: crypto.randomUUID()
        }

        setCart(prevCart => [...prevCart, cartProduct]);

        setResult(prevResult => (prevResult || 0) + product.price);
    }

    function removeCart(id) {
        const product = cart.find(product => product.cartId === id);

        if (!product) return;

        setCart(
            prevCart => prevCart.filter(product => product.cartId !== id)
        )

        setResult(prevResult => prevResult - product.price);
    }


    useEffect(() => {
        console.log(cart)
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, addToCart, result, removeCart }} >
            {children}
        </CartContext.Provider>
    )

}