import React, { createContext, useContext, useState } from 'react';
import type { CartItem } from '@/types/Cart';

interface CartContextType {
    items: CartItem[];
    setItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    return (
        <CartContext.Provider value={{ items, setItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
}; 