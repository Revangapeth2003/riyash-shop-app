import { createContext, useContext, useState, ReactNode } from "react";

export interface Product {
  id: string;
  name: string;
  category: string;
  retailPrice: number;
  wholesalePrice: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
  type: "retail" | "wholesale";
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, type: "retail" | "wholesale") => void;
  removeFromCart: (productId: string, type: "retail" | "wholesale") => void;
  isInCart: (productId: string, type: "retail" | "wholesale") => boolean;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, type: "retail" | "wholesale") => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id && item.type === type);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id && item.type === type
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, type }];
    });
  };

  const removeFromCart = (productId: string, type: "retail" | "wholesale") => {
    setCartItems((prev) => prev.filter((item) => !(item.id === productId && item.type === type)));
  };

  const isInCart = (productId: string, type: "retail" | "wholesale") => {
    return cartItems.some((item) => item.id === productId && item.type === type);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isInCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
