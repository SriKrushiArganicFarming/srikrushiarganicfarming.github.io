import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type CartItem = {
  name: string;
  price?: string;
  image: string;
  quantity: number;
  packSize?: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  decrementItem: (name: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);
const CART_STORAGE_KEY = 'sri-krushi-cart';

function getStoredCart(): CartItem[] {
  try {
    if (typeof window === 'undefined' || typeof window.localStorage?.getItem !== 'function') return [];
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  } catch {
    return [];
  }
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(getStoredCart);

  useEffect(() => {
    try {
      if (typeof window.localStorage?.setItem === 'function') {
        window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      }
    } catch {
      // Keep the cart available in memory when browser storage is unavailable.
    }
  }, [cart]);

  function addToCart(item: CartItem) {
    setCart((prev) => {
      const found = prev.find((i) => i.name === item.name);
      if (found) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
  }

  function decrementItem(name: string) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, decrementItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
