"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ProductGrid.module.css";
import { cn } from "@/lib/utils";

const PRODUCTS = [
  {
    id: 1,
    name: "Chronographe Royal",
    price: "820 000 FCFA",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=2599&auto=format&fit=crop",
    category: "Montres"
  },
  {
    id: 2,
    name: "Minimalist Noir",
    price: "550 000 FCFA",
    image: "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?q=80&w=800&auto=format&fit=crop",
    category: "Montres"
  },
  {
    id: 3,
    name: "Classic Heritage",
    price: "640 000 FCFA",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop",
    category: "Montres"
  },
  {
    id: 4,
    name: "Élégance Dorée",
    price: "915 000 FCFA",
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=800&auto=format&fit=crop",
    category: "Accessoires"
  }
];

export default function ProductGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nos Créations</h2>
          <p className={styles.subtitle}>Une sélection intemporelle pour un style affirmé.</p>
        </div>
        
        <div className={styles.grid}>
          {PRODUCTS.map((product, index) => (
            <Link href={`/produit/${product.id}`} key={product.id}>
              <motion.div 
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.imageContainer}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className={styles.image}
                  />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productPrice}>{product.price}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
