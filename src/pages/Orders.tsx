import { useCart } from "@/contexts/CartContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Trash2 } from "lucide-react";

const Orders = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const retailItems = cartItems.filter((item) => item.type === "retail");
  const wholesaleItems = cartItems.filter((item) => item.type === "wholesale");

  const calculateTotal = (items: typeof cartItems) => {
    return items.reduce((sum, item) => {
      const price = item.type === "retail" ? item.retailPrice : item.wholesalePrice;
      return sum + price * item.quantity;
    }, 0);
  };

  const retailTotal = calculateTotal(retailItems);
  const wholesaleTotal = calculateTotal(wholesaleItems);
  const grandTotal = retailTotal + wholesaleTotal;

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
          <h2 className="mt-4 text-2xl font-bold">Your cart is empty</h2>
          <p className="mt-2 text-muted-foreground">Add some products to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Your Orders</h1>
            <p className="mt-2 text-muted-foreground">Review your cart items</p>
          </div>
          <Button onClick={clearCart} variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Clear Cart
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Retail Orders */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Retail Orders</span>
                <Badge variant="default">{retailItems.length} items</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {retailItems.length === 0 ? (
                <p className="text-center text-muted-foreground">No retail items</p>
              ) : (
                <div className="space-y-4">
                  {retailItems.map((item) => (
                    <div key={`${item.id}-retail`} className="flex items-center gap-4 rounded-lg border p-4">
                      <img src={item.image} alt={item.name} className="h-16 w-16 rounded object-cover" />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                        <p className="text-sm font-semibold text-primary">₹{item.retailPrice} each</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">₹{item.retailPrice * item.quantity}</p>
                        <Button
                          onClick={() => removeFromCart(item.id, "retail")}
                          variant="ghost"
                          size="sm"
                          className="mt-2"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Retail Total:</span>
                      <span className="text-primary">₹{retailTotal}</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Wholesale Orders */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Wholesale Orders</span>
                <Badge variant="secondary">{wholesaleItems.length} items</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {wholesaleItems.length === 0 ? (
                <p className="text-center text-muted-foreground">No wholesale items</p>
              ) : (
                <div className="space-y-4">
                  {wholesaleItems.map((item) => (
                    <div key={`${item.id}-wholesale`} className="flex items-center gap-4 rounded-lg border p-4">
                      <img src={item.image} alt={item.name} className="h-16 w-16 rounded object-cover" />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                        <p className="text-sm font-semibold text-primary">₹{item.wholesalePrice} each</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">₹{item.wholesalePrice * item.quantity}</p>
                        <Button
                          onClick={() => removeFromCart(item.id, "wholesale")}
                          variant="ghost"
                          size="sm"
                          className="mt-2"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Wholesale Total:</span>
                      <span className="text-primary">₹{wholesaleTotal}</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Grand Total */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between text-2xl font-bold">
              <span>Grand Total:</span>
              <span className="text-primary">₹{grandTotal}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Orders;
