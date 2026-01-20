"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingBag, ShieldCheck, Truck } from "lucide-react";
import styles from "./ProductInfo.module.css";

interface ProductInfoProps {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  features?: string[];
}

export default function ProductInfo({ id, name, price, description, image, features }: ProductInfoProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    // Parse price string to number for calculation (approximate for demo)
    // "820 000 FCFA" -> 820000
    const numericPrice = parseInt(price.replace(/[^0-9]/g, "")) || 0;
    
    addItem({
      id,
      name,
      price: numericPrice,
      priceString: price,
      image
    });
  };

  return (
    <div className={styles.info}>
      <div className={styles.header}>
        <span className={styles.brand}>SamaLook Collection</span>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.price}>{price}</p>
      </div>

      <div className={styles.description}>
        <p>{description}</p>
        <p>
          Conçue avec une précision horlogère, cette pièce incarne l'alliance parfaite entre tradition et modernité. 
          Idéale pour sublimer votre allure au quotidien comme pour les grandes occasions.
        </p>
      </div>

      <div className={styles.actions}>
        <button className={styles.addToCartBtn} onClick={handleAddToCart}>
          Ajouter au Panier
        </button>
      </div>

      <div className={styles.features}>
        <div className={styles.featureItem}>
          <ShieldCheck size={18} />
          <span>Garantie 2 ans</span>
        </div>
        <div className={styles.featureItem}>
          <Truck size={18} />
          <span>Livraison Premium</span>
        </div>
      </div>
    </div>
  );
}
