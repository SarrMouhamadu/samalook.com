"use client";

import { ShoppingBag, ShieldCheck, Truck } from "lucide-react";
import styles from "./ProductInfo.module.css";

interface ProductInfoProps {
  name: string;
  price: string;
  description: string;
  features?: string[];
}

export default function ProductInfo({ name, price, description, features }: ProductInfoProps) {
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
        <button className={styles.addToCartBtn}>
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
