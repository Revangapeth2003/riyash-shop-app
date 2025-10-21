import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { products } from "@/data/products";
import { Pencil, Trash2, Plus } from "lucide-react";

const Admin = () => {
  const { toast } = useToast();
  const [productList, setProductList] = useState(products);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    retailPrice: "",
    wholesalePrice: "",
  });

  const handleAddProduct = () => {
    if (!formData.name || !formData.category || !formData.retailPrice || !formData.wholesalePrice) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }

    if (editingId) {
      // Update existing product
      setProductList(
        productList.map((p) =>
          p.id === editingId
            ? {
                ...p,
                name: formData.name,
                category: formData.category,
                retailPrice: parseFloat(formData.retailPrice),
                wholesalePrice: parseFloat(formData.wholesalePrice),
              }
            : p
        )
      );
      toast({
        title: "Success",
        description: "Product updated successfully",
      });
    } else {
      // Add new product
      const newProduct = {
        id: (productList.length + 1).toString(),
        name: formData.name,
        category: formData.category,
        retailPrice: parseFloat(formData.retailPrice),
        wholesalePrice: parseFloat(formData.wholesalePrice),
        image: products[0].image, // Default image
      };
      setProductList([...productList, newProduct]);
      toast({
        title: "Success",
        description: "Product added successfully",
      });
    }

    setFormData({ name: "", category: "", retailPrice: "", wholesalePrice: "" });
    setShowAddForm(false);
    setEditingId(null);
  };

  const handleEditProduct = (product: any) => {
    setFormData({
      name: product.name,
      category: product.category,
      retailPrice: product.retailPrice.toString(),
      wholesalePrice: product.wholesalePrice.toString(),
    });
    setEditingId(product.id);
    setShowAddForm(true);
  };

  const handleDeleteProduct = (id: string) => {
    setProductList(productList.filter((p) => p.id !== id));
    toast({
      title: "Deleted",
      description: "Product removed successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Admin Portal</h1>
            <p className="mt-2 text-muted-foreground">Manage your products and inventory</p>
          </div>
          <Button onClick={() => {
            setShowAddForm(!showAddForm);
            if (showAddForm) {
              setEditingId(null);
              setFormData({ name: "", category: "", retailPrice: "", wholesalePrice: "" });
            }
          }}>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>

        {showAddForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editingId ? "Edit Product" : "Add New Product"}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter product name"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="Enter category"
                  />
                </div>
                <div>
                  <Label htmlFor="retailPrice">Retail Price (₹)</Label>
                  <Input
                    id="retailPrice"
                    type="number"
                    value={formData.retailPrice}
                    onChange={(e) => setFormData({ ...formData, retailPrice: e.target.value })}
                    placeholder="Enter retail price"
                  />
                </div>
                <div>
                  <Label htmlFor="wholesalePrice">Wholesale Price (₹)</Label>
                  <Input
                    id="wholesalePrice"
                    type="number"
                    value={formData.wholesalePrice}
                    onChange={(e) => setFormData({ ...formData, wholesalePrice: e.target.value })}
                    placeholder="Enter wholesale price"
                  />
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button onClick={handleAddProduct}>
                  {editingId ? "Update Product" : "Add Product"}
                </Button>
                <Button onClick={() => {
                  setShowAddForm(false);
                  setEditingId(null);
                  setFormData({ name: "", category: "", retailPrice: "", wholesalePrice: "" });
                }} variant="outline">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
          {productList.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.name}
                  className="mb-4 aspect-square w-full rounded-lg object-cover"
                />
                <CardTitle className="flex items-center justify-between">
                  <span>{product.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-medium">{product.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Retail Price:</span>
                    <span className="font-medium text-primary">₹{product.retailPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Wholesale Price:</span>
                    <span className="font-medium text-primary">₹{product.wholesalePrice}</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button 
                    onClick={() => handleEditProduct(product)}
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                  >
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteProduct(product.id)}
                    variant="destructive"
                    size="sm"
                    className="flex-1"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
