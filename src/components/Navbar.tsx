import { NavLink } from "react-router-dom";
import { ShoppingBag, Package, Shield } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-primary">Riyash Shop</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              <ShoppingBag className="h-4 w-4" />
              Shop
            </NavLink>
            
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              <Package className="h-4 w-4" />
              Orders
              {totalItems > 0 && (
                <Badge variant="default" className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                  {totalItems}
                </Badge>
              )}
            </NavLink>
            
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              <Shield className="h-4 w-4" />
              Admin
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
