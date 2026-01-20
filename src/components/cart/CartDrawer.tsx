"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CartDrawer.module.css";
import Image from "next/image";

export default function CartDrawer() {
  const { isCartOpen, closeCart, items, removeItem, updateQuantity, cartTotal } = useCart();

  // Helper to format currency broadly
  const formatGenericPrice = (total: number) => {
      // Very basic formatter for demo purposes, assumes FCFA roughly
      return new Intl.NumberFormat('fr-FR').format(total) + " FCFA";
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div 
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.div 
            className="fixed top-0 right-0 h-full w-full max-w-[400px] z-[2001] bg-white shadow-2xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className={styles.header}>
              <h2 className={styles.title}>Votre Panier ({items.length})</h2>
              <button onClick={closeCart} className={styles.closeBtn}>
                <X size={24} />
              </button>
            </div>

            <div className={styles.itemsContainer}>
              {items.length === 0 ? (
                <div className={styles.emptyState}>
                  <p>Votre panier est vide.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className={styles.item}>
                    <img src={item.image} alt={item.name} className={styles.itemImage} />
                    <div className={styles.itemInfo}>
                      <div className="flex justify-between items-start">
                         <h3 className={styles.itemName}>{item.name}</h3>
                         <button onClick={() => removeItem(item.id)} className={styles.trashBtn}>
                           <Trash2 size={18} />
                         </button>
                      </div>
                      <p className={styles.itemPrice}>{item.priceString}</p>
                      
                      <div className={styles.quantityControls}>
                        <button 
                          className={styles.qtyBtn}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className={styles.qtyValue}>{item.quantity}</span>
                        <button 
                          className={styles.qtyBtn}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className={styles.footer}>
                <div className={styles.total}>
                  <span>Total</span>
                  {/* Note: In a real app we'd parse the FCFA strings back to numbers properly
                      or store raw numbers. For this mock, we just show a total if we had raw numbers.
                      Since we have mix, let's just show 'Calculé à la caisse' or similar if simpler,
                      OR we assume items have a numeric 'price' field as per our Interface.
                   */}
                   <span>{formatGenericPrice(cartTotal)}</span>
                </div>
                <button className={styles.checkoutBtn}>
                  Commander
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
