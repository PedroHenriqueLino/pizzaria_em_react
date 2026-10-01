import axios from 'axios'

import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState()

    const getData = async () => {
        try {
            const data = await axios.get('https://pizzaria-em-react.onrender.com/prodocts')

            const response = data.data

            setProducts(response)
            console.log(response)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}