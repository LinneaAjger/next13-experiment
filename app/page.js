import Movie from "./movies/Movie";
import styles from './page.module.css';
import Link from "next/link";
import Form from "./Form";
import Image from "next/image";


export default async function Home() {
  return (
    <main className={styles.startPage}>
        <div>
          <h2 className={styles.firstPage}>Get your popcorn ready</h2>
          <button>
            <a
            href="/register">Register</a>
          </button>
        </div>
    </main>
  );
}
