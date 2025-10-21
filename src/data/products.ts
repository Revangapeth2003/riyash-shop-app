import { Product } from "@/contexts/CartContext";
import soapImage from "@/assets/soap.jpg";
import detergentImage from "@/assets/detergent.jpg";
import liquidImage from "@/assets/liquid.jpg";

export const products: Product[] = [
  // Personal Care - Soaps
  {
    id: "1",
    name: "Premium Soap",
    category: "Personal Care",
    retailPrice: 45,
    wholesalePrice: 35,
    image: soapImage,
  },
  {
    id: "2",
    name: "Luxury Bath Soap",
    category: "Personal Care",
    retailPrice: 55,
    wholesalePrice: 42,
    image: soapImage,
  },
  {
    id: "3",
    name: "Herbal Soap Bar",
    category: "Personal Care",
    retailPrice: 38,
    wholesalePrice: 28,
    image: soapImage,
  },
  {
    id: "4",
    name: "Antibacterial Soap",
    category: "Personal Care",
    retailPrice: 52,
    wholesalePrice: 40,
    image: soapImage,
  },
  {
    id: "5",
    name: "Moisturizing Soap",
    category: "Personal Care",
    retailPrice: 48,
    wholesalePrice: 36,
    image: soapImage,
  },
  
  // Laundry - Detergents
  {
    id: "6",
    name: "Detergent Powder",
    category: "Laundry",
    retailPrice: 120,
    wholesalePrice: 95,
    image: detergentImage,
  },
  {
    id: "7",
    name: "Premium Detergent 1kg",
    category: "Laundry",
    retailPrice: 145,
    wholesalePrice: 115,
    image: detergentImage,
  },
  {
    id: "8",
    name: "Eco-Friendly Detergent",
    category: "Laundry",
    retailPrice: 135,
    wholesalePrice: 105,
    image: detergentImage,
  },
  {
    id: "9",
    name: "Detergent Powder 2kg",
    category: "Laundry",
    retailPrice: 225,
    wholesalePrice: 180,
    image: detergentImage,
  },
  {
    id: "10",
    name: "Ultra Clean Detergent",
    category: "Laundry",
    retailPrice: 158,
    wholesalePrice: 125,
    image: detergentImage,
  },
  
  // Household - Liquids
  {
    id: "11",
    name: "Cleaning Liquid",
    category: "Household",
    retailPrice: 85,
    wholesalePrice: 70,
    image: liquidImage,
  },
  {
    id: "12",
    name: "Floor Cleaner 500ml",
    category: "Household",
    retailPrice: 95,
    wholesalePrice: 75,
    image: liquidImage,
  },
  {
    id: "13",
    name: "Disinfectant Liquid",
    category: "Household",
    retailPrice: 110,
    wholesalePrice: 88,
    image: liquidImage,
  },
  {
    id: "14",
    name: "Glass Cleaner Spray",
    category: "Household",
    retailPrice: 78,
    wholesalePrice: 62,
    image: liquidImage,
  },
  {
    id: "15",
    name: "Multi-Purpose Cleaner 1L",
    category: "Household",
    retailPrice: 125,
    wholesalePrice: 98,
    image: liquidImage,
  },
];

export const categories = ["Personal Care", "Laundry", "Household"];

export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};
