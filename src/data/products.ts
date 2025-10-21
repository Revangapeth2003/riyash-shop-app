import { Product } from "@/contexts/CartContext";
import premiumSoapImage from "@/assets/premium-soap.jpg";
import luxurySoapImage from "@/assets/luxury-soap.jpg";
import herbalSoapImage from "@/assets/herbal-soap.jpg";
import antibacterialSoapImage from "@/assets/antibacterial-soap.jpg";
import moisturizingSoapImage from "@/assets/moisturizing-soap.jpg";
import detergentPowderImage from "@/assets/detergent-powder.jpg";
import premiumDetergentImage from "@/assets/premium-detergent.jpg";
import ecoDetergentImage from "@/assets/eco-detergent.jpg";
import detergent2kgImage from "@/assets/detergent-2kg.jpg";
import ultraDetergentImage from "@/assets/ultra-detergent.jpg";
import cleaningLiquidImage from "@/assets/cleaning-liquid.jpg";
import floorCleanerImage from "@/assets/floor-cleaner.jpg";
import disinfectantImage from "@/assets/disinfectant.jpg";
import glassCleanerImage from "@/assets/glass-cleaner.jpg";
import multipurposeCleanerImage from "@/assets/multipurpose-cleaner.jpg";

export const products: Product[] = [
  // Personal Care - Soaps
  {
    id: "1",
    name: "Premium Soap",
    category: "Personal Care",
    retailPrice: 45,
    wholesalePrice: 35,
    image: premiumSoapImage,
  },
  {
    id: "2",
    name: "Luxury Bath Soap",
    category: "Personal Care",
    retailPrice: 55,
    wholesalePrice: 42,
    image: luxurySoapImage,
  },
  {
    id: "3",
    name: "Herbal Soap Bar",
    category: "Personal Care",
    retailPrice: 38,
    wholesalePrice: 28,
    image: herbalSoapImage,
  },
  {
    id: "4",
    name: "Antibacterial Soap",
    category: "Personal Care",
    retailPrice: 52,
    wholesalePrice: 40,
    image: antibacterialSoapImage,
  },
  {
    id: "5",
    name: "Moisturizing Soap",
    category: "Personal Care",
    retailPrice: 48,
    wholesalePrice: 36,
    image: moisturizingSoapImage,
  },
  
  // Laundry - Detergents
  {
    id: "6",
    name: "Detergent Powder",
    category: "Laundry",
    retailPrice: 120,
    wholesalePrice: 95,
    image: detergentPowderImage,
  },
  {
    id: "7",
    name: "Premium Detergent 1kg",
    category: "Laundry",
    retailPrice: 145,
    wholesalePrice: 115,
    image: premiumDetergentImage,
  },
  {
    id: "8",
    name: "Eco-Friendly Detergent",
    category: "Laundry",
    retailPrice: 135,
    wholesalePrice: 105,
    image: ecoDetergentImage,
  },
  {
    id: "9",
    name: "Detergent Powder 2kg",
    category: "Laundry",
    retailPrice: 225,
    wholesalePrice: 180,
    image: detergent2kgImage,
  },
  {
    id: "10",
    name: "Ultra Clean Detergent",
    category: "Laundry",
    retailPrice: 158,
    wholesalePrice: 125,
    image: ultraDetergentImage,
  },
  
  // Household - Liquids
  {
    id: "11",
    name: "Cleaning Liquid",
    category: "Household",
    retailPrice: 85,
    wholesalePrice: 70,
    image: cleaningLiquidImage,
  },
  {
    id: "12",
    name: "Floor Cleaner 500ml",
    category: "Household",
    retailPrice: 95,
    wholesalePrice: 75,
    image: floorCleanerImage,
  },
  {
    id: "13",
    name: "Disinfectant Liquid",
    category: "Household",
    retailPrice: 110,
    wholesalePrice: 88,
    image: disinfectantImage,
  },
  {
    id: "14",
    name: "Glass Cleaner Spray",
    category: "Household",
    retailPrice: 78,
    wholesalePrice: 62,
    image: glassCleanerImage,
  },
  {
    id: "15",
    name: "Multi-Purpose Cleaner 1L",
    category: "Household",
    retailPrice: 125,
    wholesalePrice: 98,
    image: multipurposeCleanerImage,
  },
];

export const categories = ["Personal Care", "Laundry", "Household"];

export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};
