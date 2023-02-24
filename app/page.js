import Movie from "./Movie";
import styles from './page.module.css';
import Link from "next/link";

export default async function Home() {
  return (
    <main className={styles.firstMain}>
      <div className={styles.container}>
        <h2>Log in</h2>
      <div>
        <Link href="/register">
          <button>Register</button>
        </Link>
        <Link href="/login">
          <button>Sign in</button>
        </Link>
      </div>
      </div>
    </main>
  );
}
