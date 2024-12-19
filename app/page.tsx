"use client";
import styles from "./page.module.css";
import AuthPage from "@/components/Auth/AuthComponent";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <AuthPage />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
