import ProductCard from "@/components/ProductCard";
import { categories, getProductsByCategory } from "@/data/products";
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
          
          <TabsContent value="retail" className="mt-8 space-y-12">
            {categories.map((category) => {
              const categoryProducts = getProductsByCategory(category);
              return (
                <div key={`${category}-retail`}>
                  <h2 className="mb-6 text-2xl font-bold text-foreground">{category}</h2>
                  <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
                    {categoryProducts.map((product) => (
                      <ProductCard key={`${product.id}-retail`} product={product} type="retail" />
                    ))}
                  </div>
                </div>
              );
            })}
          </TabsContent>
          
          <TabsContent value="wholesale" className="mt-8 space-y-12">
            {categories.map((category) => {
              const categoryProducts = getProductsByCategory(category);
              return (
                <div key={`${category}-wholesale`}>
                  <h2 className="mb-6 text-2xl font-bold text-foreground">{category}</h2>
                  <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
                    {categoryProducts.map((product) => (
                      <ProductCard key={`${product.id}-wholesale`} product={product} type="wholesale" />
                    ))}
                  </div>
                </div>
              );
            })}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
