"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
// Using a placeholder that looks luxury watch related. 
// Ideally we would use a real asset, but for now a high quality Unsplash.
const HERO_IMAGE = "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2680&auto=format&fit=crop";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img 
        src={HERO_IMAGE} 
        alt="Montre de luxe fond sombre" 
        className={styles.bgImage}
      />
      <div className={styles.overlay} />
      
      <div className={styles.content}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          L'Élégance à Votre Poignet
        </motion.h1>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Découvrez notre collection exclusive de montres et accessoires.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/montres" className={styles.ctaButton}>
            Découvrir la Collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
