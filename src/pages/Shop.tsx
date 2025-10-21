import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground">Our Products</h1>
          <p className="mt-2 text-muted-foreground">Browse our collection of quality cleaning products</p>
        </div>

        <Tabs defaultValue="retail" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="retail">Retail Sale</TabsTrigger>
            <TabsTrigger value="wholesale">Wholesale</TabsTrigger>
          </TabsList>
          
          <TabsContent value="retail" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={`${product.id}-retail`} product={product} type="retail" />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="wholesale" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={`${product.id}-wholesale`} product={product} type="wholesale" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
