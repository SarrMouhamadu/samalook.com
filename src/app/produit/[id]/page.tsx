import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductSuggestions from "@/components/product/ProductSuggestions";

// Mock data service
const PRODUCTS = [
  {
    id: "1",
    name: "Chronographe Royal",
    price: "820 000 FCFA",
    description: "Un chef-d'œuvre d'ingénierie et d'esthétique. Le Chronographe Royal allie un mouvement automatique de précision suisse à un boîtier en acier inoxydable poli à la main. Son cadran noir profond, protégé par un verre saphir inrayable, offre une lisibilité parfaite en toutes circonstances.",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=2599&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
     id: "2",
     name: "Minimalist Noir",
     price: "550 000 FCFA",
     description: "L'essence du minimalisme. Un design épuré qui va à l'essentiel, parfait pour l'homme moderne qui apprécie la subtilité et l'élégance discrète.",
     images: [
      "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495856458515-0637185db551?q=80&w=800&auto=format&fit=crop"
     ]
  }
];

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

// Correct type definition for Next.js 15+ dynamic params
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  // Await the params object
  const { id } = await params;
  
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-24 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <ProductGallery images={product.images} name={product.name} />
        <ProductInfo 
          id={product.id}
          name={product.name} 
          price={product.price} 
          description={product.description}
          image={product.images[0]} 
        />
      </div>
      
      <ProductSuggestions />
    </div>
  );
}
