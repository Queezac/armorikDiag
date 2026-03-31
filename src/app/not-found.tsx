import type { Metadata } from "next";
import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page introuvable – Armorik Diagnostics",
  description: "La page que vous cherchez n'existe pas ou a été déplacée. Retournez à l'accueil d'Armorik Diagnostics.",
};

export default function NotFound() {
  return (
    <main className={styles.container}>
      <p className={styles.code}>404</p>
      <hr className={styles.divider} />
      <h1 className={styles.title}>Page introuvable</h1>
      <p className={styles.subtitle}>
        Oups&nbsp;! La page que vous cherchez n&apos;existe pas ou a été déplacée.
        <br />
        Pas d&apos;inquiétude, nous sommes là pour vous guider.
      </p>
      <div className={styles.actions}>
        <Link href="/" className={`${styles.btn} ${styles.btnPrimary}`}>
          <i className="fas fa-home" aria-hidden="true">&nbsp;</i>
          Retour à l&apos;accueil
        </Link>
        <Link href="/#contact" className={`${styles.btn} ${styles.btnSecondary}`}>
          <i className="fas fa-envelope" aria-hidden="true">&nbsp;</i>
          Nous contacter
        </Link>
      </div>
    </main>
  );
}
