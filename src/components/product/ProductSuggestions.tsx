"use client";

import Link from "next/link";
import styles from "../home/ProductGrid.module.css"; // Reusing grid styles for consistency

const SUGGESTIONS = [
  {
    id: "3",
    name: "Classic Heritage",
    price: "640 000 FCFA",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Élégance Dorée",
    price: "915 000 FCFA",
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=800&auto=format&fit=crop",
  }
];

export default function ProductSuggestions() {
  return (
    <section className="py-16 border-t border-gray-100 mt-16">
      <h3 className="font-serif text-2xl font-bold mb-8 text-center">Vous aimerez aussi</h3>
      <div className={styles.grid}>
        {SUGGESTIONS.map((product) => (
          <Link href={`/produit/${product.id}`} key={product.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img 
                src={product.image} 
                alt={product.name} 
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <h4 className={styles.productName}>{product.name}</h4>
              <p className={styles.productPrice}>{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
