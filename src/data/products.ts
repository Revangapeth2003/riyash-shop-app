import { Product } from "@/contexts/CartContext";
import soapImage from "@/assets/soap.jpg";
import detergentImage from "@/assets/detergent.jpg";
import liquidImage from "@/assets/liquid.jpg";

export const products: Product[] = [
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
    name: "Detergent Powder",
    category: "Laundry",
    retailPrice: 120,
    wholesalePrice: 95,
    image: detergentImage,
  },
  {
    id: "3",
    name: "Cleaning Liquid",
    category: "Household",
    retailPrice: 85,
    wholesalePrice: 70,
    image: liquidImage,
  },
];
