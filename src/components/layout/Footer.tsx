import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3>SamaLook</h3>
            <p>L'excellence horlogère et l'élégance des accessoires modernes. Une sélection curée pour les connaisseurs.</p>
          </div>
          
          <div className={styles.section}>
            <h4>Boutique</h4>
            <nav className={styles.links}>
              <Link href="/montres">Montres</Link>
              <Link href="/accessoires">Accessoires</Link>
              <Link href="/nouveautes">Nouveautés</Link>
            </nav>
          </div>
          
          <div className={styles.section}>
            <h4>Aide</h4>
            <nav className={styles.links}>
              <Link href="/contact">Contact</Link>
              <Link href="/livraison">Livraison & Retours</Link>
              <Link href="/faq">FAQ</Link>
            </nav>
          </div>
          
          <div className={styles.section}>
            <h4>Légal</h4>
            <nav className={styles.links}>
              <Link href="/mentions-legales">Mentions Légales</Link>
              <Link href="/cgv">CGV</Link>
              <Link href="/confidentialite">Confidentialité</Link>
            </nav>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2026 SamaLook. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
