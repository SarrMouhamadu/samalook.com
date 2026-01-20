"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProductGallery.module.css";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={styles.gallery}>
      {/* Thumbnails - Left side on desktop */}
      <div className={styles.thumbnails}>
        {images.map((img, index) => (
          <button
            key={index}
            className={cn(styles.thumbnailBtn, index === selectedIndex && styles.active)}
            onClick={() => setSelectedIndex(index)}
            aria-label={`View image ${index + 1}`}
          >
            <img src={img} alt={`${name} thumbnail ${index + 1}`} className={styles.thumbImage} />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className={styles.mainImageContainer}>
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedIndex}
            src={images[selectedIndex]}
            alt={`${name} view ${selectedIndex + 1}`}
            className={styles.mainImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
